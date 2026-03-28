'use client'

import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { TermsPage } from './styles'

const termsSections = [
  {
    title: '1. Acceptance of Terms',
    description:
      'By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the site.',
  },
  {
    title: '2. Use of Website',
    description:
      'You may use this site for lawful business and informational purposes only. You agree not to misuse, disrupt, or attempt unauthorized access to any systems connected to the site.',
  },
  {
    title: '3. Intellectual Property',
    description:
      'All website content, branding, visuals, and materials are owned by Magma or licensed to Magma, unless otherwise stated. You may not reproduce or distribute content without permission.',
  },
  {
    title: '4. No Warranty',
    description:
      'Website content is provided as-is for general information. We do not guarantee completeness, accuracy, or uninterrupted availability at all times.',
  },
  {
    title: '5. Limitation of Liability',
    description:
      'To the extent permitted by law, Magma is not liable for indirect, incidental, or consequential damages related to your use of this website.',
  },
  {
    title: '6. Changes to Terms',
    description:
      'We may update these Terms when needed. The effective date on this page indicates the latest published version.',
  },
]

export default function Terms() {
  return (
    <TermsPage>
      <Navbar />
      <div className="policy-shell">
        <section className="section item hero">
          <span className="eyebrow">Terms</span>
          <h1>Terms governing access to and use of the Magma website.</h1>
          <p>
            Effective date: March 28, 2026. These terms describe acceptable use and
            key legal boundaries for this site.
          </p>
        </section>

        <section className="section item policy">
          <div className="policy-card">
            <div className="policy-list">
              {termsSections.map((section) => (
                <article className="policy-item" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
            <div className="hero-actions">
              <Link href="/contact">
                <Button type="button" $variant="light">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </TermsPage>
  )
}
