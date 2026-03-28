'use client'
import React from 'react'
import Link from 'next/link'
import { FooterWrapper } from "./styles"
import { HiArrowRight } from "react-icons/hi2";


const Footer = () => (
    <FooterWrapper>
        <div className="container">
                <div className="footer-inner">
                    <div className="footer-inner--menu">
                        <div><Link href="/mission">Mission</Link></div>
                        <div><Link href="/contact">Contact</Link></div>
                        <div><Link href="/product">Product</Link></div>
                        <div><a href="#">Privacy Policy</a></div>
                        <div><Link href="/blog">Blog</Link></div>
                        <div><a href="#">Terms</a></div>
                    <div><Link href="/faq">FAQ</Link></div>
                </div>
                <div className="footer-inner--form">
                    <form>
                        <label className="form-label" htmlFor="email">Subscribe</label>
                        <div className="form-group-inline">
                            <input type="email" id="email" placeholder='Email' className="input-field" />
                            <button type="button"><HiArrowRight /></button>
                        </div>
                    </form>
                </div>
                <div className="copy-right"><span>© 2023 by MAGMA</span></div>
            </div>
        </div>
    </FooterWrapper>
)

export default Footer
