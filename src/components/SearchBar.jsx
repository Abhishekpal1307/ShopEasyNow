import { FiSearch } from 'react-icons/fi'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-az', label: 'Name A-Z' },
]

export default function SearchBar({ searchQuery, onSearch, sortOption, onSortChange }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1.8fr_1fr] rounded-[32px] bg-[#037171]/10 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] ring-1 ring-[#037171]/20">
      <div className="relative">
        <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#E6FBF5]" />
        <input
          value={searchQuery}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search for products, categories or brands"
          className="w-full rounded-[28px] border border-[#037171]/60 bg-[#037171]/95 py-4 pl-12 pr-4 text-slate-100 placeholder:text-[#DDF3EE] shadow-sm outline-none transition focus:border-[#DDF3EE] focus:ring-4 focus:ring-[#037171]/30"
        />
      </div>

      <div className="flex items-center justify-between gap-3 rounded-[28px] border border-[#037171]/60 bg-[#037171]/95 px-5 py-4">
        <label className="text-sm font-semibold text-[#E6FBF5]" htmlFor="sort">
          Sort by
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(event) => onSortChange(event.target.value)}
          className="w-full rounded-full border border-[#037171]/60 bg-[#037171]/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-[#DDF3EE] focus:ring-4 focus:ring-[#037171]/30"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#037171] text-slate-100">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
