'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error boundary caught:', error);
  }, [error]);

  return (
    <div style={{ padding: '60px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <p style={{ color: '#6b7280', margin: '14px 0 24px' }}>
        {error?.message || 'An unexpected error occurred.'}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        style={{
          padding: '10px 24px',
          backgroundColor: '#d3151e',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  );
}

