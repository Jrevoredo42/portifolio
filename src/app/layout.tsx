import type { Metadata } from 'next'
import '../index.css'
import { ClientLayout } from '@/components/layout/ClientLayout'

export const metadata: Metadata = {
  title: 'João Revoredo - Engenheiro de Software Full Stack',
  description: 'Portfolio de João Revoredo - Engenheiro de Software Full Stack',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
