import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/30 transition hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  )
}
