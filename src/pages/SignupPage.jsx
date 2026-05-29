import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import { Clock, Eye, EyeOff, Loader2, AlertCircle, Check } from 'lucide-react'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    try {
      await signup(email, password, name)
      setSuccess(true)
      setTimeout(() => navigate('/'), 2000)
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-slate-100 mb-2">Welcome to the Archive</h2>
        <p className="text-slate-400">Your Observer clearance has been granted. Redirecting...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.05), transparent 60%)' }} />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-violet-500/40 mb-4" style={{ background: 'rgba(124,58,237,0.05)' }}>
            <Clock className="w-7 h-7 text-violet-400" />
          </div>
          <h1 className="font-cinzel text-2xl font-bold text-slate-100">Join the Archive</h1>
          <p className="text-slate-500 text-sm mt-1">Register for Observer clearance</p>
        </div>

        <div className="glass border border-violet-500/20 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">FULL NAME</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/5 border border-violet-500/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500/40 text-sm"
              />
            </div>
            <div>
              <label className="block font-mono-archive text-xs text-slate-500 tracking-wide mb-2">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="agent@archive.temporal"
                className="w-full px-4 py-3 bg-white/5 border border-violet-500/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500/40 text-sm"
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
                  placeholder="Min. 6 characters"
                  className="w-full px-4 py-3 pr-10 bg-white/5 border border-violet-500/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500/40 text-sm"
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

            <div className="p-3 rounded-lg bg-violet-500/5 border border-violet-500/15">
              <p className="text-xs text-slate-500 leading-relaxed">
                By registering, you acknowledge that the Archive may contact you regarding temporal anomalies in your vicinity. All information is classified.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-white transition-all hover:scale-105 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
              {loading ? 'Processing...' : 'Register for Observer Access'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-violet-500/10 text-center">
            <p className="text-sm text-slate-500">
              Already a member?{' '}
              <Link to="/login" className="text-violet-400 hover:text-violet-300 transition-colors">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
