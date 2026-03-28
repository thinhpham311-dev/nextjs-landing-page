'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { ContactPage } from '../contact/styles'

const demoHighlights = [
  {
    title: 'Product walkthrough',
    description:
      'See how building records are transformed into a Digital Twin Token operating layer for teams.',
  },
  {
    title: 'Use-case fit check',
    description:
      'We map your current asset workflows to the product and identify where the fastest value is created.',
  },
  {
    title: 'Implementation planning',
    description:
      'Review timelines, data readiness, and stakeholder onboarding for a practical rollout path.',
  },
]

interface DemoFormValues {
  fullName: string
  workEmail: string
  companyName: string
  assets: string
  goals: string
}

const initialDemoValues: DemoFormValues = {
  fullName: '',
  workEmail: '',
  companyName: '',
  assets: '',
  goals: '',
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const assetTypeOptions = [
  { value: '', label: 'Select asset type' },
  { value: 'office', label: 'Office' },
  { value: 'mixed-use', label: 'Mixed-use' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'retail', label: 'Retail' },
  { value: 'hospitality', label: 'Hospitality' },
]

export default function BookDemo() {
  const [formValues, setFormValues] = useState<DemoFormValues>(initialDemoValues)
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof DemoFormValues, string>>>({})
  const [submitMessage, setSubmitMessage] = useState('')

  const validateForm = (values: DemoFormValues) => {
    const nextErrors: Partial<Record<keyof DemoFormValues, string>> = {}

    if (values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Full name must contain at least 2 characters.'
    }
    if (!isValidEmail(values.workEmail.trim())) {
      nextErrors.workEmail = 'Please enter a valid work email.'
    }
    if (values.companyName.trim().length < 2) {
      nextErrors.companyName = 'Company must contain at least 2 characters.'
    }
    if (!values.assets.trim()) {
      nextErrors.assets = 'Please select an asset type.'
    }
    if (values.goals.trim().length < 15) {
      nextErrors.goals = 'Goals must contain at least 15 characters.'
    }

    return nextErrors
  }

  const handleFieldChange =
    (field: keyof DemoFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value
      setFormValues((prev) => ({ ...prev, [field]: value }))
      setFormErrors((prev) => ({ ...prev, [field]: undefined }))
      setSubmitMessage('')
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(formValues)

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors)
      setSubmitMessage('')
      return
    }

    setFormErrors({})
    setSubmitMessage('Your demo request is valid and ready to be submitted.')
    setFormValues(initialDemoValues)
  }

  return (
    <ContactPage>
      <Navbar />
      <div className="contact-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Book a Demo</span>
              <h1>
                Schedule a focused session to evaluate how Magma fits your assets,
                workflows, and commercial goals.
              </h1>
              <p>
                This page is the main conversion destination for visitors ready to
                move from exploration to action. Share context and we will tailor the
                walkthrough to your portfolio and operating priorities.
              </p>
              <div className="hero-actions">
                <Link href="/product">
                  <Button type="button" $variant="light">
                    View Product
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button type="button" $variant="transparent">
                    General Contact
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hero-card">
              <div className="product-frame">
                <Image
                  src="/home-7-2x.png"
                  alt="Demo session preview dashboard"
                  width={1200}
                  height={900}
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
              <div className="hero-thumbs">
                <div className="hero-thumb">
                  <strong>30-minute session</strong>
                  <span>Bring one real asset example and we will walk through it live.</span>
                </div>
                <div className="hero-thumb">
                  <strong>Actionable output</strong>
                  <span>Leave with a clear next step for pilot scope and stakeholder alignment.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section item contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">What To Expect</span>
              <h2>Use the demo to validate product fit before committing to implementation.</h2>
              <div className="contact-list">
                {demoHighlights.map((detail) => (
                  <article className="contact-item" key={detail.title}>
                    <strong>{detail.title}</strong>
                    <p>{detail.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <h3>Demo Request</h3>
              <p>
                Complete this form and the team will follow up with scheduling options.
              </p>
              <form className="form-grid" noValidate onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    value={formValues.fullName}
                    onChange={handleFieldChange('fullName')}
                    className={formErrors.fullName ? 'has-error' : ''}
                    aria-invalid={Boolean(formErrors.fullName)}
                  />
                  {formErrors.fullName ? <span className="field-error">{formErrors.fullName}</span> : null}
                </div>
                <div className="field">
                  <label htmlFor="workEmail">Work Email</label>
                  <input
                    id="workEmail"
                    type="email"
                    placeholder="you@company.com"
                    value={formValues.workEmail}
                    onChange={handleFieldChange('workEmail')}
                    className={formErrors.workEmail ? 'has-error' : ''}
                    aria-invalid={Boolean(formErrors.workEmail)}
                  />
                  {formErrors.workEmail ? <span className="field-error">{formErrors.workEmail}</span> : null}
                </div>
                <div className="field">
                  <label htmlFor="companyName">Company</label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Company name"
                    value={formValues.companyName}
                    onChange={handleFieldChange('companyName')}
                    className={formErrors.companyName ? 'has-error' : ''}
                    aria-invalid={Boolean(formErrors.companyName)}
                  />
                  {formErrors.companyName ? <span className="field-error">{formErrors.companyName}</span> : null}
                </div>
                <div className="field">
                  <label htmlFor="assets">Asset Type</label>
                  <select
                    id="assets"
                    value={formValues.assets}
                    onChange={handleFieldChange('assets')}
                    className={formErrors.assets ? 'has-error' : ''}
                    aria-invalid={Boolean(formErrors.assets)}
                  >
                    {assetTypeOptions.map((option) => (
                      <option key={option.value || 'placeholder'} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.assets ? <span className="field-error">{formErrors.assets}</span> : null}
                </div>
                <div className="field">
                  <label htmlFor="goals">Goals</label>
                  <textarea
                    id="goals"
                    placeholder="What should the demo focus on?"
                    value={formValues.goals}
                    onChange={handleFieldChange('goals')}
                    className={formErrors.goals ? 'has-error' : ''}
                    aria-invalid={Boolean(formErrors.goals)}
                  />
                  {formErrors.goals ? <span className="field-error">{formErrors.goals}</span> : null}
                </div>
                {submitMessage ? <p className="form-status">{submitMessage}</p> : null}
                <div className="form-actions">
                  <Button type="submit" $variant="light">
                    Request Demo
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </ContactPage>
  )
}
