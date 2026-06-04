import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'

export default function Home({
  products,
  loading,
  searchQuery,
  category,
  sortOption,
  onSearch,
  onCategoryChange,
  onSortChange,
  onAddToCart,
  onWishlistToggle,
  isWishlisted,
  onOrderNow,
  onSelectProduct,
  currentCategory,
  resultCount,
  onExplore,
  onShop,
}) {
  const handleCategoryClick = (categoryName) => {
    onCategoryChange(categoryName)
    // Scroll to products section
    setTimeout(() => {
      const section = document.querySelector('#shop-products')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <section className="grid gap-10 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100 dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950 rounded-2xl">
      <Hero onExplore={onExplore} onShop={onShop} onSelectProduct={onSelectProduct} onSelectCategory={handleCategoryClick} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 lg:grid-cols-[1.8fr_1fr]"
      >
        <div className="rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 p-8 shadow-2xl shadow-amber-500/20 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Product Analytics</p>
              <h2 className="mt-3 text-4xl font-extrabold text-white">Shop performance at a glance</h2>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100 ring-1 ring-amber-300/20">
              Showing {resultCount} items in {currentCategory} category
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <motion.div
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-amber-500/10"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-6xl font-black text-amber-300">{products.length}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100/80">Total Products</p>
            </motion.div>
            <motion.div
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-amber-500/10"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-6xl font-black text-slate-100">{currentCategory}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100/80">Active Category</p>
            </motion.div>
            <motion.div
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-amber-500/10"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-6xl font-black text-emerald-300">{resultCount}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100/80">Search Results</p>
            </motion.div>
          </div>
        </div>

        <div className="rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 p-6 shadow-2xl shadow-amber-500/20 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Insights</p>
          <h3 className="mt-4 text-3xl font-bold text-white">Stay focused on the best sellers</h3>
          <p className="mt-3 text-sm leading-6 text-amber-100/80">
            Easily switch between categories and keep an eye on what’s trending. Your product listing is built for quick discovery, with strong visual hierarchy and clear action triggers.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl bg-white/5 p-4 text-white shadow-lg shadow-amber-500/10 border border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">Category clarity</p>
              <p className="mt-2 text-sm text-amber-100/80">Current filter updates instantly when you choose Clothing, Electronics or Books.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-4 text-white shadow-lg shadow-amber-500/10 border border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">Search-ready</p>
              <p className="mt-2 text-sm text-amber-100/80">Search and sort combine with categories so every product list is easy to browse.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6">
        <SearchBar searchQuery={searchQuery} onSearch={onSearch} sortOption={sortOption} onSortChange={onSortChange} />
        <CategoryFilter selectedCategory={category} onSelectCategory={onCategoryChange} />
      </div>

      <section id="shop-products">
        <ProductGrid
          products={products}
          loading={loading}
          onAddToCart={onAddToCart}
          onWishlistToggle={onWishlistToggle}
          isWishlisted={isWishlisted}
          onOrderNow={onOrderNow}
        />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mt-10 flex w-full max-w-xl justify-center"
      >
        <p className="rounded-full border border-amber-500/30 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 shadow-lg shadow-amber-500/20 backdrop-blur-sm">
          Crafted into a premium shopping experience by Abhishek.
        </p>
      </motion.div>
    </section>
  )
}
