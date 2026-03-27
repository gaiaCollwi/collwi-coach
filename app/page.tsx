'use client'

import { useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import { ArrowRight, TrendingUp, Users, Settings, Heart, Award, Shield, Target, CheckCircle, ChevronDown, Star, Sparkles, Clock, DollarSign, MessageCircle, Zap, Globe, Mail, Twitter, Linkedin, Instagram } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/* ─── GSAP HOOKS ─── */

function useScrollReveal(ref: React.RefObject<HTMLElement | null>) {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 60, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [ref])
}

function useTextSplitReveal() {
  useIsomorphicLayoutEffect(() => {
    const elements = document.querySelectorAll('.text-split-reveal')
    if (!elements.length) return
    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const text = el.textContent || ''
        const words = text.split(/\s+/)
        el.innerHTML = words
          .map((w) => `<span class="hero-word inline-block" style="opacity:0">${w}</span>`)
          .join(' ')
        gsap.fromTo(
          el.querySelectorAll('.hero-word'),
          { opacity: 0, y: 40, rotateX: -30, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 0.7,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])
}

function useCounterAnimation() {
  useIsomorphicLayoutEffect(() => {
    const elements = document.querySelectorAll('.count-up')
    if (!elements.length) return
    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val)).padStart(2, '0')
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])
}

function useMagneticButton(ref: React.RefObject<HTMLElement | null>) {
  const handleMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(ref.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out',
      })
    },
    [ref]
  )

  const handleLeave = useCallback(() => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }, [ref])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [ref, handleMove, handleLeave])
}

function useParallaxScrub(ref: React.RefObject<HTMLElement | null>, speed: number = 0.3) {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [ref, speed])
}

/* ─── PARTICLES COMPONENT ─── */
function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      const dots = containerRef.current!.querySelectorAll('.particle-dot')
      dots.forEach((dot, i) => {
        gsap.to(dot, {
          keyframes: [
            { x: gsap.utils.random(-40, 40), y: gsap.utils.random(-40, 40), duration: gsap.utils.random(2, 4) },
            { x: gsap.utils.random(-40, 40), y: gsap.utils.random(-40, 40), duration: gsap.utils.random(2, 4) },
            { x: 0, y: 0, duration: gsap.utils.random(2, 4) },
          ],
          repeat: -1,
          ease: 'sine.inOut',
          delay: i * 0.3,
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const particles = [
    { top: '15%', left: '8%', color: 'bg-brand-teal/50', size: 'w-2 h-2' },
    { top: '25%', right: '12%', color: 'bg-brand-purple/40', size: 'w-2.5 h-2.5' },
    { top: '40%', left: '15%', color: 'bg-brand-coral/50', size: 'w-1.5 h-1.5' },
    { top: '55%', right: '20%', color: 'bg-brand-gold/60', size: 'w-2 h-2' },
    { top: '70%', left: '25%', color: 'bg-brand-teal/30', size: 'w-3 h-3' },
    { top: '20%', left: '50%', color: 'bg-brand-purple/30', size: 'w-2 h-2' },
    { top: '80%', right: '15%', color: 'bg-brand-coral/40', size: 'w-1.5 h-1.5' },
    { top: '35%', right: '35%', color: 'bg-brand-gold/40', size: 'w-2 h-2' },
    { top: '60%', left: '5%', color: 'bg-brand-teal/40', size: 'w-2 h-2' },
    { top: '45%', left: '40%', color: 'bg-brand-purple/50', size: 'w-1.5 h-1.5' },
    { top: '85%', left: '60%', color: 'bg-brand-coral/30', size: 'w-2.5 h-2.5' },
    { top: '10%', right: '40%', color: 'bg-brand-gold/50', size: 'w-2 h-2' },
  ]

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`particle-dot absolute rounded-full ${p.color} ${p.size}`}
          style={{ top: p.top, left: p.left, right: p.right }}
        />
      ))}
    </div>
  )
}

