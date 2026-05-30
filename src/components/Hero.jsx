import { Link } from 'react-router-dom'
import DonationCard from './DonationCard'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background ──
        CUSTOMISE: Replace this gradient with a real hero image:
        <img src="/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-dark/65" />
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light" />
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="lg:col-span-3 text-white">

            {/* CUSTOMISE: Replace with your own headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-shadow-lg mb-6">
              Where Mercy<br />
              Meets <span className="italic text-gold/90">Justice</span>
            </h1>

            {/* CUSTOMISE: Replace with your mission statement */}
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              A UK-based foundation working to bring compassion and justice to those who need it most.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/60 text-white hover:bg-white/10 hover:border-white transition-all duration-200 text-sm"
              >
                About Us
              </Link>
              <Link
                to="/support-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gold text-forest-dark hover:bg-gold-light transition-all duration-200 shadow-lg text-sm"
              >
                Support Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Donation card */}
          <div className="lg:col-span-2">
            <DonationCard compact />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
