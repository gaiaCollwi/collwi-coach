'use client';
import { useEffect } from 'react';

export default function MemberRegisterRedirect() {
  useEffect(() => {
    window.location.href = 'https://collwi.com/register';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to CollWi registration...</p>
    </div>
  );
}
