'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { FaqPage } from './styles'

const faqs = [
  {
    question: 'What is a Digital Twin Token?',
    answer:
      'A Digital Twin Token is a digital asset layer that organizes essential building information into a traceable, verifiable record tied to the real property.',
  },
  {
    question: 'Who is the product for?',
    answer:
      'The system is designed for owners, operators, brokers, advisors, and service teams that need a more reliable view of a building and the ability to collaborate around it.',
  },
  {
    question: 'Does this replace existing building software?',
    answer:
      'Not necessarily. The product is better understood as an intelligence and trust layer that can sit across operational data, evidence, and stakeholder workflows.',
  },
  {
    question: 'Why does tokenization matter here?',
    answer:
      'Tokenization creates a stronger structure for provenance, continuity, and traceability. It helps the building record behave more like a durable digital asset than a loose document archive.',
  },
  {
    question: 'How is the information kept current?',
    answer:
      'The value comes from stakeholders enriching the record over time. New evidence, updates, and certifications strengthen the digital twin instead of creating more fragmentation.',
  },
  {
    question: 'What kind of value can this create?',
    answer:
      'The system can support better operations, improved reporting, stronger stakeholder alignment, and more confidence in commercialization or financing discussions around the asset.',
  },
]

export default function Faq() {
  return (
    <FaqPage>
      <Navbar />
      <div className="faq-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">FAQ</span>
              <h1>
                Clear answers to the questions that come up when buildings become
                digital systems, not just physical assets.
              </h1>
              <p>
                The FAQ page gives the site a practical reference layer. It helps
                visitors understand the product model, the mission behind it, and
                the role of trust, data, and tokenization without forcing them to
                decode the language on their own.
              </p>
              <div className="hero-actions">
                <Link href="/">
                  <Button type="button" $variant="light">
                    Back Home
                  </Button>
                </Link>
                <Link href="/product">
                  <Button type="button" $variant="transparent">
                    View Product
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hero-card">
              <div className="product-frame">
                <Image
                  src="/home-3-2x.png"
                  alt="FAQ visual for digital building systems"
                  width={1200}
                  height={900}
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
              <div className="hero-thumbs">
                <div className="hero-thumb">
                  <strong>Practical clarity</strong>
                  <span>Answer the operational questions that usually slow interest down.</span>
                </div>
                <div className="hero-thumb">
                  <strong>Better conversion</strong>
                  <span>Good FAQs reduce friction between curiosity, trust, and the next product step.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section item faq">
          <div className="faq-head">
            <span className="eyebrow">Common Questions</span>
            <h2>A reference page that explains the system in plain language without flattening the ambition behind it.</h2>
            <p>
              This page can expand later, but it already gives the navigation a real
              FAQ destination and captures the most important questions new visitors
              are likely to ask first.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question}>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section item cta">
          <div className="cta-panel">
            <span className="eyebrow">Continue</span>
            <h2>Use the FAQ to reduce friction, then move visitors into the pages that explain the mission and the product.</h2>
            <p>
              The site now has a clearer information structure across brand, product,
              editorial, and practical questions.
            </p>
            <div className="cta-actions">
              <Link href="/mission">
                <Button type="button" $variant="light">
                  Go To Mission
                </Button>
              </Link>
              <Link href="/blog">
                <Button type="button" $variant="transparent">
                  Go To Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </FaqPage>
  )
}
