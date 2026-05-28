import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const dbClient = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const AuthContext = createContext(null)

const SESSION_KEY = 'cuhk_alumni_session'

async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + 'cuhk_alumni_salt_2024')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

function saveSession(userData) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData))
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [memberProfile, setMemberProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchMemberProfile = useCallback(async (userId) => {
    if (!userId) return null
    try {
      const { data: res } = await dbClient.from('MemberProfile').select('*').eq('user_id', userId)
      const list = res?.data?.list ?? []
      const profile = list[0] ?? null
      setMemberProfile(profile)
      return profile
    } catch (e) {
      console.error('fetchMemberProfile error', e)
      return null
    }
  }, [])

  useEffect(() => {
    const session = loadSession()
    if (session?.id) {
      setUser(session)
      fetchMemberProfile(session.id).finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [fetchMemberProfile])

  const login = async (email, password) => {
    const passwordHash = await hashPassword(password)
    const { data: res } = await dbClient.from('MemberProfile').select('*').eq('email', email.toLowerCase().trim())
    const list = res?.data?.list ?? []
    if (list.length === 0) throw new Error('邮箱未注册，请先注册')
    const profile = list[0]
    const profileData = profile.data ?? {}
    if (profileData.password_hash !== passwordHash) throw new Error('密码错误，请重试')
    const userData = {
      id: profileData.user_id,
      email: profileData.email,
      name: profileData.real_name,
      role: profileData.role ?? 'user',
    }
    saveSession(userData)
    setUser(userData)
    setMemberProfile(profile)
    return { user: userData }
  }

  const register = async (email, password, name) => {
    const normalizedEmail = email.toLowerCase().trim()
    // Check if email already exists
    const { data: checkRes } = await dbClient.from('MemberProfile').select('*').eq('email', normalizedEmail)
    const existing = checkRes?.data?.list ?? []
    if (existing.length > 0) throw new Error('该邮箱已注册，请直接登录')
    const passwordHash = await hashPassword(password)
    const userId = generateUUID()
    const userData = { id: userId, email: normalizedEmail, name, role: 'user' }
    saveSession(userData)
    setUser(userData)
    return userData
  }

  const logout = () => {
    clearSession()
    setUser(null)
    setMemberProfile(null)
  }

  const refreshProfile = useCallback(async () => {
    if (user?.id) await fetchMemberProfile(user.id)
  }, [user, fetchMemberProfile])

  const isAdmin = user?.role === 'admin'
  const isApprovedMember = memberProfile?.data?.status === 'approved' && memberProfile?.data?.membership_paid === true

  return (
    <AuthContext.Provider value={{ user, memberProfile, loading, login, register, logout, refreshProfile, isAdmin, isApprovedMember, client: dbClient }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
