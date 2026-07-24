import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  platform: [
    { label: 'Coach Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Members', href: 'https://collwi.com' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  connect: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/collwi-collective-wisdom/',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/collwi_collective_wisdom/',
      icon: Instagram,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61565171915248',
      icon: Facebook,
    },
    {
      label: 'Email',
      href: 'mailto:care@collwi.com',
      icon: Mail,
    },
  ],
}

export function MarketingFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-gradient-to-br from-[#F9F7F4] via-white to-[#F1FBF9]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-[8%] h-48 w-48 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-coral/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="mb-4 text-2xl font-semibold text-brand-teal">CollWi for Coaches</p>
            <p className="max-w-sm text-base leading-relaxed text-brand-navy/60">
              A warm, premium home for coaches ready to grow thriving group experiences without carrying the admin alone.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/35">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-navy/60 transition-colors duration-200 hover:text-brand-teal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/35">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-navy/60 transition-colors duration-200 hover:text-brand-teal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/35">Connect</h4>
            <div className="flex gap-3">
              {footerLinks.connect.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-brand-navy/55 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/30 hover:text-brand-teal"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-navy/8 pt-8 text-sm text-brand-navy/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CollWi. All rights reserved.</p>
          <p>Make growth social, accessible, and transformative.</p>
        </div>
      </div>
    </footer>
  )
}
