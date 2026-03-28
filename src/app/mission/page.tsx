'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { MissionPage } from './styles'

const missionPrinciples = [
  {
    id: '01',
    title: 'Make buildings legible',
    description:
      'We want complex properties to become readable systems, not black boxes locked inside scattered documents and siloed teams.',
  },
  {
    id: '02',
    title: 'Build trust into operations',
    description:
      'Mission-critical decisions should rely on verified asset information instead of fragmented spreadsheets, emails, and memory.',
  },
  {
    id: '03',
    title: 'Create long-term leverage',
    description:
      'When building data becomes structured and shared, teams can improve operations today while opening future commercial use cases.',
  },
]

const impactAreas = [
  {
    title: 'Owners gain clearer control',
    description:
      'Mission starts with giving ownership teams a more dependable picture of the asset they are operating, certifying, and commercializing.',
  },
  {
    title: 'Operators work from the same truth',
    description:
      'Facilities teams, advisors, and service providers can move faster when they stop reconstructing the same information over and over.',
  },
  {
    title: 'Stakeholders contribute with context',
    description:
      'The system is designed so the right people can enrich the record over time, without losing traceability or accountability.',
  },
]

const missionPath = [
  {
    step: 'Phase 01',
    title: 'Translate the physical asset into a shared digital model',
    description:
      'We start by turning static building information into an accessible operating layer that teams can continuously use.',
  },
  {
    step: 'Phase 02',
    title: 'Connect people, roles, and evidence around the same asset',
    description:
      'The mission is not just better storage. It is coordinated work around trusted information that remains attached to the building.',
  },
  {
    step: 'Phase 03',
    title: 'Help real estate behave with more intelligence and less friction',
    description:
      'Over time, this creates the conditions for faster decisions, stronger reporting, and more resilient asset performance.',
  },
]

export default function Mission() {
  return (
    <MissionPage>
      <Navbar />
      <div className="mission-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Mission</span>
              <h1>
                Bring clarity, trust, and shared intelligence to the way buildings
                are understood and operated.
              </h1>
              <p>
                Magma’s mission is to make real estate less opaque. We believe the
                built world needs a better operating layer, one where asset
                information is structured, verifiable, and usable by the people
                responsible for making decisions around it.
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
                  src="/home-5-2x.png"
                  alt="Mission visual for digital real estate systems"
                  width={1200}
                  height={900}
                  priority
                />
              </div>
              <div className="hero-thumbs">
                <div className="hero-thumb">
                  <strong>Data should serve action</strong>
                  <span>Useful building intelligence has to help teams decide, coordinate, and move.</span>
                </div>
                <div className="hero-thumb">
                  <strong>Trust should scale</strong>
                  <span>Every new stakeholder should strengthen the asset record, not fragment it further.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section item principles">
          <div className="principles-grid">
            {missionPrinciples.map((principle) => (
              <article className="principle-card" key={principle.id}>
                <span>{principle.id}</span>
                <strong>{principle.title}</strong>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section item impact">
          <div className="impact-panel">
            <div>
              <span className="eyebrow">Why We Care</span>
              <h2>
                Real estate suffers when information is hard to trust, hard to
                access, and hard to carry forward.
              </h2>
              <div className="impact-visual">
                <Image
                  src="/home-7-2x.png"
                  alt="Mission impact visual"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
            <div className="impact-list">
              {impactAreas.map((area) => (
                <article className="impact-item" key={area.title}>
                  <strong>{area.title}</strong>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section item path">
          <div className="path-head">
            <span className="eyebrow">Path Forward</span>
            <h2>Our mission becomes real when systems, stakeholders, and evidence finally move together.</h2>
            <p>
              We are building toward a model where building intelligence is not an
              afterthought. It becomes the connective layer between operations,
              compliance, commercialization, and long-term asset value.
            </p>
          </div>
          <div className="path-grid">
            {missionPath.map((item) => (
              <article className="path-card" key={item.step}>
                <div>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section item cta">
          <div className="cta-panel">
            <span className="eyebrow">Continue</span>
            <h2>Explore the mission, then move into the product layer that makes it operational.</h2>
            <p>
              The mission page now gives the site a second destination: one page for
              the belief system, one page for the product system.
            </p>
            <div className="cta-actions">
              <Link href="/product">
                <Button type="button" $variant="light">
                  Go To Product
                </Button>
              </Link>
              <Link href="/">
                <Button type="button" $variant="transparent">
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MissionPage>
  )
}
