'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { ContactPage } from './styles'

const contactDetails = [
  {
    title: 'Talk product',
    description:
      'Reach out if you want to understand how the Digital Twin Token can fit your asset, workflow, or operating model.',
  },
  {
    title: 'Discuss partnerships',
    description:
      'We can use this page to open conversations with advisors, operators, and strategic partners around the category.',
  },
  {
    title: 'Request a demo',
    description:
      'Use the contact flow as the conversion point for visitors who are ready to move from interest into a concrete conversation.',
  },
]

export default function Contact() {
  return (
    <ContactPage>
      <Navbar />
      <div className="contact-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Contact</span>
              <h1>
                Open a conversation about the product, the mission, or the future
                of digital infrastructure for real estate.
              </h1>
              <p>
                The contact page gives the site a clear action point. It turns the
                interest created by the mission, product, blog, and FAQ pages into a
                place where visitors can reach out with context and intent.
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
                  src="/home-2-2x.png"
                  alt="Contact visual for digital building systems"
                  width={1200}
                  height={900}
                  priority
                />
              </div>
              <div className="hero-thumbs">
                <div className="hero-thumb">
                  <strong>Direct next step</strong>
                  <span>Visitors should never have to guess how to continue the conversation.</span>
                </div>
                <div className="hero-thumb">
                  <strong>Simple conversion point</strong>
                  <span>A clear contact route makes the rest of the site more useful and more complete.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section item contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2>Use this page to turn curiosity into an actual conversation with the team.</h2>
              <div className="contact-list">
                {contactDetails.map((detail) => (
                  <article className="contact-item" key={detail.title}>
                    <strong>{detail.title}</strong>
                    <p>{detail.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <h3>Contact Form</h3>
              <p>
                This is a presentational contact surface for now. It gives the page
                structure and can be wired to a real submission flow later.
              </p>
              <form className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Company name" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us what you want to discuss" />
                </div>
                <div className="form-actions">
                  <Button type="button" $variant="light">
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section item cta">
          <div className="cta-panel">
            <span className="eyebrow">Continue</span>
            <h2>Let the contact page close the loop after visitors understand the mission, the product, and the category.</h2>
            <p>
              The site now has a stronger destination structure from discovery to
              decision.
            </p>
            <div className="cta-actions">
              <Link href="/mission">
                <Button type="button" $variant="light">
                  Go To Mission
                </Button>
              </Link>
              <Link href="/faq">
                <Button type="button" $variant="transparent">
                  Go To FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </ContactPage>
  )
}
