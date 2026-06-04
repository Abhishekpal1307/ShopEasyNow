import { motion } from 'framer-motion'
import { FiHeart, FiShoppingCart, FiX } from 'react-icons/fi'

export default function WishlistItem({ product, onRemove, onAddToCart }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="glass-card grid gap-6 rounded-[32px] border-white/20 p-5 sm:grid-cols-[120px_auto]"
    >
      <img src={product.image} alt={product.name} className="h-32 w-full rounded-3xl object-cover" />
      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{product.category}</p>
          </div>
          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700 transition hover:border-rose-400 hover:bg-rose-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-rose-900/50"
            aria-label="Remove wishlist item"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>

        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
          >
            <FiShoppingCart className="mr-2 h-4 w-4" />
            Move to Cart
          </button>
        </div>
      </div>
    </motion.article>
  )
}
