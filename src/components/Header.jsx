import { Search, ShoppingCart, User, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="rounded bg-gradient-to-r from-amber-500 to-red-500 px-2 py-1 text-sm font-bold text-white">سوق</span>
          <span className="text-lg font-extrabold tracking-tight">Libya</span>
        </a>

        <div className="hidden flex-1 items-center md:flex">
          <div className="relative w-full max-w-2xl">
            <input
              className="w-full rounded-full border border-neutral-300 bg-white py-2.5 pl-11 pr-12 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              placeholder="Search cars, phones, apartments..."
              aria-label="Search"
            />
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-neutral-800">Search</button>
          </div>
        </div>

        <div className="ml-auto hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-1 text-sm text-neutral-600">
            <MapPin size={18} />
            <span>Libya</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-50">
            <User size={18} />
            <span>Account</span>
          </button>
          <button className="relative inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-50">
            <ShoppingCart size={18} />
            <span>Cart</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">2</span>
          </button>
        </div>
      </div>

      <div className="px-4 pb-3 sm:px-6 lg:px-8 md:hidden">
        <div className="relative">
          <input
            className="w-full rounded-full border border-neutral-300 bg-white py-2.5 pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            placeholder="Search cars, phones, apartments..."
            aria-label="Search"
          />
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
        </div>
      </div>
    </header>
  );
}
