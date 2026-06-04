import ProductCard from './ProductCard'
import LoadingSkeleton from './LoadingSkeleton'

export default function ProductGrid({ products, loading, onAddToCart, onWishlistToggle, isWishlisted, onOrderNow }) {
  if (loading) {
    return <LoadingSkeleton />
  }

  if (products.length === 0) {
    return (
      <div className="glass-panel flex min-h-[260px] items-center justify-center rounded-[28px] border border-slate-200 bg-slate-50/70 text-center text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
        <div>
          <p className="text-3xl font-semibold">No products found</p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Try broadening your search or selecting another category.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onWishlistToggle={onWishlistToggle}
          isWishlisted={isWishlisted(product.id)}
          onOrderNow={onOrderNow}
        />
      ))}
    </div>
  )
}
