import { createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export function useWishlist() {
  return useContext(WishlistContext)
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([])

  const toggleWishlist = (product) => {
    setWishlistItems((items) => {
      const exists = items.some((item) => item.id === product.id)
      if (exists) {
        return items.filter((item) => item.id !== product.id)
      }
      return [...items, { ...product }]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems((items) => items.filter((item) => item.id !== productId))
  }

  const isWishlisted = (productId) => wishlistItems.some((item) => item.id === productId)

  const value = {
    wishlistItems,
    toggleWishlist,
    removeFromWishlist,
    isWishlisted,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}
