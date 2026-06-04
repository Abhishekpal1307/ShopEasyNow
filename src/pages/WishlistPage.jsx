import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import WishlistItem from '../components/Wishlist'

export default function WishlistPage({ onNavigate }) {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (wishlistItems.length === 0) {
    return (
      <section className="glass-card flex min-h-[420px] flex-col items-center justify-center rounded-[36px] border border-white/20 text-center dark:border-slate-700/70 dark:bg-slate-900/80">
        <p className="text-4xl font-semibold text-slate-900 dark:text-slate-100">Your wishlist is empty</p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Save your favorite products here and move them to your cart when you are ready.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('Products')}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
        >
          Discover products
        </button>
      </section>
    )
  }

  return (
    <section className="grid gap-8">
      <div className="glass-panel flex flex-col gap-2 rounded-[32px] border border-slate-200 bg-slate-50/90 px-6 py-6 dark:border-slate-700 dark:bg-slate-900/70">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Wishlist</p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Saved for later</h2>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
          Manage your curated picks and move the most exciting products directly into your cart.
        </p>
      </div>

      <div className="grid gap-6">
        {wishlistItems.map((product) => (
          <WishlistItem
            key={product.id}
            product={product}
            onRemove={removeFromWishlist}
            onAddToCart={(item) => {
              addToCart(item)
              removeFromWishlist(item.id)
            }}
          />
        ))}
      </div>
    </section>
  )
}
