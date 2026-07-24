import { Link, useLocation } from 'react-router-dom'
import { Home, Search, ShoppingBag, User } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function MobileBottomNav() {
  const location = useLocation()
  const { totalItems, openCart } = useCart()

  const items = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Shop', href: '/shop' },
    { icon: ShoppingBag, label: 'Cart', action: openCart, badge: totalItems },
    { icon: User, label: 'Account', href: '#' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {items.map((item) => {
          const isActive = item.href && location.pathname === item.href
          const content = (
            <>
              <div className="relative">
                <item.icon className={cn('h-5 w-5', isActive ? 'text-accent' : 'text-muted-foreground')} />
                {item.badge > 0 && (
                  <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={cn('mt-1 text-[10px]', isActive ? 'text-accent' : 'text-muted-foreground')}>
                {item.label}
              </span>
            </>
          )

          if (item.action) {
            return (
              <button key={item.label} onClick={item.action} className="flex flex-col items-center px-4 py-1">
                {content}
              </button>
            )
          }

          return (
            <Link
              key={item.label}
              to={item.href}
              className="flex flex-col items-center px-4 py-1"
            >
              {content}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
