'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'For Members', href: 'https://collwi.com' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo size={scrolled ? 'small' : 'default'} />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-brand-navy/70 hover:text-brand-navy transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://collwi.com/login"
              className="text-sm font-medium text-brand-navy/70 hover:text-brand-navy transition-colors"
            >
              Log in
            </a>
            <a
              href="https://collwi.com/register"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-full hover:bg-brand-teal-dark shadow-teal hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply to Coach
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3.5 text-lg font-medium text-brand-navy/80 hover:text-brand-teal hover:bg-brand-teal-light rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pb-12 space-y-4">
              <a
                href="https://collwi.com/login"
                className="block text-center px-6 py-3 text-brand-navy/70 font-medium rounded-full border border-gray-200 hover:border-brand-teal transition-colors"
              >
                Log in
              </a>
              <a
                href="https://collwi.com/register"
                className="block text-center px-6 py-3.5 bg-brand-teal text-white font-semibold rounded-full shadow-teal hover:bg-brand-teal-dark transition-all"
              >
                Apply to Coach
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
