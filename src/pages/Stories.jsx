import { useState } from 'react'
import CTAButton from '../components/CTAButton'
import Icon      from '../components/Icons'
import { stories, storyCategories } from '../data'
import StoryCard from '../components/StoryCard'

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-forest-dark pt-36 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-forest/40 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
        {subtitle && <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

// Empty state shown when no stories exist yet
function EmptyState() {
  return (
    <div className="py-24 lg:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Icon */}
        <div className="w-20 h-20 bg-white rounded-3xl shadow-premium flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-forest/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-dark mb-4">
          No Stories Yet — But They're Coming
        </h2>
        <p className="text-gray-500 leading-relaxed mb-4 text-lg">
          We launched in 2025. Our programmes have not started yet — which means we have no stories to share. Not yet.
        </p>
        <p className="text-gray-400 leading-relaxed mb-10 text-base max-w-xl mx-auto">
          The moment we begin our work, this page will start to fill. Every person we are able to help will be a story worth telling. Your support today is what makes those stories possible.
        </p>

        {/* Encouragement cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12 text-left">
          {[
            {
              icon: 'donate',
              title: 'Donate',
              body:  'Be the first to fund a story worth telling. Every programme we run starts with a donation like yours.',
            },
            {
              icon: 'volunteer',
              title: 'Volunteer',
              body:  'Help us create the moments that will one day become the stories on this page.',
            },
            {
              icon: 'email',
              title: 'Stay Updated',
              body:  'Sign up below to be the first to hear when our work begins and stories start to emerge.',
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-premium text-center">
              <div className="w-10 h-10 bg-forest-50 text-forest rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={icon} className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-forest-dark text-base mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton to="/support-us" variant="primary" size="lg">
            Help Us Begin
          </CTAButton>
          <CTAButton to="/contact" variant="outline" size="lg">
            Get in Touch
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('All')

  const hasStories = stories.length > 0

  const filtered = activeCategory === 'All'
    ? stories
    : stories.filter((s) => s.category === activeCategory)

  const featured = filtered.find((s) => s.featured) ?? filtered[0]
  const rest     = filtered.filter((s) => s.id !== featured?.id)

  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Stories of Change"
        subtitle="The work has not started yet — but this is where we will share it. Every person helped, every milestone reached, every lesson learned."
      />

      {/* Show filter + grid only once stories exist */}
      {hasStories ? (
        <>
          {/* ── CATEGORY FILTER ─────────────────────────────────────── */}
          <div className="bg-white border-b border-gray-100 sticky top-20 z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 overflow-x-auto scrollbar-none">
              {storyCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-forest text-white'
                      : 'text-gray-500 bg-gray-100 hover:bg-forest-50 hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <section className="py-24 lg:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">No stories in this category yet.</p>
                </div>
              ) : (
                <>
                  {featured && (
                    <div className="mb-12">
                      <StoryCard story={featured} featured />
                    </div>
                  )}
                  {rest.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {rest.map((story) => (
                        <StoryCard key={story.id} story={story} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </>
      ) : (
        <EmptyState />
      )}

      {/* ── INVITE PEOPLE TO SHARE UPDATES ───────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">
            Have Something to Share?
          </h3>
          <p className="text-gray-500 text-sm mb-8">
            If you have volunteered with us, supported our launch, or simply want to share why you believe in what we are doing — we would love to hear from you.
          </p>
          <CTAButton to="/contact" variant="outline">Get in Touch</CTAButton>
        </div>
      </section>

      {/* ── SUBSCRIBE STRIP ───────────────────────────────────────────── */}
      <div className="bg-forest py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-1">Be the first to hear our stories</h3>
            <p className="text-white/60 text-sm">Sign up for updates — the first story we tell will go to our subscribers first.</p>
          </div>
          {/* CUSTOMISE: Connect to your email provider */}
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="px-6 py-3 rounded-xl bg-gold text-forest-dark font-semibold text-sm hover:bg-gold-light transition-colors flex-shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
