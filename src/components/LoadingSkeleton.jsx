export default function LoadingSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="glass-card animate-pulse">
          <div className="h-64 w-full rounded-[28px] bg-slate-200 dark:bg-slate-800" />
          <div className="mt-6 flex h-6 w-2/5 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-5 w-3/5 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-3 h-4 w-full rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="h-11 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-11 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-11 rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      ))}
    </div>
  )
}
