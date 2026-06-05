import { Link } from 'react-router-dom'

// CUSTOMISE: Adjust variant styles to match your brand
const variants = {
  primary:   'bg-forest text-white hover:bg-forest-light shadow-green hover:shadow-lg',
  secondary: 'bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:border-white',
  outline:   'bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-white',
  gold:      'bg-gold text-forest-dark hover:bg-gold-light font-semibold shadow-premium hover:shadow-lg',
  ghost:     'bg-transparent text-forest hover:bg-forest-50 underline-offset-4',
  white:     'bg-white text-forest hover:bg-cream shadow-premium hover:shadow-lg',
}

const sizes = {
  sm:  'px-5 py-2.5 text-sm',
  md:  'px-7 py-3.5 text-base',
  lg:  'px-9 py-4 text-lg',
  xl:  'px-12 py-5 text-xl',
}

export default function CTAButton({
  variant  = 'primary',
  size     = 'md',
  href,
  to,
  onClick,
  children,
  className = '',
  type      = 'button',
  disabled  = false,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium ' +
    'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed'

  const cls = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`

  // Internal React Router link
if (to) {
  return (
    <Link to={to} onClick={onClick} className={cls}>
      {children}
    </Link>
  )
}

  // External anchor tag
  if (href) {
    return (
      <a href={href} className={cls} rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  // Button element
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
