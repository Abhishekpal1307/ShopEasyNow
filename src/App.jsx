import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartProvider, useCart } from './context/CartContext'
import { WishlistProvider, useWishlist } from './context/WishlistContext'
import Navbar from './components/Navbar'
import OrderModal from './components/OrderModal'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import productsData from './data/products'

function AppContent() {
  const { cartItems, addToCart } = useCart()
  const { wishlistItems, toggleWishlist, isWishlisted } = useWishlist()
  const [page, setPage] = useState('Home')
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sortOption, setSortOption] = useState('featured')
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')
  const [orderProduct, setOrderProduct] = useState(null)
  const [pendingScrollToProducts, setPendingScrollToProducts] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('shopEasyTheme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('shopEasyTheme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()
    return productsData
      .filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(normalizedSearch)
        const matchesCategory = category === 'All' || product.category === category
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        if (sortOption === 'price-low') return a.price - b.price
        if (sortOption === 'price-high') return b.price - a.price
        if (sortOption === 'name-az') return a.name.localeCompare(b.name)
        return a.id - b.id
      })
  }, [category, searchQuery, sortOption])

  const handleOrderNow = (order) => {
    const toastOptions = {
      hideProgressBar: true,
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    }

    if (order?.items) {
      setOrderProduct(order)
      toast.success('Order placed successfully!', toastOptions)
      return
    }

    addToCart(order)
    setOrderProduct({
      ...order,
      orderId: `SE-${Math.floor(100000 + Math.random() * 900000)}`,
    })
    toast.success('Order placed successfully!', toastOptions)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart!`, { hideProgressBar: true, autoClose: 3000 })
  }

  const scrollToProduct = (productId) => {
    const productCard = document.getElementById(`product-card-${productId}`)
    if (productCard) {
      productCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleSelectProduct = (productName) => {
    const product = productsData.find((item) => item.name === productName)

    setPage('Home')
    setCategory('All')
    setSearchQuery('')

    if (product) {
      window.setTimeout(() => scrollToProduct(product.id), 120)
    }
  }

  const handleConfirmOrder = () => {
    setOrderProduct(null)
  }

  const handleWishlistToggle = (product) => {
    toggleWishlist(product)
    const message = isWishlisted(product.id)
      ? `${product.name} removed from wishlist.`
      : `${product.name} added to wishlist.`
    toast.info(message, { hideProgressBar: true })
  }

  const scrollToProducts = () => {
    const section = document.querySelector('#shop-products')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePageChange = (nextPage) => {
    if (nextPage === 'Products') {
      if (page === 'Home') {
        scrollToProducts()
        return
      }
      setPage('Home')
      setPendingScrollToProducts(true)
      return
    }

    setPage(nextPage)
    if (nextPage === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (pendingScrollToProducts && page === 'Home') {
      scrollToProducts()
      setPendingScrollToProducts(false)
    }
  }, [page, pendingScrollToProducts])

  const pageProps = {
    products: filteredProducts,
    loading,
    searchQuery,
    category,
    sortOption,
    onSearch: setSearchQuery,
    onCategoryChange: setCategory,
    onSortChange: setSortOption,
    onAddToCart: handleAddToCart,
    onWishlistToggle: handleWishlistToggle,
    isWishlisted,
    onOrderNow: handleOrderNow,
    onSelectProduct: handleSelectProduct,
    currentCategory: category,
    resultCount: filteredProducts.length,
    onExplore: scrollToProducts,
    onShop: scrollToProducts,
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-900 dark:text-slate-100" style={{ background: page === 'Home' ? '#FFEAEC' : 'rgb(241 245 250)', }}>
      <Navbar
        activePage={page}
        onNavigate={handlePageChange}
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        theme={theme}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      <main className="mx-auto w-full max-w-[1500px] px-4 pb-20 pt-32 md:px-6">
        {page === 'Home' && <Home {...pageProps} />}
        {page === 'Cart' && <CartPage onNavigate={handlePageChange} onOrderNow={handleOrderNow} />}
        {page === 'Wishlist' && <WishlistPage onNavigate={handlePageChange} />}
      </main>
      <OrderModal
        product={orderProduct}
        isOpen={Boolean(orderProduct)}
        onClose={() => setOrderProduct(null)}
        onConfirmOrder={handleConfirmOrder}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
