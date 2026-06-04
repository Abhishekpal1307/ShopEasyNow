import CartItem from '../components/Cart'
import { useCart } from '../context/CartContext'

export default function CartPage({ onNavigate, onOrderNow }) {
  const { cartItems, totalItems, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="glass-card flex min-h-[420px] flex-col items-center justify-center rounded-[36px] border border-white/20 text-center dark:border-slate-700/70 dark:bg-slate-900/80">
        <p className="text-4xl font-semibold text-slate-900 dark:text-slate-100">Your cart is empty</p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Add premium products to your cart and return here to manage your order.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('Products')}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
        >
          Explore products
        </button>
      </section>
    )
  }

  return (
    <section className="grid gap-8">
      <div className="glass-panel flex flex-col gap-2 rounded-[32px] border border-slate-200 bg-slate-50/90 px-6 py-6 dark:border-slate-700 dark:bg-slate-900/70">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Cart summary</p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Your premium shopping cart</h2>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
          Review your items, adjust quantities, and continue to checkout with style.
        </p>
      </div>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onDecrease={decreaseQuantity}
            onIncrease={increaseQuantity}
          />
        ))}
      </div>

      <div className="glass-card flex flex-col gap-4 rounded-[32px] border border-white/20 p-6 text-slate-900 dark:border-slate-700/70 dark:bg-slate-950/80 dark:text-slate-100">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>Total items</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>Estimated total</span>
          <span>₹{totalPrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onNavigate('Products')}
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            Continue shopping
          </button>
          <button
            type="button"
            onClick={() => {
              const orderData = {
                items: cartItems,
                total: totalPrice,
                orderId: `SE-${Math.floor(100000 + Math.random() * 900000)}`,
              }
              onOrderNow(orderData)
            }}
            className="rounded-full bg-[#E3DFFF] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#E3DFFF]/30 transition hover:-translate-y-0.5"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  )
}
