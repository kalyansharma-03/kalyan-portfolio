import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Kalyan Sharma — Software Engineer',
  description: 'Full-stack software engineer working with .NET, React, and thoughtful digital experiences.',
  metadataBase: new URL('https://kalyan-sharma.com.np'),
  openGraph: { title: 'Kalyan Sharma — Software Engineer', description: 'Code with perspective. Building thoughtful software, one summit at a time.', url: 'https://kalyan-sharma.com.np', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
