'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'
import { FooterWrapper } from "./styles"
import { HiArrowRight } from "react-icons/hi2";

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const Footer = () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [statusMessage, setStatusMessage] = useState("")

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        setEmailError("")
        setStatusMessage("")
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const normalizedEmail = email.trim()

        if (!isValidEmail(normalizedEmail)) {
            setEmailError("Please enter a valid email address.")
            setStatusMessage("")
            return
        }

        setEmail("")
        setEmailError("")
        setStatusMessage("Subscription email is valid and ready to be submitted.")
    }

    return (
        <FooterWrapper>
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-inner--menu">
                        <div><Link href="/mission">Mission</Link></div>
                        <div><Link href="/contact">Contact</Link></div>
                        <div><Link href="/product">Product</Link></div>
                        <div><Link href="/privacy-policy">Privacy Policy</Link></div>
                        <div><Link href="/blog">Blog</Link></div>
                        <div><Link href="/terms">Terms</Link></div>
                        <div><Link href="/faq">FAQ</Link></div>
                    </div>
                    <div className="footer-inner--form">
                        <form noValidate onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="email">Subscribe</label>
                            <div className="form-group-inline">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Email'
                                    className={`input-field ${emailError ? 'has-error' : ''}`}
                                    value={email}
                                    onChange={handleEmailChange}
                                    aria-invalid={Boolean(emailError)}
                                />
                                <button type="submit"><HiArrowRight /></button>
                            </div>
                            {emailError ? <p className="form-message error">{emailError}</p> : null}
                            {statusMessage ? <p className="form-message success">{statusMessage}</p> : null}
                        </form>
                    </div>
                    <div className="copy-right"><span>© 2023 by MAGMA</span></div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
