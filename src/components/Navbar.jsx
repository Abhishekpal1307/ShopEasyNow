import { motion } from 'framer-motion'
import { FiHeart, FiShoppingBag, FiMoon, FiSun } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', value: 'Home' },
  { label: 'Products', value: 'Products', action: 'scroll' },
  { label: 'Wishlist', value: 'Wishlist' },
  { label: 'Cart', value: 'Cart' },
]

export default function Navbar({ activePage, onNavigate, cartCount, wishlistCount, theme, onToggleTheme }) {
  const handleNavClick = (link) => {
    onNavigate(link.value)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-12 z-50 border-b border-amber-500/20 bg-slate-950/80 backdrop-blur-2xl shadow-lg navbar-sticky"
      style={{
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-4 py-4 md:px-6">
        <button
          type="button"
          onClick={() => onNavigate('Home')}
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white transition hover:text-amber-300"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 text-white shadow-lg shadow-amber-500/20">
            S
          </span>
          ShopEasy
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = link.value === activePage
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 shadow-lg shadow-amber-500/10 border border-amber-400/30'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-amber-300'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-500/30 bg-slate-800/50 text-amber-400 transition hover:border-amber-400/60 hover:text-amber-300 hover:bg-slate-700/50"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('Wishlist')}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-500/30 bg-slate-800/50 text-amber-400 transition hover:border-amber-400/60 hover:text-amber-300 hover:bg-slate-700/50"
            aria-label="Wishlist"
          >
            <FiHeart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-500 px-1.5 text-[11px] font-semibold text-slate-950 shadow-lg shadow-amber-500/50">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('Cart')}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-500/30 bg-slate-800/50 text-amber-400 transition hover:border-amber-400/60 hover:text-amber-300 hover:bg-slate-700/50"
            aria-label="Cart"
          >
            <FiShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-500 px-1.5 text-[11px] font-semibold text-slate-950 shadow-lg shadow-amber-500/50">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  )
}
