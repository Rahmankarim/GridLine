import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: { default: 'Gridline Energy | Intelligent energy management', template: '%s | Gridline Energy' },
  description: 'Gridline Energy gives operators a clearer, faster way to monitor and optimize energy-intensive facilities.',
  generator: 'v0.app',
  openGraph: { title: 'Gridline Energy | Intelligent energy management', description: 'See every signal. Act on every opportunity.', type: 'website' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f5f0' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><Navigation />{children}<Footer />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
