'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { ProductPage } from './styles'

const productMetrics = [
  {
    value: '01',
    title: 'Single operational source',
    description:
      'Bring asset data, certifications, maintenance records, and stakeholder actions into one product surface.',
  },
  {
    value: '02',
    title: 'Faster stakeholder alignment',
    description:
      'Owners, operators, brokers, and service teams work from the same verified building state.',
  },
  {
    value: '03',
    title: 'Commercial upside',
    description:
      'Package trustworthy building intelligence into a digital asset that supports leasing, financing, and reporting.',
  },
]

const productFeatures = [
  {
    title: 'Verified asset passport',
    description:
      'Each Digital Twin Token centralizes technical, legal, and operational data so every stakeholder sees a shared asset baseline.',
  },
  {
    title: 'Role-based collaboration',
    description:
      'Access is scoped by stakeholder role, which keeps sensitive workflows controlled while still allowing the right contributions.',
  },
  {
    title: 'Living building record',
    description:
      'The product keeps evolving as teams upload new evidence, certify changes, and document interventions over time.',
  },
]

const workflowSteps = [
  {
    step: 'Step 01',
    title: 'Structure the building dataset',
    description:
      'Magma ingests drawings, certificates, maintenance information, and equipment records into a clean operating model.',
  },
  {
    step: 'Step 02',
    title: 'Issue the Digital Twin Token',
    description:
      'The product turns the normalized dataset into a traceable tokenized asset with evidence-backed provenance.',
  },
  {
    step: 'Step 03',
    title: 'Activate downstream use cases',
    description:
      'Teams use the token to support operations, energy strategy, commercialization, and capital-market conversations.',
  },
]

export default function Product() {
  return (
    <ProductPage>
      <Navbar />
      <div className="product-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Product</span>
              <h1>
                Turn building data into a living digital asset that teams can
                verify, operate, and grow over time.
              </h1>
              <p>
                Magma turns fragmented building records into a verified digital
                product layer. The Digital Twin Token gives property teams a single
                operational source, controlled stakeholder access, and a clearer path
                from building data to commercial value.
              </p>
              <div className="hero-actions">
                <Link href="/">
                  <Button type="button" $variant="light">
                    Back Home
                  </Button>
                </Link>
                <Button type="button" $variant="transparent">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="hero-card">
              <div className="product-frame">
                <Image
                  src="/home-8-2x.png"
                  alt="Digital twin product visualization"
                  width={1200}
                  height={960}
                  priority
                />
              </div>
              <div className="hero-thumbs">
                <div className="hero-thumb">
                  <Image
                    src="/home-4-2x.png"
                    alt="Product dashboard detail"
                    width={900}
                    height={700}
                  />
                </div>
                <div className="hero-thumb">
                  <Image
                    src="/home-da-partners-2.png"
                    alt="Stakeholder collaboration overview"
                    width={900}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section item stats">
          <div className="stats-grid">
            {productMetrics.map((metric) => (
              <article className="stat-card" key={metric.value}>
                <strong>
                  {metric.value}. {metric.title}
                </strong>
                <span>{metric.description}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section item story">
          <div className="story-panel">
            <div>
              <span className="eyebrow">Why It Matters</span>
              <h2>
                Buildings already produce the raw material. The product organizes it
                into something teams can actually operate and trust.
              </h2>
              <div className="story-visual">
                <Image
                  src="/home-6-2x.png"
                  alt="Digital twin platform interface"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
            <div className="feature-list">
              {productFeatures.map((feature) => (
                <article className="feature-item" key={feature.title}>
                  <strong>{feature.title}</strong>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section item workflow">
          <div className="workflow-head">
            <span className="eyebrow">Workflow</span>
            <h2>From scattered documentation to a usable product layer in three moves.</h2>
            <p>
              This page frames the offer as an operating system for buildings: first
              the dataset is structured, then the token is issued, then the asset is
              ready for downstream workflows that depend on reliable building truth.
            </p>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map((card) => (
              <article className="workflow-card" key={card.step}>
                <div>
                  <span>{card.step}</span>
                  <strong>{card.title}</strong>
                </div>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section item cta">
          <div className="cta-panel">
            <span className="eyebrow">Next Step</span>
            <h2>Use the product page as the destination for navigation, campaigns, and future conversion work.</h2>
            <p>
              The route is now in place and styled consistently with the rest of the
              site, so the catalog can evolve into a fuller product funnel without
              rewriting the app shell.
            </p>
            <div className="cta-actions">
              <Link href="/">
                <Button type="button" $variant="light">
                  Explore Landing Page
                </Button>
              </Link>
              <Button type="button" $variant="transparent">
                Request Access
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </ProductPage>
  )
}
