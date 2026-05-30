import Icon from './Icons'

// Icon name → background colour mapping (CUSTOMISE to match brand)
const iconBg = {
  education: 'bg-blue-50 text-blue-700',
  health:    'bg-rose-50  text-rose-700',
  shelter:   'bg-amber-50 text-amber-700',
  community: 'bg-forest-50 text-forest',
}

export default function ImpactCard({ icon, title, description }) {
  const colour = iconBg[icon] ?? 'bg-forest-50 text-forest'

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Icon badge */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${colour}`}>
        <Icon name={icon} className="w-7 h-7" />
      </div>

      <h3 className="font-serif text-xl font-semibold text-forest-dark mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>

      {/* Hover accent line */}
      <div className="mt-6 h-0.5 w-0 group-hover:w-12 bg-gold transition-all duration-300" />
    </div>
  )
}
