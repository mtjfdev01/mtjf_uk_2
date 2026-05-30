export default function StatCard({ number, label, description, dark = true }) {
  return (
    <div className={`text-center px-6 py-8 group ${dark ? '' : 'bg-white rounded-2xl shadow-premium'}`}>
      <div className={`font-serif text-5xl md:text-6xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105 ${
        dark ? 'text-gold' : 'text-forest'
      }`}>
        {number}
      </div>
      <div className={`text-lg font-semibold mb-1 ${dark ? 'text-white' : 'text-forest-dark'}`}>
        {label}
      </div>
      {description && (
        <div className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-gray-400'}`}>
          {description}
        </div>
      )}
    </div>
  )
}
