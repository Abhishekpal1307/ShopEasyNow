import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const heroes = {
  hotPicks: [
    { title: 'Aurora Smart Watch', price: '₹899' },
    { title: 'Urban Voyager Jacket', price: '₹1300' },
  ],
  trending: [
    { title: 'Solaris Backpack', price: '₹799' },
    { title: 'Digital Design Guide', price: '₹699' },
  ],
}

export default function Hero({ onExplore, onShop, onSelectProduct }) {
  return (
    <section className="relative overflow-hidden rounded-[48px] px-6 py-12 text-slate-950 shadow-soft sm:px-10 md:px-14 lg:px-16 xl:px-20" style={{ background: 'linear-gradient(135deg, #3D5467 0%, #5F6E86 55%, #DCE7F0 100%)' }}
    >
      <div className="pointer-events-none absolute -left-10 top-4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-300/20 blur-3xl" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 inline-flex rounded-full bg-white/15 px-5 py-3 text-xs uppercase tracking-[0.32em] text-white/90 shadow-lg shadow-slate-950/10">
            Premium E-commerce Experience
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Discover Amazing Products
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-100/85 sm:text-lg">
            Shop the latest electronics, fashion, and books in one premium storefront with smooth animations,
            bold visuals, and easy browsing.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-200/80">created by Abhishek</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center justify-center rounded-full bg-[#E3DFFF] px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-[#E3DFFF]/30 transition duration-300 hover:-translate-y-0.5"
            >
              Explore Products
              <FiArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onShop}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/95 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Shop Now
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[36px] p-5 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-white/80 to-slate-100/60 border border-white/20">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-[#F8F4FF] p-5 shadow-lg shadow-slate-950/5">
              <p className="text-xs uppercase tracking-[0.24em] text-violet-700">Hot picks</p>
              <div className="mt-4 grid gap-3">
                {heroes.hotPicks.map((item) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    whileHover={{ y: -4 }}
                    onClick={() => onSelectProduct(item.title)}
                    className="grid w-full gap-2 rounded-[28px] bg-white p-4 text-left text-slate-900 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#3D5467]/40"
                  >
                    <p className="text-sm font-semibold break-words">{item.title}</p>
                    <span className="text-xl font-semibold">{item.price}</span>
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-[#DFF8FF] p-5 shadow-lg shadow-slate-950/5 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Trending
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {heroes.trending.map((item) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    whileHover={{ y: -4 }}
                    onClick={() => onSelectProduct(item.title)}
                    className="grid w-full gap-2 rounded-[28px] bg-white p-4 text-left text-slate-900 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#3D5467]/40 min-w-0"
                  >
                    <p className="text-sm font-semibold break-words">{item.title}</p>
                    <span className="text-lg font-semibold">{item.price}</span>
                  </motion.button>
                ))}
              </div>
              <div className="mt-4 rounded-[28px] bg-slate-950/5 p-4 text-sm text-slate-700">
                Curated collections for modern lifestyle and premium taste.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
