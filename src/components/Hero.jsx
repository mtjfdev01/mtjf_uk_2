import { Link } from 'react-router-dom'
import DonationCard from './DonationCard'
import { orgInfo } from '../data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background ── */}
      {/*
        CUSTOMISE: Replace this gradient with a real hero image:
        1. Add your image to /public/hero.jpg
        2. Replace the two gradient divs below with:
           <img src="/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute inset-0 bg-forest-dark/65" />
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light" />
      <div className="absolute inset-0 bg-dot-pattern opacity-100" />

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-forest-lighter/20 blur-3xl" />

      {/* ── Content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="lg:col-span-3 text-white">

            {/* Launch badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              {/* Honest about being new */}
              <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                Newly Launched · UK Based · {orgInfo.shortName}
              </span>
            </div>

            {/* Headline */}
            {/* CUSTOMISE: Replace with your own headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-shadow-lg mb-6">
              Where Mercy<br />
              Meets{' '}
              <span className="italic text-gold/90">Justice</span>
            </h1>

            {/* Subheading — honest, day-one messaging */}
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg mb-4">
              We have just launched. Today marks our first step towards a future where compassion and justice go hand in hand.
            </p>
            <p className="text-white/55 text-base leading-relaxed max-w-lg mb-10">
              Mercy to Justice Foundation is a new UK-based NGO. We are building from scratch — and we need people like you to help us begin.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/60 text-white hover:bg-white/10 hover:border-white transition-all duration-200 text-sm"
              >
                Who We Are
              </Link>
              <Link
                to="/support-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gold text-forest-dark hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
              >
                Be a Founding Donor
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Honest day-one message instead of fake social proof */}
            <div className="mt-14 flex items-start gap-4 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4 max-w-md">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Day One</p>
                <p className="text-white/50 text-xs leading-relaxed mt-0.5">
                  Every great organisation started with zero supporters. We are looking for our very first. Will you be one of them?
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Donation card ── */}
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
