'use client'

import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { PrivacyPolicyPage } from './styles'

const policySections = [
  {
    title: '1. Information We Collect',
    description:
      'We collect the information you submit through contact and demo forms, such as name, work email, company, and message context. We may also collect technical usage data required to maintain site reliability and security.',
  },
  {
    title: '2. How We Use Information',
    description:
      'Information is used to respond to your requests, schedule sessions, improve product communication, and operate our services. We do not use submitted data for unrelated purposes.',
  },
  {
    title: '3. Data Sharing',
    description:
      'We only share data with service providers necessary to operate the website and customer communications. We do not sell your personal data.',
  },
  {
    title: '4. Data Retention',
    description:
      'We retain information only as long as needed for business operations, legal obligations, and security requirements, then delete or anonymize it when no longer required.',
  },
  {
    title: '5. Your Rights',
    description:
      'You can request access, correction, or deletion of your personal data where applicable. Contact us through the site contact channel for privacy-related requests.',
  },
  {
    title: '6. Updates To This Policy',
    description:
      'We may update this Privacy Policy when our practices or legal obligations change. The effective date at the top of this page reflects the latest version.',
  },
]

export default function PrivacyPolicy() {
  return (
    <PrivacyPolicyPage>
      <Navbar />
      <div className="policy-shell">
        <section className="section item hero">
          <span className="eyebrow">Privacy Policy</span>
          <h1>How Magma handles personal information across the website and conversion flows.</h1>
          <p>
            Effective date: March 28, 2026. This page describes what information is
            collected, how it is used, and the controls available to users.
          </p>
        </section>

        <section className="section item policy">
          <div className="policy-card">
            <div className="policy-list">
              {policySections.map((section) => (
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
    </PrivacyPolicyPage>
  )
}
