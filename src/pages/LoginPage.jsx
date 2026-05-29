import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import { Clock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Authentication failed. Check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(0,212,255,0.05), transparent 60%)' }} />
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-cyan-400/40 mb-4" style={{ background: 'rgba(0,212,255,0.05)' }}>
            <Clock className="w-7 h-7 text-cyan-400" />
          </div>
          <h1 className="font-cinzel text-2xl font-bold text-slate-100">Archive Access</h1>
          <p className="text-slate-500 text-sm mt-1">Enter your credentials to access the temporal database</p>
        </div>

        <div className="glass border border-cyan-400/15 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="agent@archive.temporal"
                className="w-full px-4 py-3 bg-white/5 border border-cyan-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 text-sm"
              />
            </div>
            <div>
              <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">PASSWORD</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 pr-10 bg-white/5 border border-cyan-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 text-sm"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-slate-900 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)' }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
              {loading ? 'Authenticating...' : 'Access Archive'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-cyan-400/10 text-center">
            <p className="text-sm text-slate-500">
              No clearance yet?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors">Apply for membership</Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-6 font-mono-archive text-xs text-slate-700">
          UNAUTHORIZED ACCESS IS A TEMPORAL OFFENSE
        </p>
      </div>
    </div>
  )
}
