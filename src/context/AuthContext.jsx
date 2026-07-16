import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { authClient, client, getRows, getSchemaData, getAccessToken } from '../api/client.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [memberProfile, setMemberProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState(null)

  const fetchMemberProfile = useCallback(async (userId) => {
    if (!userId) return null
    try {
      const { data: response } = await client
        .from('Member Profiles')
        .select('*')
        .eq('user_id', userId)
      const rows = getRows(response)
      const profile = rows[0] || null
      setMemberProfile(profile)
      return profile
    } catch (err) {
      console.error('Failed to fetch member profile:', err)
      return null
    }
  }, [])

  const refreshProfile = useCallback(async () => {
    try {
      const userData = await authClient.auth.user()
      const currentUser = userData?.data?.user || userData?.user || userData
      if (currentUser?.id) {
        await fetchMemberProfile(currentUser.id)
      }
    } catch (err) {
      console.error('refreshProfile error:', err)
    }
  }, [fetchMemberProfile])

  useEffect(() => {
    const init = async () => {
      try {
        const token = getAccessToken()
        if (token) {
          authClient.auth.setToken(token)
          const userData = await authClient.auth.user()
          const currentUser = userData?.data?.user || userData?.user || userData
          if (currentUser?.id) {
            setUser(currentUser)
            await fetchMemberProfile(currentUser.id)
          }
        }
      } catch (err) {
        console.error('Auth init error:', err)
        // Token may be expired, clear it
        authClient.auth.logout()
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [fetchMemberProfile])

  const signUp = async ({ email, password, name, studentId, graduationYear, major, phone }) => {
    setAuthError(null)
    try {
      const result = await authClient.auth.register({
        email,
        password,
        name,
        student_id: studentId,
        graduation_year: graduationYear,
        major,
        phone,
      })
      console.log('Register result:', result)
      return result
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || '注册失败，请重试'
      setAuthError(msg)
      throw new Error(msg)
    }
  }

  const signIn = async ({ email, password }) => {
    setAuthError(null)
    try {
      const result = await authClient.auth.loginViaEmailPassword(email, password)
      console.log('Login result:', result)
      const { access_token, user: loggedUser } = result
      if (!access_token) {
        throw new Error('登录失败，未获取到令牌')
      }
      authClient.auth.setToken(access_token)
      setUser(loggedUser)
      await fetchMemberProfile(loggedUser?.id)
      return { user: loggedUser, access_token }
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || '邮箱或密码错误'
      setAuthError(msg)
      throw new Error(msg)
    }
  }

  const signOut = async () => {
    authClient.auth.logout()
    setUser(null)
    setMemberProfile(null)
  }

  const isAdmin = user?.role === 'admin'
  const profileData = getSchemaData(memberProfile)
  const isMember = !!(memberProfile && profileData.membership_status === 'active')
  const isApprovedMember = isMember

  return (
    <AuthContext.Provider value={{
      user,
      memberProfile,
      loading,
      authError,
      setAuthError,
      signUp,
      signIn,
      signOut,
      isAdmin,
      isMember,
      isApprovedMember,
      refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
