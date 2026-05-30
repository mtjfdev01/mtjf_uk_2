export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align  = 'center',
  dark   = false,
  className = '',
}) {
  const alignClass  = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textColor   = dark ? 'text-white' : 'text-forest-dark'
  const eyebrowClr  = dark ? 'text-gold'  : 'text-forest-light'
  const subtitleClr = dark ? 'text-white/70' : 'text-gray-500'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${eyebrowClr}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl font-bold leading-tight mb-5 ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${subtitleClr}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