/* ─── AURORA STRIPS ─── */
function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      const strips = ref.current!.querySelectorAll('.aurora-strip')
      strips.forEach((strip, i) => {
        gsap.to(strip, {
          x: gsap.utils.random(-100, 100),
          scaleX: gsap.utils.random(0.8, 1.4),
          opacity: gsap.utils.random(0.15, 0.4),
          duration: gsap.utils.random(6, 10),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 1.5,
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="aurora-strip absolute -top-20 -left-20 w-[120%] h-40 bg-gradient-to-r from-brand-teal/20 via-brand-purple/15 to-transparent rounded-full blur-3xl rotate-[-8deg]" />
      <div className="aurora-strip absolute top-[30%] -right-20 w-[110%] h-32 bg-gradient-to-l from-brand-coral/15 via-brand-gold/10 to-transparent rounded-full blur-3xl rotate-[5deg]" />
      <div className="aurora-strip absolute bottom-[20%] -left-10 w-[100%] h-36 bg-gradient-to-r from-brand-purple/15 via-brand-teal/10 to-transparent rounded-full blur-3xl rotate-[-3deg]" />
      <div className="aurora-strip absolute bottom-0 right-0 w-[90%] h-28 bg-gradient-to-l from-brand-teal/10 via-brand-coral/8 to-transparent rounded-full blur-3xl rotate-[7deg]" />
    </div>
  )
}

/* ─── FLOATING DASHBOARD MOCKUP ─── */
function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      // Floating card animations
      gsap.fromTo('.mockup-card-1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 1.5, ease: 'power3.out' })
      gsap.fromTo('.mockup-card-2', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 1.8, ease: 'power3.out' })
      gsap.fromTo('.mockup-badge', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 2.1, ease: 'back.out(1.7)' })

      // Gentle floating
      gsap.to('.mockup-card-1', { y: -8, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.mockup-card-2', { y: 10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })
      gsap.to('.mockup-badge', { y: -5, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      {/* Session card */}
      <div className="mockup-card-1 absolute top-[10%] left-[5%] md:left-[10%] w-[280px] rounded-2xl overflow-hidden opacity-0"
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-teal">Live Session</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-purple flex items-center justify-center">
              <Clock size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-navy">Career Transition Group</p>
              <p className="text-xs text-brand-navy/50">Tuesdays, 6:00 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-brand-navy/10">
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-brand-navy/40" />
              <span className="text-xs text-brand-navy/60">10 attendees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign size={14} className="text-emerald-500" />
              <span className="text-xs font-semibold text-emerald-600">$1,200/session</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review card */}
      <div className="mockup-card-2 absolute bottom-[15%] right-[5%] md:right-[8%] w-[260px] rounded-2xl overflow-hidden opacity-0"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}>
        <div className="p-5">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
            ))}
          </div>
          <p className="text-sm text-brand-navy/70 italic leading-relaxed mb-3">
            &ldquo;This group changed everything for me. Real accountability, real growth.&rdquo;
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-coral to-brand-purple" />
            <span className="text-xs text-brand-navy/50">Sarah M., Group Member</span>
          </div>
        </div>
      </div>

      {/* Stats badge */}
      <div className="mockup-badge absolute top-[55%] right-[35%] md:right-[40%] rounded-full px-5 py-3 opacity-0"
        style={{
          background: 'rgba(78,205,196,0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(78,205,196,0.3)',
          boxShadow: '0 10px 30px -5px rgba(78,205,196,0.2)',
        }}>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-brand-teal" />
          <span className="text-sm font-bold text-brand-teal">4-10 per group</span>
        </div>
      </div>
    </div>
  )
}

