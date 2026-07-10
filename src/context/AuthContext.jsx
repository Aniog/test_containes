import { createContext, useContext, useEffect, useState } from 'react'
import { createClient, saveAccessToken, removeAccessToken, getAccessToken } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const sdkClient = createClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const auth = sdkClient.auth

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined) // undefined = loading, null = logged out
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Restore session from localStorage token
    const token = typeof window !== 'undefined'
      ? (window.localStorage?.getItem('vibe_coder_access_token') || window.localStorage?.getItem('token'))
      : null

    if (token) {
      auth.setToken(token)
      auth.user()
        .then(u => { setUser(u ?? null) })
        .catch(() => { removeAccessToken(); setUser(null) })
        .finally(() => setLoading(false))
    } else {
      setUser(null)
      setLoading(false)
    }
  }, [])

  const signUp = async ({ email, password, name }) => {
    const result = await auth.register({ email, password, name })
    // register may return token directly or inside access_token
    const token = result?.access_token || result?.token
    if (token) {
      auth.setToken(token)
      saveAccessToken(token)
    }
    const u = await auth.user().catch(() => ({ email, name }))
    setUser(u ?? { email, name })
    return u
  }

  const signIn = async ({ email, password }) => {
    const result = await auth.loginViaEmailPassword(email, password)
    const token = result?.access_token || result?.token
    if (!token) throw new Error(result?.message || '登录失败，请检查邮箱和密码')
    auth.setToken(token)
    saveAccessToken(token)
    const u = await auth.user().catch(() => ({ email }))
    setUser(u ?? { email })
    return u
  }

  const signOut = async () => {
    auth.logout()
    removeAccessToken()
    setUser(null)
  }

  const refreshUser = async () => {
    const u = await auth.user().catch(() => null)
    setUser(u ?? null)
    return u
  }

  const updateUserMeta = async (data) => {
    await auth.updateUser(data)
    await refreshUser()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, refreshUser, updateUserMeta, auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
