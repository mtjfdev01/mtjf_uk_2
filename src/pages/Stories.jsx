import { useState } from 'react'
import CTAButton from '../components/CTAButton'
import StoryCard from '../components/StoryCard'
import { stories, storyCategories } from '../data'

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
        subtitle="The people and moments behind our work."
      />

      {hasStories ? (
        <>
          {/* Category filter */}
          <div className="bg-white border-b border-gray-100 sticky top-20 z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 overflow-x-auto">
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
                <p className="text-center text-gray-400 py-20">No stories in this category yet.</p>
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
        /* Empty state - no stories yet */
        <section className="py-32 bg-cream">
          <div className="max-w-xl mx-auto px-6 text-center">
            <p className="text-gray-400 text-lg mb-6">Stories coming soon.</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              We do not have any stories to share yet. Check back as our work develops.
            </p>
            <CTAButton to="/support-us" variant="primary">Support Our Work</CTAButton>
          </div>
        </section>
      )}

      {/* Subscribe strip */}
      <div className="bg-forest py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-1">Stay updated</h3>
            <p className="text-white/60 text-sm">Sign up for updates as our work develops.</p>
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
