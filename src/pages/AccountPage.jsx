import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, LogOut, ChevronRight, ArrowLeft } from 'lucide-react';

const MOCK_ORDERS = [
  {
    id: 'SH-2026-0041',
    date: 'June 12, 2026',
    status: 'Delivered',
    items: [{ name: 'Crescent Ring', size: '7', price: 285 }],
    total: 285,
  },
  {
    id: 'SH-2026-0028',
    date: 'May 3, 2026',
    status: 'Delivered',
    items: [
      { name: 'Thin Band Necklace', size: null, price: 195 },
      { name: 'Arc Earrings', size: null, price: 245 },
    ],
    total: 440,
  },
];

function LoginForm({ onLogin, onSwitch }) {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email: values.email, name: values.email.split('@')[0] });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1
        className="text-4xl md:text-5xl text-ink mb-3"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        Sign In
      </h1>
      <p className="text-muted text-sm mb-10" style={{ letterSpacing: '0.04em' }}>
        Welcome back to your quiet hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-1">
          <label className="label-caps text-muted block">Email</label>
          <input
            type="email"
            required
            value={values.email}
            onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
            placeholder="you@example.com"
            className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="label-caps text-muted block">Password</label>
          <input
            type="password"
            required
            value={values.password}
            onChange={e => setValues(v => ({ ...v, password: e.target.value }))}
            placeholder="••••••••"
            className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            className="label-caps text-muted text-xs hover:text-gold transition-colors duration-300"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-ink text-cream py-4 label-caps text-xs tracking-widest hover:bg-gold hover:text-ink transition-colors duration-300"
        >
          Sign In
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-muted">
        New to Small Hours?{' '}
        <button
          onClick={onSwitch}
          className="text-ink underline underline-offset-4 hover:text-gold transition-colors duration-300"
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

function RegisterForm({ onRegister, onSwitch }) {
  const [values, setValues] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email: values.email, name: values.name });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1
        className="text-4xl md:text-5xl text-ink mb-3"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        Create Account
      </h1>
      <p className="text-muted text-sm mb-10" style={{ letterSpacing: '0.04em' }}>
        Keep track of your pieces and quiet rituals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-1">
          <label className="label-caps text-muted block">Name</label>
          <input
            type="text"
            required
            value={values.name}
            onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
            placeholder="Your name"
            className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="label-caps text-muted block">Email</label>
          <input
            type="email"
            required
            value={values.email}
            onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
            placeholder="you@example.com"
            className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="label-caps text-muted block">Password</label>
          <input
            type="password"
            required
            value={values.password}
            onChange={e => setValues(v => ({ ...v, password: e.target.value }))}
            placeholder="Min. 8 characters"
            className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-ink text-cream py-4 label-caps text-xs tracking-widest hover:bg-gold hover:text-ink transition-colors duration-300"
        >
          Create Account
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-muted">
        Already have an account?{' '}
        <button
          onClick={onSwitch}
          className="text-ink underline underline-offset-4 hover:text-gold transition-colors duration-300"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="label-caps text-muted mb-2">Your Account</p>
        <h1
          className="text-4xl md:text-5xl text-ink"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          {user.name}
        </h1>
        <p className="text-muted text-sm mt-1">{user.email}</p>
      </div>

      {/* Tab Nav */}
      <div className="flex gap-8 border-b border-ink/10 mb-10">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-4 label-caps text-xs transition-colors duration-300 border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-ink text-ink'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          {MOCK_ORDERS.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-8 h-8 text-muted mx-auto mb-4" />
              <p className="text-muted text-sm">No orders yet.</p>
              <Link
                to="/shop"
                className="inline-block mt-6 label-caps text-xs text-ink border border-ink px-8 py-3 hover:bg-gold hover:border-gold hover:text-ink transition-colors duration-300"
              >
                Explore the Collection
              </Link>
            </div>
          ) : (
            MOCK_ORDERS.map(order => (
              <div key={order.id} className="border border-ink/10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="label-caps text-xs text-muted mb-1">{order.date}</p>
                    <p className="text-ink text-sm font-medium">{order.id}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="label-caps text-xs text-gold bg-gold/10 px-3 py-1">
                      {order.status}
                    </span>
                    <button className="flex items-center gap-1 label-caps text-xs text-muted hover:text-ink transition-colors duration-300">
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 border-t border-ink/10 pt-6">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className="text-ink text-sm">{item.name}</p>
                        {item.size && (
                          <p className="label-caps text-xs text-muted mt-0.5">Size {item.size}</p>
                        )}
                      </div>
                      <p className="text-ink text-sm">${item.price}</p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-ink/10">
                    <p className="label-caps text-xs text-muted">Total</p>
                    <p className="text-ink text-sm font-medium">${order.total}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Wishlist Tab */}
      {activeTab === 'wishlist' && (
        <div className="text-center py-20">
          <Heart className="w-8 h-8 text-muted mx-auto mb-4" />
          <p className="text-muted text-sm mb-2">Your wishlist lives here.</p>
          <p className="text-muted/60 text-xs mb-8">Save pieces you want to keep close.</p>
          <Link
            to="/wishlist"
            className="inline-block label-caps text-xs text-ink border border-ink px-8 py-3 hover:bg-gold hover:border-gold hover:text-ink transition-colors duration-300"
          >
            View Wishlist
          </Link>
        </div>
      )}

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="max-w-md space-y-8">
          <div className="space-y-1">
            <label className="label-caps text-muted block">Name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="label-caps text-muted block">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full bg-transparent border-0 border-b border-ink/20 pb-2 text-ink focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
            />
          </div>
          <button className="bg-ink text-cream px-10 py-3 label-caps text-xs tracking-widest hover:bg-gold hover:text-ink transition-colors duration-300">
            Save Changes
          </button>

          <div className="pt-8 border-t border-ink/10">
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-muted hover:text-ink transition-colors duration-300 label-caps text-xs"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Sign out (always visible) */}
      {activeTab !== 'profile' && (
        <div className="mt-16 pt-8 border-t border-ink/10">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-muted hover:text-ink transition-colors duration-300 label-caps text-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default function AccountPage() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleRegister = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 label-caps text-xs text-muted hover:text-ink transition-colors duration-300 mb-16"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </Link>

        {user ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : (
          <>
            {mode === 'login' ? (
              <LoginForm onLogin={handleLogin} onSwitch={() => setMode('register')} />
            ) : (
              <RegisterForm onRegister={handleRegister} onSwitch={() => setMode('login')} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
