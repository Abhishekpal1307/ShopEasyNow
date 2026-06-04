import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiArrowRight, FiTruck, FiRotateCcw, FiLock } from 'react-icons/fi'
import { GiClothes } from 'react-icons/gi'
import { MdDevices } from 'react-icons/md'
import { BsBook } from 'react-icons/bs'
import './Hero.css'

// Announcement Bar Component
function AnnouncementBar() {
  const announcements = [
    { icon: FiTruck, text: 'Free Shipping on all orders above ₹999' },
    { icon: FiRotateCcw, text: 'Easy Returns' },
    { icon: FiLock, text: 'Secure Payments' },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = announcements[current].icon

  return (
    <motion.div
      className="announcement-bar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="announcement-content">
        <CurrentIcon className="announcement-icon" />
        <motion.span
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {announcements[current].text}
        </motion.span>
      </div>
    </motion.div>
  )
}

// Category Card Component
function CategoryCard({ icon: Icon, title, description, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="category-card cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="category-card-inner"
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="category-icon-wrapper">
          <Icon className="category-icon" />
        </div>
        <h3 className="category-title">{title}</h3>
        <p className="category-description">{description}</p>
        <motion.div
          className="category-link"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Shop {title} <FiArrowRight className="inline-block ml-2" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Ripple Effect Button
function RippleButton({ children, onClick, variant = 'primary' }) {
  const [ripples, setRipples] = useState([])

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const ripple = { x, y, id: Date.now() }

    setRipples([ripple])
    onClick && onClick(e)

    setTimeout(() => setRipples([]), 600)
  }

  return (
    <motion.button
      type="button"
      className={`ripple-button ripple-button-${variant}`}
      onClick={addRipple}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="ripple"
          initial={{
            width: 0,
            height: 0,
            opacity: 0.6,
            top: ripple.y,
            left: ripple.x,
          }}
          animate={{
            width: 300,
            height: 300,
            opacity: 0,
            top: ripple.y - 150,
            left: ripple.x - 150,
          }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </motion.button>
  )
}

export default function Hero({ onExplore, onShop, onSelectProduct, onSelectCategory }) {
  const categories = [
    {
      icon: GiClothes,
      title: 'Clothing',
      description: 'Trendy styles for every occasion',
    },
    {
      icon: MdDevices,
      title: 'Electronics',
      description: 'Smart technology for modern living',
    },
    {
      icon: BsBook,
      title: 'Books',
      description: 'Knowledge, stories and inspiration',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const heroBackgroundStyle = {
    backgroundImage: "linear-gradient(180deg, rgba(72, 130, 134, 0.92) 0%, rgba(72, 130, 134, 0.8) 30%, rgba(15, 23, 42, 0.8) 100%), url('https://chatgpt.com/backend-api/estuary/content?id=file_000000004c1c720b9806c789fc2136e8&ts=494600&p=fsns&cid=1&sig=59d8244349e2fbfc9c66668995bdb8418c3ea20b3c8b01837a576c7d06ef3c58&v=0')",
  }

  return (
    <div className="hero-wrapper">
      <AnnouncementBar />

      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Image with Overlay */}
        <div className="hero-background" style={heroBackgroundStyle}>
          <motion.div
            className="hero-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div className="hero-left" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="badge-text">✨ NEW ARRIVALS</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Style. Tech. Stories.
              <br />
              All in{' '}
              <span className="accent-text">One Place.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="hero-subheading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover premium clothing, cutting-edge electronics, and inspiring books carefully curated for
              modern lifestyles.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <RippleButton variant="primary" onClick={onShop}>
                Shop Now
                <FiArrowRight className="button-icon" />
              </RippleButton>
              <RippleButton variant="secondary" onClick={onExplore}>
                Explore Categories
              </RippleButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="trust-indicators"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="trust-item">
                <FiTruck className="trust-icon" />
                <span>Fast Delivery</span>
              </div>
              <div className="trust-item">
                <FiRotateCcw className="trust-icon" />
                <span>Easy Returns</span>
              </div>
              <div className="trust-item">
                <FiLock className="trust-icon" />
                <span>Secure Checkout</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Floating Elements */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="floating-elements">
              <motion.div
                className="floating-badge floating-badge-1"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span>₹999+</span>
                <p>Free Shipping</p>
              </motion.div>
              <motion.div
                className="floating-badge floating-badge-2"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span>100%</span>
                <p>Authentic</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </section>

      {/* Category Cards Section */}
      <section className="category-section">
        <motion.div
          className="categories-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              index={index}
              onClick={() => onSelectCategory?.(category.title)}
            />
          ))}
        </motion.div>
      </section>
    </div>
  )
}