/* ─── SPARKLE ELEMENTS ─── */
function FloatingSparkles() {
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      const sparkles = ref.current!.querySelectorAll('.sparkle-el')
      sparkles.forEach((sparkle, i) => {
        gsap.to(sparkle, {
          keyframes: [
            { opacity: 0, scale: 0, duration: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5 },
            { opacity: 0, scale: 0, duration: 0.5 },
          ],
          repeat: -1,
          delay: i * 0.8,
          ease: 'sine.inOut',
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {[
        { top: '15%', left: '10%' },
        { top: '25%', right: '15%' },
        { top: '60%', left: '20%' },
        { top: '40%', right: '25%' },
        { top: '75%', left: '70%' },
        { top: '80%', right: '10%' },
        { top: '50%', left: '5%' },
      ].map((pos, i) => (
        <div key={i} className="sparkle-el absolute opacity-0" style={pos}>
          <Sparkles size={i % 2 === 0 ? 16 : 12} className="text-white/20" />
        </div>
      ))}
    </div>
  )
}

/* ─── MAIN COMPONENT ─── */

export default function CoachesPage() {
  /* Refs */
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const forYouRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const howRef = useRef<HTMLElement>(null)
  const testimonialRef = useRef<HTMLElement>(null)
  const whoRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const coachStepsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)

  const heroCta = useRef<HTMLAnchorElement>(null)
  const ctaCta = useRef<HTMLAnchorElement>(null)

  const heroOrb1 = useRef<HTMLDivElement>(null)
  const heroOrb2 = useRef<HTMLDivElement>(null)
  const heroOrb3 = useRef<HTMLDivElement>(null)

  /* Hooks */
  useMagneticButton(heroCta)
  useMagneticButton(ctaCta)
  useParallaxScrub(heroOrb1, -0.2)
  useParallaxScrub(heroOrb2, 0.15)
  useParallaxScrub(heroOrb3, -0.1)
  useScrollReveal(statsRef)
  useScrollReveal(forYouRef)
  useScrollReveal(whyRef)
  useScrollReveal(howRef)
  useScrollReveal(testimonialRef)
  useScrollReveal(whoRef)
  useScrollReveal(ctaRef)
  useScrollReveal(coachStepsRef)
  useScrollReveal(aboutRef)
  useTextSplitReveal()
  useCounterAnimation()

  /* GSAP hero animation */
  useIsomorphicLayoutEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      // Word-by-word headline
      const words = heroRef.current!.querySelectorAll('.hero-word')
      tl.fromTo(
        words,
        { opacity: 0, y: 80, rotateX: -40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.07,
          ease: 'power3.out',
        }
      )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-subtitle-2',
          { opacity: 0, y: 30, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta-wrap',
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.4)' },
          '-=0.4'
        )
        .fromTo(
          '.scroll-indicator',
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        )

      // Scroll indicator pulse
      gsap.to('.scroll-indicator', {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  /* GSAP staggered card animations */
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Stat counters with scale bounce
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // For-you cards — alternating slide from left/right
      document.querySelectorAll('.for-you-card').forEach((card, i) => {
        const isLeft = i % 2 === 0
        gsap.fromTo(
          card,
          { opacity: 0, x: isLeft ? -80 : 80, filter: 'blur(6px)' },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // For-you center line grow
      gsap.fromTo(
        '.for-you-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.for-you-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Bento cards
      gsap.fromTo(
        '.bento-card',
        { opacity: 0, y: 60, scale: 0.95, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Timeline step cards
      gsap.fromTo(
        '.timeline-step',
        { opacity: 0, x: (i: number) => i % 2 === 0 ? -60 : 60, rotateY: (i: number) => i % 2 === 0 ? -8 : 8 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Step cards (mobile fallback)
      gsap.fromTo(
        '.step-card',
        { opacity: 0, y: 50, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Who cards
      gsap.fromTo(
        '.who-card',
        { opacity: 0, y: 50, rotateY: 5, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.who-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Coach step cards
      gsap.fromTo(
        '.coach-step-card',
        { opacity: 0, y: 50, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.coach-steps-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // About cards
      gsap.fromTo(
        '.about-card',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // CTA section
      gsap.fromTo(
        '.cta-content > *',
        { opacity: 0, y: 40, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-content',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Testimonial
      gsap.fromTo(
        '.testimonial-content',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonial-content',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  /* Animated gradient sweep for bento large card */
  useIsomorphicLayoutEffect(() => {
    const sweepEl = document.querySelector('.gradient-sweep-bg')
    if (!sweepEl) return
    const ctx = gsap.context(() => {
      gsap.to(sweepEl, {
        backgroundPosition: '200% 50%',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
    return () => ctx.revert()
  }, [])

  /* Data arrays (all text content preserved exactly) */
  const forYouItems = [
    "Delivers real transformations, but struggles to maintain a steady stream of clients",
    "Is stuck in 1:1 sessions with no clear way to scale beyond current hours",
    "Spends more time creating content than actually coaching clients",
    "Is tired of the constant hustle just to keep the calendar full",
    "Is already fully booked but wants to reach more people without working more",
    "Is great at what they do, but exhausted from having to prove it every single day"
  ]

  const whyBenefits = [
    {
      icon: TrendingUp,
      color: "bg-brand-coral/10 text-brand-coral",
      title: "We Connect You With Members Seeking Growth",
      desc: "Stop chasing clients. CollWi connects you with members actively seeking growth and community support. No more cold outreach. No more endless free discovery sessions."
    },
    {
      icon: Users,
      color: "bg-brand-teal/10 text-brand-teal",
      title: "Scale Without Burning Out",
      desc: "You're stuck trading time for money in 1:1 sessions. Group coaching lets you serve 4-10 people at once\u2014multiply your income without multiplying your hours."
    },
    {
      icon: Settings,
      color: "bg-brand-purple/10 text-brand-purple",
      title: "We Handle What You Hate",
      desc: "Marketing. Tech. Logistics. Client acquisition. The stuff that keeps you up at night? We've solved it. You focus on coaching. We handle the rest."
    },
    {
      icon: Heart,
      color: "bg-brand-coral/10 text-brand-coral",
      title: "Join a Growing Network",
      desc: "Connect with other coaches on the platform who understand the journey. Build your practice alongside others who are scaling their impact."
    }
  ]

  const howSteps = [
    {
      number: "1",
      title: "Create Your Group Coaching Program",
      desc: "Quickly and easily set up your program on our platform. You decide the price, schedule, and structure."
    },
    {
      number: "2",
      title: "Members Find You",
      desc: "Members browse programs and choose what fits their needs. No more cold outreach. (Some introductory sessions may still be helpful, but no more spending all your time giving away free coaching.)"
    },
    {
      number: "3",
      title: "Lead Small Groups (4-10 People)",
      desc: "Guide live sessions. Build community. Make the impact you've always wanted."
    },
    {
      number: "4",
      title: "Earn Sustainably",
      desc: "Scale your income without scaling your hours. Build the financially viable practice you deserve."
    },
    {
      number: "5",
      title: "Join a Growing Network",
      desc: "Connect with other coaches on the platform who understand the journey."
    }
  ]

  const whoItems = [
    { text: "Certified coaches (ICF, BCC, or equivalent credential)", icon: Award, accent: "from-brand-teal to-brand-teal-dark", glow: "hover:shadow-glow-teal" },
    { text: "Experience with group facilitation (or willingness to learn)", icon: Users, accent: "from-brand-coral to-brand-coral", glow: "hover:shadow-glow-coral" },
    { text: "Commitment to emotional safety and inclusive practices", icon: Shield, accent: "from-brand-purple to-brand-purple-dark", glow: "hover:shadow-glow-purple" },
    { text: "Belief in the power of collective wisdom and peer support", icon: Heart, accent: "from-brand-teal to-brand-purple", glow: "hover:shadow-glow-teal" },
    { text: "Ready to stop chasing clients and start building a real business", icon: Target, accent: "from-brand-coral to-brand-purple", glow: "hover:shadow-glow-coral" },
    { text: "Passionate about helping and empowering women to thrive", icon: Sparkles, accent: "from-brand-purple to-brand-teal", glow: "hover:shadow-glow-purple" },
  ]

  const coachSteps = [
    { num: '01', title: 'Register as a Coach', desc: 'Quick registration for certified coaches ready to offer group programs', accent: 'from-brand-teal to-brand-teal-dark' },
    { num: '02', title: 'Create Your Program', desc: 'Easy, quick process to set up your group coaching program. You set your own pricing and schedule', accent: 'from-brand-coral to-brand-coral' },
    { num: '03', title: 'Members Find You', desc: 'Members browse programs and choose what fits their needs\u2014no marketing required on your end', accent: 'from-brand-purple to-brand-purple-dark' },
    { num: '04', title: 'Lead & Earn', desc: 'Facilitate small groups (4-10 people), scale your impact, build sustainable income', accent: 'from-brand-teal to-brand-purple' },
  ]

  const gradientAccentColors = [
    'from-brand-teal via-brand-teal-dark to-brand-teal',
    'from-brand-coral via-brand-coral to-brand-coral',
    'from-brand-purple via-brand-purple-dark to-brand-purple',
    'from-brand-teal via-brand-purple to-brand-teal',
    'from-brand-coral via-brand-purple to-brand-coral',
    'from-brand-purple via-brand-teal to-brand-purple',
  ]

  const timelineAccentColors = [
    'from-brand-teal to-brand-teal-dark',
    'from-brand-coral to-brand-coral',
    'from-brand-purple to-brand-purple-dark',
    'from-brand-teal to-brand-purple',
    'from-brand-coral to-brand-teal',
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FAF8F5 0%, #F0F9F8 25%, #F0EAFF 50%, #FFF0EB 75%, #F0F9F8 100%)',
        }}
      >
        <AuroraBackground />
        <FloatingParticles />

        {/* Decorative floating orbs with parallax */}
        <div ref={heroOrb1} className="absolute top-20 left-[10%] w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl" />
        <div ref={heroOrb2} className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
        <div ref={heroOrb3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-[15%] right-[25%] w-48 h-48 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[30%] left-[20%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left" style={{ perspective: '800px' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light leading-[1.1] mb-8">
                {`You're an exceptional coach. So why is it so hard to find paying clients?`
                  .split(/\s+/)
                  .map((word, i) => (
                    <span key={i} className="hero-word inline-block mr-[0.3em]" style={{ opacity: 0 }}>
                      {word}
                    </span>
                  ))}
              </h1>

              <p className="hero-subtitle text-xl md:text-2xl text-brand-navy/70 font-light mb-6" style={{ opacity: 0 }}>
                You&apos;ve tried everything&mdash;free discovery sessions, networking, posting on social media. Your website is beautiful. Yet you still struggle to get clients consistently.
              </p>

              <p className="hero-subtitle-2 text-lg md:text-xl text-brand-navy/60 mb-12" style={{ opacity: 0 }}>
                You love coaching. You hate the business side. We&apos;ve solved that for you.
              </p>

              <div className="hero-cta-wrap" style={{ opacity: 0 }}>
                <a
                  ref={heroCta}
                  href="https://collwi.com/register?type=coach"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300"
                >
                  Join as a Coach
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Floating dashboard mockup (desktop) */}
            <div className="hidden lg:block">
              <DashboardMockup />
            </div>
          </div>

          {/* Mobile: Dashboard mockup below */}
          <div className="lg:hidden mt-16">
            <DashboardMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-navy/40">Scroll</span>
          <ChevronDown size={20} className="text-brand-navy/40" />
        </div>
      </section>

      {/* ─── STAT COUNTER SECTION ─── */}
      <section
        ref={statsRef}
        className="relative py-20 md:py-28 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1F36 0%, #2D3250 40%, #1A1F36 100%)',
        }}
      >
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-[20%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="stat-item text-center" style={{ opacity: 0 }}>
              <div className="text-6xl md:text-7xl font-sans font-bold bg-gradient-to-r from-brand-coral to-brand-gold bg-clip-text text-transparent mb-3">
                <span className="count-up" data-target={82}>00</span>
                <span className="text-4xl md:text-5xl">%</span>
              </div>
              <p className="text-white/60 text-lg">Coaches who struggle with client acquisition</p>
            </div>

            {/* Stat 2 */}
            <div className="stat-item text-center" style={{ opacity: 0 }}>
              <div className="text-6xl md:text-7xl font-sans font-bold bg-gradient-to-r from-brand-teal to-brand-teal-dark bg-clip-text text-transparent mb-3">
                4-10
              </div>
              <p className="text-white/60 text-lg">People per group session</p>
            </div>

            {/* Stat 3 */}
            <div className="stat-item text-center" style={{ opacity: 0 }}>
              <div className="text-6xl md:text-7xl font-sans font-bold bg-gradient-to-r from-brand-purple to-brand-purple-dark bg-clip-text text-transparent mb-3">
                <span className="count-up" data-target={0}>0</span>
              </div>
              <p className="text-white/60 text-lg">Marketing required</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THIS IS FOR YOU SECTION ─── */}
      <section ref={forYouRef} className="relative py-28 md:py-40 px-6 overflow-hidden" style={{
        background: 'linear-gradient(160deg, #FFF5F0 0%, #FFF0F5 30%, #F5F0FF 60%, #F0F8F8 100%)',
      }}>
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-coral/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-purple/[0.06] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="for-you-card text-brand-coral text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4" style={{ opacity: 0 }}>
            Sound familiar?
          </p>
          <h2 className="for-you-card text-3xl md:text-5xl lg:text-6xl font-sans font-extralight leading-tight text-center text-brand-navy/80 mb-20" style={{ opacity: 0 }}>
            This is for you if you&apos;re<br className="hidden md:block" /> a certified coach who...
          </h2>

          {/* Staggered alternating cards */}
          <div className="for-you-grid relative">
            {/* Center vertical line */}
            <div className="for-you-line absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-navy/10 to-transparent hidden md:block" />

            {forYouItems.map((item, i) => {
              const isLeft = i % 2 === 0
              const accentColors = ['brand-teal', 'brand-coral', 'brand-purple', 'brand-teal', 'brand-coral', 'brand-purple']
              const accent = accentColors[i]
              return (
                <div
                  key={i}
                  className={`for-you-card flex items-center mb-8 md:mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ opacity: 0 }}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                    <div className={`group relative rounded-2xl border border-brand-navy/[0.06] bg-white/60 backdrop-blur-sm p-8 cursor-default transition-all duration-500 hover:bg-white/80 hover:border-${accent}/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-${accent}/15`}>
                      {/* Number pill */}
                      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-${accent}/15 text-${accent} text-xs font-bold mb-4`}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p className="text-lg md:text-xl text-brand-navy/60 leading-relaxed font-light group-hover:text-brand-navy/80 transition-colors duration-500">
                        {item}
                      </p>
                      {/* Bottom accent bar on hover */}
                      <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-${accent} group-hover:w-full transition-all duration-700 ease-out rounded-b-2xl`} />
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full bg-${accent}/60 ring-4 ring-${accent}/10 transition-all duration-500`} />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>

          <div className="for-you-card mt-20 text-center" style={{ opacity: 0 }}>
            <p className="text-xl md:text-2xl font-light text-brand-navy/50 max-w-3xl mx-auto leading-relaxed">
              <span className="text-brand-purple font-medium">82% of coaches struggle with this</span>&mdash;not because their coaching isn&apos;t good enough, but because client acquisition is a different skill set.
            </p>
            <p className="text-2xl md:text-3xl font-light text-brand-navy/80 mt-4">
              CollWi solves that.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY COLLWI WORKS — BENTO GRID ─── */}
      <section ref={whyRef} className="relative py-28 md:py-36 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #F0F9F8 0%, #F8F9FC 30%, #F0EAFF 60%, #F0F9F8 100%)',
      }}>
        <div className="absolute top-20 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[8%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
            Why CollWi Works When Everything Else Hasn&apos;t
          </h2>

          <p className="text-lg md:text-xl text-brand-navy/60 text-center mb-20 max-w-2xl mx-auto">
            You&apos;ve tried free sessions, networking, social media. You&apos;ve spent money on websites and courses. Nothing worked. Here&apos;s why CollWi is different:
          </p>

          {/* Bento Grid — 2x2 top + full-width tagline */}
          <div className="bento-grid grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Large dark card */}
            <div className="bento-card relative rounded-2xl p-8 md:p-10 overflow-hidden group hover:shadow-soft-xl transition-all duration-500" style={{ opacity: 0 }}>
              <div
                className="gradient-sweep-bg absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #1A1F36 0%, #2D3250 40%, #1A1F36 100%)',
                }}
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-coral/20 flex items-center justify-center mb-5">
                  <TrendingUp size={28} strokeWidth={1.5} className="text-brand-coral" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{whyBenefits[0].title}</h3>
                <p className="text-lg text-white/70 leading-relaxed">{whyBenefits[0].desc}</p>
              </div>
            </div>

            {/* Teal accent card */}
            <div className="bento-card relative bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-2xl p-8 md:p-10 overflow-hidden group hover:shadow-glow-teal transition-all duration-500" style={{ opacity: 0 }}>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <Users size={28} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{whyBenefits[1].title}</h3>
                <p className="text-lg text-white/80 leading-relaxed">{whyBenefits[1].desc}</p>
              </div>
            </div>

            {/* Purple-accented white card */}
            <div className="bento-card relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 hover:border-brand-purple/20 hover:shadow-glow-purple group transition-all duration-500 overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-purple/40" />
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-5">
                <Settings size={28} strokeWidth={1.5} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{whyBenefits[2].title}</h3>
              <p className="text-brand-navy/70 leading-relaxed">{whyBenefits[2].desc}</p>
            </div>

            {/* Coral-accented white card */}
            <div className="bento-card relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 hover:border-brand-coral/20 hover:shadow-glow-coral group transition-all duration-500 overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-coral to-brand-coral/40" />
              <div className="w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center mb-5">
                <Heart size={28} strokeWidth={1.5} className="text-brand-coral" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{whyBenefits[3].title}</h3>
              <p className="text-brand-navy/70 leading-relaxed">{whyBenefits[3].desc}</p>
            </div>

            {/* Full-width tagline card */}
            <div className="bento-card md:col-span-2 relative bg-gradient-to-r from-brand-purple/5 via-white/80 to-brand-teal/5 backdrop-blur-md rounded-2xl p-10 border border-white/60 hover:shadow-soft-lg transition-all duration-500 overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral" />
              <p className="text-xl md:text-2xl lg:text-3xl text-brand-navy/70 text-center italic leading-relaxed font-light">
                &ldquo;You&rsquo;ve tried free sessions, networking, social media. You&rsquo;ve spent money on websites and courses. Nothing worked.&rdquo; &mdash; That chapter is over. CollWi is different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — TIMELINE ─── */}
      <section ref={howRef} className="relative py-28 md:py-36 px-6 overflow-hidden" style={{
        background: 'linear-gradient(150deg, #FFF0EB 0%, #FAF8F5 30%, #FFF8E1 60%, #FFF0EB 100%)',
      }}>
        {/* Parallax orbs */}
        <div className="absolute top-10 right-[15%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] left-[50%] w-48 h-48 bg-brand-coral/5 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
            How It Works
          </h2>

          <p className="text-xl md:text-2xl text-center text-brand-navy/60 mb-20">
            Simple. Sustainable. No Marketing Required.
          </p>

          {/* Desktop Timeline */}
          <div className="timeline-container hidden md:block relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <div className="w-full h-full bg-gradient-to-b from-brand-teal/30 via-brand-purple/30 to-brand-coral/30" />
            </div>

            {howSteps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className={`timeline-step relative flex items-center mb-16 last:mb-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`} style={{ opacity: 0 }}>
                  {/* Card */}
                  <div className={`w-[45%] ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div
                      className="relative rounded-2xl p-7 group hover:-translate-y-1 transition-all duration-400 overflow-hidden"
                      style={{
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
                      }}
                    >
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${timelineAccentColors[i]}`} />
                      <h3 className="text-xl font-semibold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors duration-300">{step.title}</h3>
                      <p className="text-lg text-brand-navy/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot + number */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${timelineAccentColors[i]} flex items-center justify-center shadow-lg ring-4 ring-white/80`}>
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Empty spacer */}
                  <div className="w-[45%]">
                    <span className={`block text-7xl font-sans font-bold bg-gradient-to-r ${timelineAccentColors[i]} bg-clip-text text-transparent opacity-20 ${isLeft ? 'text-left pl-8' : 'text-right pr-8'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile: stacked cards */}
          <div className="steps-grid md:hidden grid gap-6">
            {howSteps.map((step, i) => (
              <div
                key={i}
                className="step-card flex items-start gap-5 bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-400 group overflow-hidden relative"
                style={{ opacity: 0 }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${timelineAccentColors[i]}`} />
                <div className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl bg-gradient-to-br ${timelineAccentColors[i]} text-white shadow-md ring-4 ring-white/80`}>
                  <span className="count-up" data-target={parseInt(step.number)}>{step.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors duration-300">{step.title}</h3>
                  <p className="text-lg text-brand-navy/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL SECTION ─── */}
      <section
        ref={testimonialRef}
        className="relative py-24 md:py-32 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1F36 0%, #3BAFA8 40%, #6347A0 100%)',
        }}
      >
        <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[15%] w-56 h-56 bg-white/5 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="testimonial-content" style={{ opacity: 0 }}>
            {/* Decorative quote marks */}
            <span className="block text-[120px] md:text-[160px] leading-none font-serif text-white/10 -mb-16 md:-mb-20">&ldquo;</span>

            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 italic font-light leading-relaxed mb-8">
              CollWi changed how I think about my coaching practice.
            </p>

            <div className="flex items-center justify-center gap-4 mb-4">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal via-brand-purple to-brand-coral flex items-center justify-center">
                <span className="text-white font-semibold text-lg">CC</span>
              </div>
              <div className="text-left">
                <p className="text-white/80 font-medium">Coach on CollWi</p>
                <p className="text-white/40 text-sm">Certified Group Coach</p>
              </div>
            </div>

            <span className="block text-[120px] md:text-[160px] leading-none font-serif text-white/10 rotate-180 -mt-16 md:-mt-20">&ldquo;</span>
          </div>
        </div>
      </section>

      {/* ─── WHO WE'RE LOOKING FOR ─── */}
      <section ref={whoRef} className="relative py-28 md:py-36 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #F0EAFF 0%, #F8F9FC 30%, #F0F9F8 60%, #F0EAFF 100%)',
      }}>
        {/* Large watermark with shimmer effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[10rem] md:text-[14rem] font-sans font-bold tracking-widest uppercase"
            style={{
              background: 'linear-gradient(90deg, rgba(124,92,191,0.03) 0%, rgba(124,92,191,0.08) 50%, rgba(124,92,191,0.03) 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite',
            }}
          >
            COACHES
          </span>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-10 left-[8%] w-56 h-56 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
            Who We&apos;re Looking For
          </h2>

          <p className="text-xl md:text-2xl text-center text-brand-navy/70 mb-14 max-w-3xl mx-auto">
            <strong>We&apos;re selective.</strong> We only work with qualified, ethical coaches who are committed to transformation&mdash;for their clients AND themselves.
          </p>

          <div className="who-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className={`who-card relative bg-white/50 backdrop-blur-md rounded-xl p-7 ${item.glow} hover:bg-white/80 hover:-translate-y-1 hover:rotate-[0.3deg] transition-all duration-400 h-full group overflow-hidden`}
                  style={{ opacity: 0 }}
                >
                  {/* Gradient top accent bar */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.accent} rounded-t-xl`} />
                  <span className="absolute top-4 right-4 text-5xl font-sans font-light text-brand-navy/[0.04] select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-brand-purple/10">
                    <Icon size={26} className="text-brand-purple" strokeWidth={1.5} />
                  </div>
                  <p className="text-lg text-brand-navy/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION — Full viewport, dramatic ─── */}
      <section
        ref={ctaRef}
        className="relative min-h-[80vh] flex items-center px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1F36 0%, #3BAFA8 45%, #6347A0 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 6s ease-in-out infinite',
        }}
      >
        {/* Floating animated elements */}
        <FloatingSparkles />

        <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing decorative elements */}
        <div className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-white/20 animate-pulse-soft" />
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-white/15 animate-pulse-soft" />
        <div className="absolute top-[60%] left-[60%] w-2.5 h-2.5 rounded-full bg-brand-gold/30 animate-pulse-soft" />

        <div className="cta-content relative z-10 max-w-4xl mx-auto text-center py-24">
          <h2 className="text-split-reveal text-4xl md:text-6xl lg:text-7xl font-sans font-light leading-tight mb-10 text-white">
            Ready to Stop Struggling?
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed max-w-3xl mx-auto">
            Join CollWi and finally build the financially viable coaching practice you deserve. No more free discovery sessions. No more &apos;hopeful&apos; social media posts. No more wondering what you&apos;re doing wrong.
          </p>

          <p className="text-lg md:text-xl text-white/70 mb-14 max-w-3xl mx-auto">
            You&apos;re an exceptional coach. You just needed the other half of the equation. We&apos;ve got it.
          </p>

          <div>
            <a
              ref={ctaCta}
              href="https://collwi.com/register?type=coach"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-brand-teal font-semibold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/95 overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-brand-teal/10 to-transparent" />
              <span className="relative z-10">Register as a Coach With CollWi</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-base md:text-lg text-white/70 mt-8 font-medium">
            Join our growing network of certified coaches offering group programs.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS FOR COACHES — Horizontal connected flow ─── */}
      <section ref={coachStepsRef} className="relative py-28 md:py-36 px-6 overflow-hidden" style={{
        background: 'linear-gradient(160deg, #FFF0EB 0%, #FAF8F5 30%, #FFF8E1 60%, #F0F9F8 100%)',
      }}>
        <div className="absolute top-10 left-[15%] w-56 h-56 bg-brand-coral/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
              Getting Started
            </span>
            <h2 className="text-split-reveal text-4xl md:text-5xl font-sans font-light">
              How CollWi works for coaches
            </h2>
          </div>

          {/* Desktop: horizontal 4-column layout with connecting arrows */}
          <div className="coach-steps-grid hidden md:grid md:grid-cols-4 gap-4 relative">
            {/* Connecting line behind cards */}
            <div className="absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-teal/20 via-brand-purple/20 to-brand-teal/20" />

            {coachSteps.map((step, i) => (
              <div
                key={i}
                className="coach-step-card relative bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-400 h-full group overflow-hidden"
                style={{ opacity: 0 }}
              >
                {/* Alternating accent top bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.accent} rounded-t-2xl`} />

                {/* Large gradient step number */}
                <div className={`text-6xl font-sans font-bold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent mb-4 block`}>
                  <span className="count-up" data-target={parseInt(step.num)}>{step.num}</span>
                </div>

                <h3 className="text-lg font-bold mb-3 text-brand-navy group-hover:text-brand-teal transition-colors duration-300">{step.title}</h3>
                <p className="text-brand-navy/60 leading-relaxed text-sm">{step.desc}</p>

                {/* Arrow connector (not on last card) */}
                {i < coachSteps.length - 1 && (
                  <div className="absolute -right-4 top-[60px] z-20">
                    <ArrowRight size={20} className="text-brand-navy/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden grid gap-6">
            {coachSteps.map((step, i) => (
              <div
                key={i}
                className={`coach-step-card bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-400 h-full group overflow-hidden relative`}
                style={{ opacity: 0 }}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.accent} rounded-t-2xl`} />
                <span className={`text-5xl font-sans font-bold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent mb-4 block`}>
                  <span className="count-up" data-target={parseInt(step.num)}>{step.num}</span>
                </span>
                <h3 className="text-xl font-bold mb-3 text-brand-navy group-hover:text-brand-teal transition-colors duration-300">{step.title}</h3>
                <p className="text-brand-navy/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-semibold text-brand-navy/60 mt-16">
            No more cold outreach. No more unpaid discovery sessions. Just coaching.
          </p>
        </div>
      </section>

      {/* ─── ABOUT COLLWI — Magazine-style asymmetric ─── */}
      <section ref={aboutRef} className="relative py-28 md:py-36 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #F0EAFF 0%, #F0F9F8 25%, #FFF0EB 50%, #F0EAFF 75%, #F0F9F8 100%)',
      }}>
        {/* Extra floating orbs */}
        <div className="absolute top-10 left-[8%] w-56 h-56 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[5%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[60%] left-[40%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[20%] right-[20%] w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
        <div className="absolute bottom-[25%] left-[15%] w-3 h-3 rounded-full bg-brand-purple/25 animate-pulse-soft" />
        <div className="absolute top-[50%] right-[12%] w-2 h-2 rounded-full bg-brand-coral/30 animate-pulse-soft" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
              About Us
            </span>
            <h2 className="text-split-reveal text-4xl md:text-5xl font-sans font-light leading-tight">
              What CollWi is
            </h2>
          </div>

          {/* Equal two-column grid */}
          <div className="about-grid grid md:grid-cols-2 gap-6 mb-14">
            {/* CollWiers card */}
            <div className="about-card relative rounded-2xl p-10 overflow-hidden group hover:shadow-soft-xl transition-all duration-500 h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(78,205,196,0.08) 0%, rgba(124,92,191,0.08) 50%, rgba(244,132,95,0.06) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.4)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 2px rgba(78,205,196,0.15)' }} />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={30} className="text-brand-teal" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-brand-navy">For CollWiers (Participants)</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  We turn personal growth from a lonely journey into a shared, guided experience.
                  Small groups. Professional coaches. Real transformation.
                </p>
              </div>
            </div>

            {/* Coaches card */}
            <div className="about-card relative rounded-2xl p-10 overflow-hidden group hover:shadow-soft-xl transition-all duration-500 h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(124,92,191,0.1) 0%, rgba(99,71,160,0.08) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(124,92,191,0.15)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 2px rgba(124,92,191,0.15)' }} />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-purple/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={30} className="text-brand-purple" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-brand-navy">For Coaches (You!)</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  We solve the client acquisition problem that causes 82% of coaches to fail.
                  Certified coaches get matched with people actively seeking transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission pull-quote — standalone featured */}
          <div className="about-card relative rounded-2xl overflow-hidden" style={{ opacity: 0 }}>
            <div
              className="p-12 md:p-16 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(78,205,196,0.06) 0%, rgba(255,255,255,0.8) 30%, rgba(124,92,191,0.06) 60%, rgba(255,255,255,0.8) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.4)',
                boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral" />
              <span className="text-8xl md:text-9xl font-serif text-brand-teal/15 leading-none block mb-4">&ldquo;</span>
              <p className="text-xl md:text-2xl text-brand-navy/60 leading-relaxed max-w-3xl mx-auto mb-6">
                CollWi is a platform, yes, but more than that, it&apos;s a <span className="text-brand-navy font-medium">movement</span>.
                A community where coaches can thrive and people can transform&mdash;together.
              </p>
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
                Our mission: Make growth social, accessible, and transformative&mdash;for everyone.
              </p>
              <span className="text-8xl md:text-9xl font-serif text-brand-teal/15 leading-none block mt-4 rotate-180">&ldquo;</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER — Expanded with links and gradient mesh ─── */}
      <footer className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1A1F36 0%, #2D3250 30%, #1A1F36 60%, #2D3250 100%)',
      }}>
        {/* Gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-coral/3 rounded-full blur-3xl" />
          <div className="absolute top-0 right-[40%] w-48 h-48 bg-brand-gold/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Top section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">CollWi</h3>
              <p className="text-white/50 leading-relaxed">
                Where coaches thrive and people transform&mdash;together.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <a href="https://collwi.com/register?type=coach" className="text-white/60 hover:text-brand-teal transition-colors duration-300">Join as a Coach</a>
                <a href="https://collwi.com" className="text-white/60 hover:text-brand-teal transition-colors duration-300">Explore Programs</a>
                <a href="https://collwi.com/about" className="text-white/60 hover:text-brand-teal transition-colors duration-300">About CollWi</a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <Twitter size={18} className="text-white/60" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <Linkedin size={18} className="text-white/60" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <Instagram size={18} className="text-white/60" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <Mail size={18} className="text-white/60" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">&copy; 2026 CollWi. All rights reserved.</p>
            <p className="text-white/20 text-xs italic">Make growth social, accessible, and transformative.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
