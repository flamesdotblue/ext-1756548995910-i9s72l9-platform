import { Car, Home, Smartphone, Shirt, Wrench, TentTree, Ship, PawPrint, Briefcase, Tv } from 'lucide-react';

const categories = [
  { key: 'All', label: 'All', icon: Tv },
  { key: 'Cars', label: 'Cars', icon: Car },
  { key: 'Real Estate', label: 'Real Estate', icon: Home },
  { key: 'Electronics', label: 'Electronics', icon: Smartphone },
  { key: 'Fashion', label: 'Fashion', icon: Shirt },
  { key: 'Spare Parts', label: 'Spare Parts', icon: Wrench },
  { key: 'Desert Gear', label: 'Desert Gear', icon: TentTree },
  { key: 'Boats', label: 'Boats', icon: Ship },
  { key: 'Animals', label: 'Animals', icon: PawPrint },
  { key: 'Jobs', label: 'Jobs', icon: Briefcase },
];

export default function CategoryBar({ selected, onSelect }) {
  return (
    <div className="-mt-10 mb-6">
      <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 pt-4 sm:mx-0 sm:px-0">
        {categories.map(({ key, label, icon: Icon }) => {
          const active = selected === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`${active ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-800'} inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 px-4 py-2 text-sm shadow-sm transition hover:shadow`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
