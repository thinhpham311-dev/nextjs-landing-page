import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"
import { Loading } from "@/components"

export const metadata: Metadata = {
  title: 'The Catalog Business',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Loading>
            <LocomotiveProvider>
              <GlobalStyles />
              {children}
            </LocomotiveProvider>
          </Loading>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
