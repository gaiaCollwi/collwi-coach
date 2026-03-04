'use client';

import Link from 'next/link';
import { ArrowRight, DollarSign, Calendar, TrendingUp, Shield } from 'lucide-react';
import { FadeIn, ScaleIn } from '../components/AnimatedSection';

const coachBenefits = [
  'Transparent, competitive revenue share',
  'Your schedule, your rules',
  'Built-in client pipeline',
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-24" style={{ background: 'linear-gradient(180deg, #EDE7F8 0%, #FFFFFF 50%, #FFE4D2 100%)' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Nunito:wght@400;600;700&display=swap');
        
        .font-crete { font-family: 'Crete Round', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>

      {/* Background elements */}
      <div className="fixed top-40 right-[8%] w-72 h-72 rounded-full blur-3xl animate-float -z-10" style={{ background: 'rgba(124, 58, 237, 0.08)' }} />
      <div className="fixed bottom-32 left-[5%] w-80 h-80 rounded-full blur-3xl animate-float-delayed -z-10" style={{ background: 'rgba(248, 120, 35, 0.06)' }} />
      <div className="fixed top-60 left-[15%] w-48 h-48 rounded-full blur-3xl animate-float-slow -z-10" style={{ background: 'rgba(124, 58, 237, 0.06)' }} />

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn delay={0.1}>
            <span className="font-nunito inline-block px-5 py-2 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED' }}>
              For Coaches
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-crete text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-6" style={{ color: '#171717' }}>
              Share your gift.
              <br />
              Build your <em className="italic" style={{ color: '#7C3AED' }}>practice.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-nunito text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(23, 23, 23, 0.5)' }}>
              Join a platform built to support coaches — not exploit them.
            </p>
          </FadeIn>
        </div>

        {/* Coach Card - Centered */}
        <div className="max-w-lg mx-auto mb-16">
          <ScaleIn delay={0.35}>
            <Link href="/register/coach" className="group block">
              <div className="relative bg-white rounded-3xl p-10 md:p-12 transition-all duration-500 hover:-translate-y-2 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(124, 58, 237, 0.12)', border: '1px solid rgba(124, 58, 237, 0.1)' }}>
                {/* Accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #6DCFD0 100%)' }} />

                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto" style={{ background: 'rgba(124, 58, 237, 0.1)' }}>
                    <DollarSign size={30} style={{ color: '#7C3AED' }} />
                  </div>

                  <h2 className="font-crete text-3xl md:text-4xl font-light mb-4" style={{ color: '#171717' }}>
                    Apply as a <strong className="font-bold">Coach</strong>
                  </h2>

                  <p className="font-nunito leading-relaxed mb-10" style={{ color: 'rgba(23, 23, 23, 0.5)' }}>
                    Focus on what you do best while we handle the rest. Keep 82% of what you earn.
                  </p>

                  <ul className="space-y-4 mb-12 text-left max-w-sm mx-auto">
                    {coachBenefits.map((benefit, i) => (
                      <li key={i} className="font-nunito flex items-center gap-3" style={{ color: 'rgba(23, 23, 23, 0.65)' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(124, 58, 237, 0.1)' }}>
                          {i === 0 ? (
                            <DollarSign size={14} style={{ color: '#7C3AED' }} />
                          ) : i === 1 ? (
                            <Calendar size={14} style={{ color: '#7C3AED' }} />
                          ) : (
                            <TrendingUp size={14} style={{ color: '#7C3AED' }} />
                          )}
                        </div>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="font-nunito inline-flex items-center gap-2 font-semibold text-lg group-hover:gap-3 transition-all duration-300" style={{ color: '#7C3AED' }}>
                    <span>Apply now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScaleIn>
        </div>

        {/* Trust */}
        <FadeIn delay={0.5}>
          <div className="font-nunito flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm mb-10" style={{ color: 'rgba(23, 23, 23, 0.4)' }}>
            <div className="flex items-center gap-2">
              <Shield size={16} style={{ color: '#7C3AED' }} />
              <span>No signup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} style={{ color: '#7C3AED' }} />
              <span>82% revenue share</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} style={{ color: '#7C3AED' }} />
              <span>Reviewed in 24h</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p className="font-nunito text-center" style={{ color: 'rgba(23, 23, 23, 0.4)' }}>
            Already have an account?{' '}
            <Link href="/login" className="font-semibold hover:underline transition-colors" style={{ color: '#7C3AED' }}>
              Log in
            </Link>
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
