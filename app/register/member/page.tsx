'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff, Check, Heart, Users, Compass, Shield } from 'lucide-react';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../../components/AnimatedSection';

const valueProps = [
  {
    icon: <Heart size={22} />,
    title: 'Real connection',
    desc: 'Not surface-level small talk. Deep, meaningful bonds with women who get it.',
    color: 'coral',
  },
  {
    icon: <Users size={22} />,
    title: 'Guided coaching',
    desc: 'Every session is led by a certified coach who knows your name and your story.',
    color: 'teal',
  },
  {
    icon: <Compass size={22} />,
    title: 'Clarity & direction',
    desc: 'Walk away with real steps forward — not just motivation, but a plan.',
    color: 'purple',
  },
];

export default function MemberRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Member registration:', formData);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Nunito:wght@400;600;700&display=swap');
        
        .font-crete { font-family: 'Crete Round', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #EDE7F8 0%, #FFFFFF 50%, #FFE4D2 100%)' }} />
      <div className="fixed top-48 right-[10%] w-64 h-64 rounded-full blur-3xl -z-10" style={{ background: 'rgba(109, 207, 208, 0.06)' }} />
      <div className="fixed bottom-20 left-[8%] w-56 h-56 rounded-full blur-3xl -z-10" style={{ background: 'rgba(248, 120, 35, 0.05)' }} />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Value Proposition */}
          <div className="lg:sticky lg:top-32">
            <FadeIn delay={0.1}>
              <Link
                href="/register"
                className="font-nunito inline-flex items-center gap-2 text-sm hover:underline transition-colors mb-8"
                style={{ color: 'rgba(23, 23, 23, 0.4)' }}
              >
                <ArrowRight size={14} className="rotate-180" />
                <span>Back to options</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <span className="font-nunito inline-block px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-6" style={{ background: 'rgba(109, 207, 208, 0.1)', color: '#6DCFD0' }}>
                For Members
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-crete text-4xl md:text-5xl font-light leading-[1.15] mb-6" style={{ color: '#171717' }}>
                Find your people.
                <br />
                Start your <em className="italic" style={{ color: '#6DCFD0' }}>journey.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-nunito text-lg leading-relaxed mb-10" style={{ color: 'rgba(23, 23, 23, 0.5)' }}>
                Connect with experienced coaches and women who understand
                your challenges — and celebrate your growth.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-5" staggerDelay={0.08}>
              {valueProps.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 group">
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center`}
                      style={{
                        background: item.color === 'coral' 
                          ? 'rgba(248, 120, 35, 0.1)' 
                          : item.color === 'teal' 
                          ? 'rgba(109, 207, 208, 0.1)' 
                          : 'rgba(124, 58, 237, 0.1)',
                        color: item.color === 'coral' 
                          ? '#F87823' 
                          : item.color === 'teal' 
                          ? '#6DCFD0' 
                          : '#7C3AED'
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-nunito font-bold mb-1" style={{ color: '#171717' }}>{item.title}</h3>
                      <p className="font-nunito text-sm leading-relaxed" style={{ color: 'rgba(23, 23, 23, 0.5)' }}>{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5}>
              <div className="mt-10 pt-8 border-t" style={{ borderColor: 'rgba(23, 23, 23, 0.08)' }}>
                <p className="font-nunito text-sm leading-relaxed" style={{ color: 'rgba(23, 23, 23, 0.35)' }}>
                  Trusted by women across the country. Starting at just{' '}
                  <strong style={{ color: 'rgba(23, 23, 23, 0.55)' }}>$12.99/month</strong>.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <div>
            <ScaleIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: '0 8px 32px rgba(109, 207, 208, 0.08)', border: '1px solid rgba(109, 207, 208, 0.08)' }}>
                <div className="mb-8">
                  <h2 className="font-crete text-2xl font-bold mb-2" style={{ color: '#171717' }}>Create your account</h2>
                  <p className="font-nunito" style={{ color: 'rgba(23, 23, 23, 0.45)' }}>It only takes a minute to get started.</p>
                </div>

                {/* Google OAuth */}
                <button
                  type="button"
                  disabled={isLoading}
                  className="font-nunito w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 mb-6 hover:shadow-lg"
                  style={{ borderColor: '#e5e7eb', color: 'rgba(23, 23, 23, 0.7)' }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t" style={{ borderColor: 'rgba(23, 23, 23, 0.08)' }} />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="font-nunito px-4 bg-white text-xs uppercase tracking-wider" style={{ color: 'rgba(23, 23, 23, 0.3)' }}>
                      or with email
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                        className="font-nunito w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                        placeholder="Jane"
                        style={{ color: '#171717', borderColor: '#e5e7eb' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#6DCFD0';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(109, 207, 208, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
                        className="font-nunito w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                        placeholder="Doe"
                        style={{ color: '#171717', borderColor: '#e5e7eb' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#6DCFD0';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(109, 207, 208, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="font-nunito w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                      placeholder="you@example.com"
                      style={{ color: '#171717', borderColor: '#e5e7eb' }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#6DCFD0';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(109, 207, 208, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        required
                        minLength={8}
                        value={formData.password}
                        onChange={(e) => updateField('password', e.target.value)}
                        className="font-nunito w-full px-4 py-3.5 pr-12 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                        placeholder="Minimum 8 characters"
                        style={{ color: '#171717', borderColor: '#e5e7eb' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#6DCFD0';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(109, 207, 208, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                        style={{ color: 'rgba(23, 23, 23, 0.3)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#6DCFD0'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(23, 23, 23, 0.3)'}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="font-nunito w-full flex items-center justify-center gap-2 py-4 px-8 text-white font-semibold rounded-full hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{
                      background: '#6DCFD0',
                      boxShadow: '0 4px 16px rgba(109, 207, 208, 0.25)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isLoading) {
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(109, 207, 208, 0.35)';
                        e.currentTarget.style.background = '#54B8B9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(109, 207, 208, 0.25)';
                      e.currentTarget.style.background = '#6DCFD0';
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Creating account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                {/* Terms */}
                <p className="font-nunito text-xs text-center mt-6 leading-relaxed" style={{ color: 'rgba(23, 23, 23, 0.3)' }}>
                  By creating an account you agree to CollWi&apos;s{' '}
                  <Link href="/terms" className="hover:underline" style={{ color: '#6DCFD0' }}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="hover:underline" style={{ color: '#6DCFD0' }}>
                    Privacy Policy
                  </Link>
                </p>

                {/* Login link */}
                <p className="font-nunito text-center text-sm mt-4" style={{ color: 'rgba(23, 23, 23, 0.4)' }}>
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold transition-colors hover:underline" style={{ color: '#6DCFD0' }}>
                    Log in
                  </Link>
                </p>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(23, 23, 23, 0.05)' }}>
                  <div className="font-nunito flex flex-wrap justify-center gap-5 text-xs" style={{ color: 'rgba(23, 23, 23, 0.35)' }}>
                    <div className="flex items-center gap-1.5">
                      <Check size={14} style={{ color: '#6DCFD0' }} />
                      <span>Free to join</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check size={14} style={{ color: '#6DCFD0' }} />
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield size={14} style={{ color: '#6DCFD0' }} />
                      <span>Secure &amp; private</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </div>
  );
}
