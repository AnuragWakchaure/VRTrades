import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vinduraj Health Trade | Healthcare Uniforms & Textiles | Coming Soon',
  description:
    'Healthcare Uniforms & Textiles, Made for Every Care Environment. Hospital uniforms, medical scrubs, OT linen, hospital bedding, staff uniforms and healthcare essentials.',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#d3151e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">{children}</div>
      </body>
    </html>
  );
}
