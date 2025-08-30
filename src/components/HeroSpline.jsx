import Spline from '@splinetool/react-spline';

export default function HeroSpline({ onBrowse }) {
  return (
    <section className="relative h-[72vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white drop-shadow">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Buy and sell across Libya</h1>
          <p className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base">
            From desert-ready 4x4s to everyday essentials. Explore trusted listings from Tripoli to Benghazi and beyond.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={onBrowse} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow hover:bg-neutral-100">
              Browse listings
            </button>
            <a
              href="#"
              className="rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Sell an item
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
