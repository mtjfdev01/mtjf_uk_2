import { Link } from 'react-router-dom'

// CUSTOMISE: Category badge colour mapping
const categoryColour = {
  Education: 'bg-blue-100  text-blue-700',
  Health:    'bg-rose-100  text-rose-700',
  Community: 'bg-green-100 text-green-700',
  Shelter:   'bg-amber-100 text-amber-700',
}

export default function StoryCard({ story, featured = false }) {
  const { category, title, excerpt, readTime, image } = story
  const badgeCls = categoryColour[category] ?? 'bg-gray-100 text-gray-600'

  // Featured layout — wide card with image on the left
  if (featured) {
    return (
      <div className="group grid md:grid-cols-2 bg-white rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="relative min-h-64 md:min-h-full overflow-hidden bg-forest-50">
          {image ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            // CUSTOMISE: Replace this placeholder with a real image
            <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-light flex items-center justify-center">
              <span className="text-white/30 text-8xl font-serif">"</span>
            </div>
          )}
          <div className="absolute inset-0 bg-forest-dark/20" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-10 lg:p-14">
          <span className={`inline-block self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${badgeCls}`}>
            {category}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-dark leading-tight mb-4">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-8">{excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{readTime}</span>
            <Link
              to="/stories"
              className="text-sm font-semibold text-forest hover:text-forest-light transition-colors flex items-center gap-1"
            >
              Read story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Standard card layout — vertical
  return (
    <div className="group bg-white rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-forest-50">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-light" />
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${badgeCls}`}>
          {category}
        </span>
        <h3 className="font-serif text-xl font-bold text-forest-dark leading-tight mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">{readTime}</span>
          <Link
            to="/stories"
            className="text-sm font-semibold text-forest hover:text-forest-light transition-colors flex items-center gap-1"
          >
            Read
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
