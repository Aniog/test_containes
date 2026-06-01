import { useState } from 'react';
import { User, Mail, Lock, Sparkles, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountPage() {
  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'success'
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setMode('success');
  };

  if (mode === 'success') {
    return (
      <div className="min-h-screen bg-[#fef9f0] pt-20 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center animate-bounce-in">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-7xl mb-4 animate-float inline-block">🎉</div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="font-display text-3xl text-purple-900 mb-3">
              {mode === 'success' && form.name ? `Welcome, ${form.name}!` : 'Welcome back!'}
            </h2>
            <p className="text-gray-600 mb-6">
              You're now part of the Monster Match family! Start exploring magical creatures and find your perfect companion.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/quiz"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display shadow-md hover:shadow-lg transition-all"
              >
                ✨ Take the Compatibility Quiz
              </Link>
              <Link
                to="/monsters"
                className="px-6 py-3 border-2 border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
              >
                Browse Monsters 🐾
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg animate-float">
            🐾
          </div>
          <h1 className="font-display text-3xl text-purple-900">
            {mode === 'login' ? 'Welcome Back!' : 'Join Monster Match'}
          </h1>
          <p className="text-gray-500 mt-1">
            {mode === 'login' ? 'Sign in to your magical account' : 'Create your free account today'}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2.5 rounded-xl font-display text-sm transition-all ${
              mode === 'login' ? 'bg-white text-purple-700 shadow-md' : 'text-gray-500'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2.5 rounded-xl font-display text-sm transition-all ${
              mode === 'register' ? 'bg-white text-purple-700 shadow-md' : 'text-gray-500'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl space-y-5">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Your name"
                  className="magic-input pl-11"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={form.email}
                onChange={e => update('email', e.target.value)}
                placeholder="your@email.com"
                className="magic-input pl-11"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={e => update('password', e.target.value)}
                placeholder="••••••••"
                className="magic-input pl-11 pr-11"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mode === 'register' && (
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-xs text-purple-700 font-semibold">By creating an account you agree to our Terms of Service and Privacy Policy. We'll never share your data with third parties.</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          {mode === 'login' && (
            <p className="text-center text-sm text-gray-500">
              <button type="button" className="text-purple-600 font-semibold hover:underline">
                Forgot your password?
              </button>
            </p>
          )}
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-purple-600 font-semibold hover:underline"
          >
            {mode === 'login' ? 'Register free' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}
