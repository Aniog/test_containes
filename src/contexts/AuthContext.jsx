import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { Auth, DataClient, User } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const AuthContext = createContext(null)

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [memberProfile, setMemberProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  const fetchMemberProfile = useCallback(async (userId) => {
    if (!userId) return null
    try {
      const { data: response } = await client
        .from('Member Profiles')
        .select('*')
        .eq('user_id', userId)
      const list = response?.data?.list ?? []
      const profile = list[0] ?? null
      setMemberProfile(profile)
      return profile
    } catch (err) {
      console.error('Failed to fetch member profile:', err)
      setMemberProfile(null)
      return null
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      try {
        const { session } = await Auth.getSession()
        if (session) {
          const { user: currentUser } = await Auth.getUser()
          setUser(currentUser)
          setIsAdmin(currentUser?.role === 'admin')
          await fetchMemberProfile(currentUser?.id)
        }
      } catch (err) {
        console.error('Auth init error:', err)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [fetchMemberProfile])

  const signIn = async (email, password) => {
    const { user: u, session, error } = await Auth.signInWithPassword({ email, password })
    if (error) throw error
    setUser(u)
    setIsAdmin(u?.role === 'admin')
    await fetchMemberProfile(u?.id)
    return { user: u, session }
  }

  const signUp = async (email, password, name) => {
    const { user: u, error } = await Auth.signUp({
      email,
      password,
      options: { data: { name } }
    })
    if (error) throw error
    setUser(u)
    return u
  }

  const signOut = async () => {
    await Auth.signOut()
    setUser(null)
    setMemberProfile(null)
    setIsAdmin(false)
  }

  const refreshProfile = useCallback(async () => {
    if (user?.id) await fetchMemberProfile(user.id)
  }, [user, fetchMemberProfile])

  return (
    <AuthContext.Provider value={{
      user, memberProfile, loading, isAdmin,
      signIn, signUp, signOut, refreshProfile, client
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
