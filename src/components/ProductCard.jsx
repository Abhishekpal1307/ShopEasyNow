import { motion } from 'framer-motion'
import { FiHeart, FiShoppingCart, FiStar, FiShoppingBag } from 'react-icons/fi'

function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export default function ProductCard({ product, onAddToCart, onWishlistToggle, isWishlisted, onOrderNow }) {
  const ratingStars = Array.from({ length: 5 }, (_, index) => index + 1)
  return (
    <motion.article
      id={`product-card-${product.id}`}
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="glass-card group overflow-hidden"
    >
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80'
          }}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <button
          type="button"
          onClick={() => onWishlistToggle(product)}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/85 text-slate-900 shadow-md transition hover:bg-cyan-500 hover:text-white dark:bg-slate-950/90 dark:text-slate-100"
          aria-label="Toggle wishlist"
        >
          <FiHeart className={`h-5 w-5 ${isWishlisted ? 'text-rose-500' : ''}`} />
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
            {product.category}
          </span>
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {formatPrice(product.price)}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{product.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-amber-400">
            {ratingStars.map((star) => (
              <FiStar key={star} className={star <= Math.round(product.rating) ? 'h-4 w-4' : 'h-4 w-4 text-slate-300 dark:text-slate-600'} />
            ))}
            <span className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-300">{product.rating}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <FiShoppingBag className="h-4 w-4" />
            Best seller
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            Add to Cart
          </button>
          <button
            type="button"
            onClick={() => onOrderNow(product)}
            className="rounded-full bg-[#E3DFFF] px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#E3DFFF]/30 transition hover:scale-[1.01]"
          >
            Order Now
          </button>
          <button
            type="button"
            onClick={() => onWishlistToggle(product)}
            className="rounded-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-rose-400 hover:bg-rose-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-rose-900/50"
          >
            {isWishlisted ? 'Remove' : 'Wishlist'}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
