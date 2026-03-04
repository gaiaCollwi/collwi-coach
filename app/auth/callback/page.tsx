'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const user = searchParams.get('user');
    const error = searchParams.get('error');

    if (error) {
      // Redirect to login with error
      router.push(`/login?error=${encodeURIComponent(error)}`);
      return;
    }

    if (token && user) {
      // Store auth data
      localStorage.setItem('collwi_token', token);
      localStorage.setItem('collwi_user', user);
      
      // Redirect to coach dashboard
      router.push('/dashboard');
    } else {
      // Something went wrong
      router.push('/login?error=Authentication%20failed');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: 'rgba(124, 58, 237, 0.3)', borderTopColor: '#7C3AED' }} />
        <p className="font-nunito" style={{ color: 'rgba(23, 23, 23, 0.6)' }}>Completing sign in...</p>
      </div>
    </div>
  );
}
