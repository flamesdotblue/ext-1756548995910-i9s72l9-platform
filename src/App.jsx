import { useState } from 'react';
import Header from './components/Header';
import HeroSpline from './components/HeroSpline';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <HeroSpline onBrowse={() => {
          const el = document.getElementById('listings');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />
          <ProductGrid id="listings" selectedCategory={selectedCategory} />
        </section>
      </main>
    </div>
  );
}
