import { motion } from 'framer-motion'
import { FiHeart, FiShoppingBag, FiMoon, FiSun } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', value: 'Home' },
  { label: 'Products', value: 'Home' },
  { label: 'Wishlist', value: 'Wishlist' },
  { label: 'Cart', value: 'Cart' },
]

export default function Navbar({ activePage, onNavigate, cartCount, wishlistCount, theme, onToggleTheme }) {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-50/80 backdrop-blur-xl shadow-sm dark:bg-slate-950/80"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-4 py-4 md:px-6">
        <button
          type="button"
          onClick={() => onNavigate('Home')}
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
            S
          </span>
          ShopEasy
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => onNavigate(link.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activePage === link.value
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:bg-slate-200 dark:text-slate-950'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('Wishlist')}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
            aria-label="Wishlist"
          >
            <FiHeart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-500 px-1.5 text-[11px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('Cart')}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
            aria-label="Cart"
          >
            <FiShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-cyan-500 px-1.5 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  )
}
