import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...items, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId))
  }

  const increaseQuantity = (productId) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (productId) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
