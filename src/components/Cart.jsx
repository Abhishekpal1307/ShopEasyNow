import { motion } from 'framer-motion'
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

export default function CartItem({ item, onRemove, onDecrease, onIncrease }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="glass-card grid gap-6 rounded-[32px] border-white/20 bg-[#DECDF5]/80 p-5 sm:grid-cols-[120px_auto]"
    >
      <img src={item.image} alt={item.name} className="h-32 w-full rounded-3xl object-cover" />
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.name}</h3>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700 transition hover:border-rose-400 hover:bg-rose-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-rose-900/50"
              aria-label="Remove item"
            >
              <FiTrash2 className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{item.category}</p>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">₹{item.price.toLocaleString('en-IN')}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#DECDF5]/80 px-3 py-2 text-sm font-medium text-slate-700">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DECDF5] text-slate-700 shadow-sm transition hover:bg-[#c9c1f5]"
              aria-label="Decrease quantity"
            >
              <FiMinus className="h-4 w-4" />
            </button>
            <span>{item.quantity}</span>
            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DECDF5] text-slate-700 shadow-sm transition hover:bg-[#c9c1f5]"
              aria-label="Increase quantity"
            >
              <FiPlus className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-full bg-[#DECDF5] px-4 py-2 text-sm font-medium text-slate-700">
            Total: ₹{(item.price * item.quantity).toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
