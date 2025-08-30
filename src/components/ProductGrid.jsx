const products = [
  {
    id: 1,
    title: 'Toyota Land Cruiser 2008',
    price: 145000,
    currency: 'LYD',
    location: 'Tripoli',
    category: 'Cars',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'iPhone 13 Pro 256GB',
    price: 4200,
    currency: 'LYD',
    location: 'Benghazi',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1603899122569-c43ff0b9c92e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '2BR Apartment - Ben Ashour',
    price: 95000,
    currency: 'LYD',
    location: 'Tripoli',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d83?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Camping Tent Sahara 4P',
    price: 650,
    currency: 'LYD',
    location: 'Sabha',
    category: 'Desert Gear',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Outboard Boat 15ft',
    price: 18000,
    currency: 'LYD',
    location: 'Tobruk',
    category: 'Boats',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Goat (Local breed)',
    price: 350,
    currency: 'LYD',
    location: 'Misrata',
    category: 'Animals',
    image: 'https://images.unsplash.com/photo-1510333337682-f31d07f545dc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'BMW X5 Spare Parts Lot',
    price: 2200,
    currency: 'LYD',
    location: 'Tripoli',
    category: 'Spare Parts',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Men\'s Traditional Jalabiya',
    price: 120,
    currency: 'LYD',
    location: 'Zuwara',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Sales Representative - Full Time',
    price: 0,
    currency: 'LYD',
    location: 'Benghazi',
    category: 'Jobs',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Samsung 55\" 4K Smart TV',
    price: 2400,
    currency: 'LYD',
    location: 'Tripoli',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1580717736688-2f07a1fbf5a1?q=80&w=1200&auto=format&fit=crop',
  },
];

function formatPrice(price, currency) {
  if (!price || price === 0) return 'Contact for price';
  return new Intl.NumberFormat('en-LY', { style: 'currency', currency }).format(price);
}

function ProductCard({ item }) {
  return (
    <a href="#" className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-neutral-700">{item.location}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-neutral-900">{item.title}</h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[15px] font-bold text-emerald-700">{formatPrice(item.price, item.currency)}</span>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">{item.category}</span>
        </div>
      </div>
    </a>
  );
}

export default function ProductGrid({ selectedCategory, id }) {
  const filtered = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <section id={id} className="pb-16">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold">Featured listings</h2>
          <p className="text-sm text-neutral-600">Great deals from sellers across Libya</p>
        </div>
        <a href="#" className="text-sm font-medium text-amber-700 hover:text-amber-800">See all</a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-neutral-600">No items in this category yet.</div>
      )}
    </section>
  );
}
