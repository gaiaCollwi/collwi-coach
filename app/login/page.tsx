'use client';
import { useEffect } from 'react';

export default function LoginRedirect() {
  useEffect(() => {
    window.location.href = 'https://collwi.com/login';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to CollWi login...</p>
    </div>
  );
}
