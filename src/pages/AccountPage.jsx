import { Link } from "react-router-dom"
import { useState } from "react"
import { Mail, Lock, ArrowRight } from "lucide-react"

export default function AccountPage() {
  const [mode, setMode] = useState("signin") // "signin" | "create"

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-site py-20 md:py-32">
        <div className="max-w-md mx-auto">
          <p className="eyebrow text-center">My Account</p>
          <h1
            id="account-title"
            className="display text-3xl md:text-4xl text-center mt-3"
          >
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-ink-secondary text-center mt-3 text-sm">
            Track orders, save pieces, and access your wishlist.
          </p>

          <form
            className="mt-10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
            aria-label={mode === "signin" ? "Sign in" : "Create account"}
          >
            {mode === "create" && (
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input-base w-full"
                  required
                />
              </label>
            )}
            <label className="block">
              <span className="sr-only">Email</span>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted"
                  strokeWidth={1.5}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-base w-full pl-10"
                  required
                />
              </div>
            </label>
            <label className="block">
              <span className="sr-only">Password</span>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted"
                  strokeWidth={1.5}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-base w-full pl-10"
                  required
                  minLength={6}
                />
              </div>
            </label>
            <button type="submit" className="btn-primary w-full">
              {mode === "signin" ? "Sign In" : "Create Account"}
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-ink-secondary">
            {mode === "signin" ? (
              <>
                New to Velmora?{" "}
                <button
                  type="button"
                  onClick={() => setMode("create")}
                  className="text-accent hover:text-accent-light"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className="text-accent hover:text-accent-light"
                >
                  Sign in
                </button>
              </>
            )}
          </div>

          <p className="text-center text-[11px] text-ink-muted tracking-wider2 mt-6">
            Demo only — connect a real auth provider to enable accounts.
          </p>

          <div className="text-center mt-6">
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-eyebrow text-ink-muted hover:text-ink-primary"
            >
              Continue browsing
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
