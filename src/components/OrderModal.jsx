import { AnimatePresence, motion } from 'framer-motion'
import { FiCheckCircle, FiShoppingCart, FiX } from 'react-icons/fi'

function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export default function OrderModal({ product, isOpen, onClose, onConfirmOrder }) {
  const isCartOrder = Boolean(product?.items)
  const orderName = isCartOrder ? `${product.items.length} items from your cart` : product?.name
  const orderAmount = isCartOrder ? product.total : product?.price

  return (
    <AnimatePresence>
      {isOpen && product ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-xl rounded-[36px] border border-white/10 bg-slate-50/95 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/95"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
                  <FiCheckCircle className="h-5 w-5" /> Order Confirmed
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  Your order has been placed successfully.
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                aria-label="Close modal"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-4 rounded-[28px] border border-slate-200 bg-white/80 p-6 dark:border-slate-700 dark:bg-slate-950/80">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">Order</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{orderName}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">Amount</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{formatPrice(orderAmount)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">Order ID</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{product.orderId}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Continue Shopping
              </button>
              <button
                type="button"
                onClick={onConfirmOrder}
                className="inline-flex items-center justify-center rounded-full bg-[#E3DFFF] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#E3DFFF]/30 transition hover:-translate-y-0.5"
              >
                <FiShoppingCart className="mr-2 h-4 w-4" /> Order Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
