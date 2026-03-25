'use client'

import { useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import { ArrowRight, TrendingUp, Users, Settings, Heart, Award, Shield, Target, CheckCircle, ChevronDown } from 'lucide-react'
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

/* ─── MAIN COMPONENT ─── */

export default function CoachesPage() {
  /* Refs */
  const heroRef = useRef<HTMLElement>(null)
  const forYouRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const howRef = useRef<HTMLElement>(null)
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
  useScrollReveal(forYouRef)
  useScrollReveal(whyRef)
  useScrollReveal(howRef)
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
      // For-you cards
      gsap.fromTo(
        '.for-you-card',
        { opacity: 0, y: 50, rotateY: -5, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
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

      // Step cards
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
      desc: "You're stuck trading time for money in 1:1 sessions. Group coaching lets you serve 8-12 people at once—multiply your income without multiplying your hours."
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
      title: "Lead Small Groups (8-12 People)",
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
    { text: "Certified coaches (ICF, BCC, or equivalent credential)", icon: Award, accent: "border-t-brand-teal", glow: "hover:shadow-glow-teal" },
    { text: "Experience with group facilitation (or willingness to learn)", icon: Users, accent: "border-t-brand-coral", glow: "hover:shadow-glow-coral" },
    { text: "Commitment to emotional safety and inclusive practices", icon: Shield, accent: "border-t-brand-purple", glow: "hover:shadow-glow-purple" },
    { text: "Belief in the power of collective wisdom and peer support", icon: Heart, accent: "border-t-brand-teal", glow: "hover:shadow-glow-teal" },
    { text: "Ready to stop chasing clients and start building a real business", icon: Target, accent: "border-t-brand-coral", glow: "hover:shadow-glow-coral" },
  ]

  const coachSteps = [
    { num: '01', title: 'Register as a Coach', desc: 'Quick registration for certified coaches ready to offer group programs', border: 'border-t-brand-teal' },
    { num: '02', title: 'Create Your Program', desc: 'Easy, quick process to set up your group coaching program. You set your own pricing and schedule', border: 'border-t-brand-coral' },
    { num: '03', title: 'Members Find You', desc: 'Members browse programs and choose what fits their needs—no marketing required on your end', border: 'border-t-brand-purple' },
    { num: '04', title: 'Lead & Earn', desc: 'Facilitate small groups (8-12 people), scale your impact, build sustainable income', border: 'border-t-brand-teal' },
  ]

  const borderColors = ['border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple', 'border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple']
  const stepBorderColors = ['border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple', 'border-l-brand-teal', 'border-l-brand-coral']

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20" style={{ perspective: '800px' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light leading-[1.1] mb-8">
            {`You're an Exceptional Coach. So Why Is It So Hard to Find Paying Clients?`
              .split(/\s+/)
              .map((word, i) => (
                <span key={i} className="hero-word inline-block" style={{ opacity: 0 }}>
                  {word}{' '}
                </span>
              ))}
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-brand-navy/70 font-light mb-6" style={{ opacity: 0 }}>
            You've tried everything—free discovery sessions, networking, posting on social media. Your website is beautiful. Yet you still struggle to get clients consistently.
          </p>

          <p className="hero-subtitle-2 text-lg md:text-xl text-brand-navy/60 mb-12" style={{ opacity: 0 }}>
            You love coaching. You hate the business side. We've solved that for you.
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

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-navy/40">Scroll</span>
          <ChevronDown size={20} className="text-brand-navy/40" />
        </div>
      </section>

      {/* ─── THIS IS FOR YOU SECTION ─── */}
      <section ref={forYouRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(160deg, #FFF0EB 0%, #FAF8F5 30%, #F0F9F8 60%, #FFF8E1 100%)',
      }}>
        {/* Parallax orbs */}
        <div className="absolute top-10 right-[10%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-brand-purple/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-12 text-center">
            This is for you if you're a certified coach who...
          </h2>

          <div className="for-you-grid grid md:grid-cols-2 gap-5">
            {forYouItems.map((item, i) => (
              <div
                key={i}
                className={`for-you-card relative rounded-xl border-l-4 ${borderColors[i]} bg-white/40 backdrop-blur-md p-6 group hover:bg-white/70 hover:shadow-soft-lg hover:-translate-y-1 hover:rotate-[0.5deg] transition-all duration-400 cursor-default`}
                style={{ opacity: 0 }}
              >
                <span className="absolute top-3 right-4 text-5xl font-sans font-light bg-gradient-to-br from-brand-teal/10 to-brand-purple/10 bg-clip-text text-transparent select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-teal mt-1 flex-shrink-0 opacity-60" />
                  <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed pr-8">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-center font-medium text-brand-navy/80 mt-16 max-w-3xl mx-auto">
            <em className="text-brand-purple not-italic font-semibold">You're one of the 82% of coaches who struggle</em>—not because your coaching isn't good enough, but because client acquisition is a different skill set. CollWi solves that.
          </p>
        </div>
      </section>

      {/* ─── WHY COLLWI WORKS — BENTO GRID ─── */}
      <section ref={whyRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #F0F9F8 0%, #F8F9FC 30%, #F0EAFF 60%, #F0F9F8 100%)',
      }}>
        <div className="absolute top-20 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[8%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
            Why CollWi Works When Everything Else Hasn't
          </h2>

          <p className="text-lg md:text-xl text-brand-navy/60 text-center mb-16 max-w-2xl mx-auto">
            You've tried free sessions, networking, social media. You've spent money on websites and courses. Nothing worked. Here's why CollWi is different:
          </p>

          {/* Bento Grid */}
          <div className="bento-grid grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Large card — spans 2 cols */}
            <div className="bento-card md:col-span-2 relative bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-8 overflow-hidden group hover:shadow-soft-xl transition-all duration-500" style={{ opacity: 0 }}>
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

            {/* Tall accent card */}
            <div className="bento-card md:row-span-2 relative bg-gradient-to-b from-brand-teal to-brand-teal-dark rounded-2xl p-8 overflow-hidden group hover:shadow-glow-teal transition-all duration-500" style={{ opacity: 0 }}>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <Users size={28} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{whyBenefits[1].title}</h3>
                <p className="text-lg text-white/80 leading-relaxed">{whyBenefits[1].desc}</p>
              </div>
            </div>

            {/* Regular white card */}
            <div className="bento-card relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 hover:border-brand-purple/20 hover:shadow-glow-purple group transition-all duration-500 overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-purple/40" />
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-5">
                <Settings size={28} strokeWidth={1.5} className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{whyBenefits[2].title}</h3>
              <p className="text-brand-navy/70 leading-relaxed">{whyBenefits[2].desc}</p>
            </div>

            {/* Regular white card */}
            <div className="bento-card relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 hover:border-brand-coral/20 hover:shadow-glow-coral group transition-all duration-500 overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-coral to-brand-coral/40" />
              <div className="w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center mb-5">
                <Heart size={28} strokeWidth={1.5} className="text-brand-coral" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{whyBenefits[3].title}</h3>
              <p className="text-brand-navy/70 leading-relaxed">{whyBenefits[3].desc}</p>
            </div>

            {/* Wide bottom card spanning 2 cols */}
            <div className="bento-card md:col-span-2 relative bg-gradient-to-r from-brand-purple/5 via-white/80 to-brand-teal/5 backdrop-blur-md rounded-2xl p-8 border border-white/60 hover:shadow-soft-lg transition-all duration-500 overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral" />
              <p className="text-lg md:text-xl text-brand-navy/70 text-center italic leading-relaxed">
                &ldquo;You&rsquo;ve tried free sessions, networking, social media. You&rsquo;ve spent money on websites and courses. Nothing worked.&rdquo; — That chapter is over. CollWi is different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section ref={howRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(150deg, #FFF0EB 0%, #FAF8F5 30%, #FFF8E1 60%, #FFF0EB 100%)',
      }}>
        {/* Parallax orbs */}
        <div className="absolute top-10 right-[15%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] left-[50%] w-48 h-48 bg-brand-coral/5 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
            How It Works
          </h2>

          <p className="text-xl md:text-2xl text-center text-brand-navy/60 mb-16">
            Simple. Sustainable. No Marketing Required.
          </p>

          <div className="steps-grid relative grid md:grid-cols-2 gap-6">
            {/* Connecting dotted lines on desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] border-l-2 border-dashed border-brand-teal/15" />
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px border-t-2 border-dashed border-brand-teal/15" />

            {howSteps.map((step, i) => (
              <div
                key={i}
                className={`step-card flex items-start gap-6 bg-white/60 backdrop-blur-md border-l-4 ${stepBorderColors[i]} rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-400 group`}
                style={{ opacity: 0 }}
              >
                <div className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl bg-gradient-to-br from-brand-teal to-brand-purple text-white shadow-md ring-4 ring-white/80">
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

      {/* ─── WHO WE'RE LOOKING FOR ─── */}
      <section ref={whoRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #F0EAFF 0%, #F8F9FC 30%, #F0F9F8 60%, #F0EAFF 100%)',
      }}>
        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-purple/[0.03] tracking-widest uppercase">COACHES</span>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-10 left-[8%] w-56 h-56 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
            Who We're Looking For
          </h2>

          <p className="text-xl md:text-2xl text-center text-brand-navy/70 mb-12 max-w-3xl mx-auto">
            <strong>We're selective.</strong> We only work with qualified, ethical coaches who are committed to transformation—for their clients AND themselves.
          </p>

          <div className="who-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className={`who-card relative bg-white/50 backdrop-blur-md border-t-4 ${item.accent} rounded-xl p-6 ${item.glow} hover:bg-white/80 hover:-translate-y-1 hover:rotate-[0.3deg] transition-all duration-400 h-full group`}
                  style={{ opacity: 0 }}
                >
                  <span className="absolute top-3 right-4 text-5xl font-sans font-light text-brand-navy/[0.04] select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-brand-purple" strokeWidth={1.5} />
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

      {/* ─── CTA SECTION ─── */}
      <section ref={ctaRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1A1F36 0%, #3BAFA8 45%, #6347A0 100%)',
      }}>
        {/* Floating animated orbs */}
        <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing decorative elements */}
        <div className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-white/20 animate-pulse-soft" />
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-white/15 animate-pulse-soft" />
        <div className="absolute top-[60%] left-[60%] w-2.5 h-2.5 rounded-full bg-brand-gold/30 animate-pulse-soft" />

        <div className="cta-content relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-split-reveal text-3xl md:text-5xl font-sans font-light leading-tight mb-8 text-white">
            Ready to Stop Struggling?
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
            Join CollWi and finally build the financially viable coaching practice you deserve. No more free discovery sessions. No more 'hopeful' social media posts. No more wondering what you're doing wrong.
          </p>

          <p className="text-lg md:text-xl text-white/70 mb-12">
            You're an exceptional coach. You just needed the other half of the equation. We've got it.
          </p>

          <div>
            <a
              ref={ctaCta}
              href="https://collwi.com/register?type=coach"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-white text-brand-teal font-semibold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/95"
            >
              Register as a Coach With CollWi
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-sm text-white/60 mt-6">
            Join our growing network of certified coaches offering group programs.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS FOR COACHES ─── */}
      <section ref={coachStepsRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(160deg, #FFF0EB 0%, #FAF8F5 30%, #FFF8E1 60%, #F0F9F8 100%)',
      }}>
        <div className="absolute top-10 left-[15%] w-56 h-56 bg-brand-coral/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
              Getting Started
            </span>
            <h2 className="text-split-reveal text-4xl md:text-5xl font-sans font-light">
              How CollWi works for coaches
            </h2>
          </div>

          <div className="coach-steps-grid relative grid sm:grid-cols-2 gap-6">
            {/* Connecting lines between cards */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] border-l-2 border-dashed border-brand-purple/10" />
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px border-t-2 border-dashed border-brand-purple/10" />

            {coachSteps.map((step, i) => (
              <div
                key={i}
                className={`coach-step-card bg-white/60 backdrop-blur-md border-t-4 ${step.border} rounded-2xl p-8 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-400 h-full group`}
                style={{ opacity: 0 }}
              >
                <span className="text-5xl font-sans font-bold bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent mb-4 block">
                  <span className="count-up" data-target={parseInt(step.num)}>{step.num}</span>
                </span>
                <h3 className="text-xl font-bold mb-3 text-brand-navy group-hover:text-brand-teal transition-colors duration-300">{step.title}</h3>
                <p className="text-brand-navy/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-semibold text-brand-navy/60 mt-14">
            No more cold outreach. No more unpaid discovery sessions. Just coaching.
          </p>
        </div>
      </section>

      {/* ─── ABOUT COLLWI ─── */}
      <section ref={aboutRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{
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

          <div className="about-grid grid md:grid-cols-2 gap-6 mb-12">
            <div className="about-card relative bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-500 h-full border border-white/40 hover:border-brand-teal/30 group overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 2px rgba(78,205,196,0.15)' }} />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={26} className="text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">For CollWiers (Participants)</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  We turn personal growth from a lonely journey into a shared, guided experience.
                  Small groups. Professional coaches. Real transformation.
                </p>
              </div>
            </div>

            <div className="about-card relative bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-500 h-full border border-white/40 hover:border-brand-purple/30 group overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 2px rgba(124,92,191,0.15)' }} />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={26} className="text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">For Coaches (You!)</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  We solve the client acquisition problem that causes 82% of coaches to fail.
                  Certified coaches get matched with people actively seeking transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission pull-quote */}
          <div className="about-card relative bg-white/50 backdrop-blur-md rounded-2xl p-10 border border-white/40 text-center overflow-hidden" style={{ opacity: 0 }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral" />
            <span className="text-7xl font-serif text-brand-teal/15 leading-none block mb-2">&ldquo;</span>
            <p className="text-xl md:text-2xl text-brand-navy/60 leading-relaxed max-w-3xl mx-auto mb-4">
              CollWi is a platform, yes, but more than that, it's a <span className="text-brand-navy font-medium">movement</span>.
              A community where coaches can thrive and people can transform—together.
            </p>
            <p className="text-2xl font-semibold bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              Our mission: Make growth social, accessible, and transformative—for everyone.
            </p>
            <span className="text-7xl font-serif text-brand-teal/15 leading-none block mt-2 rotate-180">&ldquo;</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative bg-brand-navy text-white py-12 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-[20%] w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-56 h-56 bg-brand-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-coral/3 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-navy-light">&copy; 2026 CollWi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
