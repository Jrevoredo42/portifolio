'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { BackToTop } from '@/components/ui/BackToTop'
import { ParticlesBackground } from '@/components/ui/ParticlesBackground'
import { Toaster } from '@/components/ui/sonner'
import gsap from 'gsap'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Animate page transition
    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
  }, [pathname])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticlesBackground />
      <Header />
      <main className="page-content relative z-10">{children}</main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  )
}
