const categories = ['All', 'Electronics', 'Clothing', 'Books']

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="glass-panel flex flex-wrap items-center gap-3 px-4 py-5">
      {categories.map((label) => {
        const isActive = selectedCategory === label
        return (
          <button
            key={label}
            type="button"
            onClick={() => onSelectCategory(label)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              isActive
                ? 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-100 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
