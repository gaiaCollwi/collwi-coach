'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const coachPerks = [
  {
    icon: <DollarSign size={22} />,
    title: 'Transparent, competitive revenue share',
    desc: 'Keep what you earn with fair, transparent pricing. You built your expertise—we help you share it.',
    color: 'purple',
  },
  {
    icon: <Calendar size={22} />,
    title: 'Your schedule, your rules',
    desc: 'Set availability that works with your life. No minimums, no penalties.',
    color: 'teal',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Built-in client pipeline',
    desc: 'We bring the members to you. Focus on coaching, not marketing.',
    color: 'coral',
  },
];

const specialties = [
  { value: 'career', label: 'Career & Professional Growth', desc: 'Job transitions, promotions, finding purpose' },
  { value: 'leadership', label: 'Leadership & Executive Coaching', desc: 'Building confidence, managing teams' },
  { value: 'life', label: 'Life & Wellness', desc: 'Balance, self-care, relationships, growth' },
  { value: 'business', label: 'Business & Entrepreneurship', desc: 'Starting ventures, scaling, navigating risk' },
  { value: 'other', label: 'Something else', desc: "We'd love to hear what you bring" },
];

const nextSteps = [
  'We review your application (usually within 24 hours)',
  'Create your coach profile and share your story',
  'Upload credentials and showcase your coaching expertise',
  'Set your rates, availability, and start connecting with members',
];

export default function CoachRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialty: '',
    experience: '',
    certifications: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Coach registration:', formData);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24" style={{ background: 'linear-gradient(180deg, #EDE7F8 0%, #FFFFFF 50%, #FFE4D2 100%)' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Nunito:wght@400;600;700&display=swap');
        
        .font-crete { font-family: 'Crete Round', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Value Proposition */}
          <div className="lg:sticky lg:top-32">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-nunito hover:underline transition-colors mb-8"
              style={{ color: 'rgba(23, 23, 23, 0.4)' }}
            >
              <ArrowRight size={14} className="rotate-180" />
              <span>Back to home</span>
            </Link>

            <span className="font-nunito inline-block px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-6" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED' }}>
              For Coaches
            </span>

            <h1 className="font-crete text-4xl md:text-5xl font-light leading-[1.15] mb-6">
              Share your gift.
              <br />
              Build your <em className="italic" style={{ color: '#7C3AED' }}>practice.</em>
            </h1>

            <p className="font-nunito text-lg leading-relaxed mb-10" style={{ color: 'rgba(23, 23, 23, 0.5)' }}>
              Join a platform built to support coaches — not exploit them.
              Focus on what you do best while we handle the rest.
            </p>

            <div className="space-y-5">
              {coachPerks.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                      item.color === 'purple'
                        ? 'text-purple-600'
                        : item.color === 'teal'
                        ? 'text-teal-500'
                        : 'text-orange-500'
                    }`}
                    style={{
                      background: item.color === 'purple' ? 'rgba(124, 58, 237, 0.1)' : item.color === 'teal' ? 'rgba(109, 207, 208, 0.1)' : 'rgba(248, 120, 35, 0.1)'
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold mb-1" style={{ color: '#171717' }}>{item.title}</h3>
                    <p className="font-nunito text-sm leading-relaxed" style={{ color: 'rgba(23, 23, 23, 0.5)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What happens next */}
            <div className="mt-10 p-6 rounded-2xl" style={{ background: 'rgba(124, 58, 237, 0.05)' }}>
              <h3 className="font-nunito font-bold mb-3" style={{ color: '#171717' }}>What happens next?</h3>
              <ul className="space-y-2.5">
                {nextSteps.map((step, i) => (
                  <li key={i} className="font-nunito flex items-start gap-3 text-sm" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                    <span className="font-bold mt-0.5" style={{ color: '#7C3AED' }}>{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: '0 8px 32px rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.08)' }}>
              <div className="mb-8">
                <h2 className="font-crete text-2xl font-bold mb-2">Apply to coach</h2>
                <p className="font-nunito" style={{ color: 'rgba(23, 23, 23, 0.45)' }}>Tell us about yourself and your coaching practice.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basics */}
                <div className="space-y-5">
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
                        className="font-nunito w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                        style={{ color: '#171717', borderColor: '#e5e7eb' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7C3AED'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
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
                        className="font-nunito w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                        style={{ color: '#171717', borderColor: '#e5e7eb' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7C3AED'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
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
                      className="font-nunito w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                      placeholder="you@example.com"
                      style={{ color: '#171717', borderColor: '#e5e7eb' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7C3AED'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                      Create a password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        required
                        minLength={8}
                        value={formData.password}
                        onChange={(e) => updateField('password', e.target.value)}
                        className="font-nunito w-full px-4 py-3.5 pr-12 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                        placeholder="Minimum 8 characters"
                        style={{ color: '#171717', borderColor: '#e5e7eb' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7C3AED'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                        style={{ color: 'rgba(23, 23, 23, 0.3)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#7C3AED'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(23, 23, 23, 0.3)'}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-50" />

                {/* Specialty */}
                <div>
                  <label className="font-nunito block text-sm font-medium mb-3" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                    What's your coaching focus?
                  </label>
                  <div className="space-y-2">
                    {specialties.map((s) => (
                      <label
                        key={s.value}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          formData.specialty === s.value ? '' : 'hover:border-purple-200'
                        }`}
                        style={{
                          borderColor: formData.specialty === s.value ? '#7C3AED' : '#e5e7eb',
                          background: formData.specialty === s.value ? 'rgba(124, 58, 237, 0.05)' : '#FAFAFA'
                        }}
                      >
                        <input
                          type="radio"
                          name="specialty"
                          value={s.value}
                          required
                          checked={formData.specialty === s.value}
                          onChange={(e) => updateField('specialty', e.target.value)}
                          className="w-4 h-4"
                          style={{ accentColor: '#7C3AED' }}
                          disabled={isLoading}
                        />
                        <div>
                          <div className="font-nunito font-medium text-sm" style={{ color: '#171717' }}>{s.label}</div>
                          <div className="font-nunito text-xs" style={{ color: 'rgba(23, 23, 23, 0.4)' }}>{s.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="experience" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                      Years coaching
                    </label>
                    <input
                      type="number"
                      id="experience"
                      min="0"
                      required
                      value={formData.experience}
                      onChange={(e) => updateField('experience', e.target.value)}
                      className="font-nunito w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                      style={{ color: '#171717', borderColor: '#e5e7eb' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7C3AED'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="certifications" className="font-nunito block text-sm font-medium mb-2" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>
                      Certifications <span style={{ color: 'rgba(23, 23, 23, 0.25)' }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="certifications"
                      value={formData.certifications}
                      onChange={(e) => updateField('certifications', e.target.value)}
                      className="font-nunito w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                      placeholder="e.g., ICF, BCC"
                      style={{ color: '#171717', borderColor: '#e5e7eb' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7C3AED'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="font-nunito w-full flex items-center justify-center gap-2 py-4 px-8 text-white font-semibold rounded-full hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #6DCFD0 100%)',
                    boxShadow: '0 4px 16px rgba(124, 58, 237, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(124, 58, 237, 0.25)';
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="font-nunito text-center text-sm" style={{ color: 'rgba(23, 23, 23, 0.4)' }}>
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold hover:underline transition-colors" style={{ color: '#7C3AED' }}>
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
