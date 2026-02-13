import Image from 'next/image'

export default function Logo({ className = '', size = 'default' }: {
  className?: string
  size?: 'small' | 'default' | 'large'
}) {
  const sizes = {
    small: { width: 80, height: 32 },
    default: { width: 100, height: 40 },
    large: { width: 120, height: 48 },
  }
  const s = sizes[size] || sizes.default

  return (
    <a href="/" className={`block ${className}`}>
      <Image
        src="/collwi-logo.png"
        alt="CollWi Logo"
        width={s.width}
        height={s.height}
        priority
      />
    </a>
  )
}
