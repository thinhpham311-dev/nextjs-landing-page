'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { navColors } from "@/constants"
import { NavbarWrapper } from './styles'
import { Button, Menu } from "@/components"

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const btnHamburger = navRef.current?.querySelector("button")
        const btnHamburgerEl = btnHamburger as HTMLButtonElement
        const sections = gsap.utils.toArray("section.item")
        const triggers = sections.map((section: any, index: number) => (
            ScrollTrigger.create({
                trigger: section,
                start: "top 6%",
                end: "bottom 6%",
                animation: gsap.to(btnHamburgerEl, { backgroundColor: navColors[index] }),
                toggleActions: "restart none none reverse",
            })
        ))
        return () => {
            triggers.forEach((trigger) => trigger.kill())
        }
    }, [])



    return (
        <NavbarWrapper>
            <Link href="/" aria-label="Go to homepage">
                <Image
                    className="img-logo"
                    src="/logoMagma.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
            </Link>
            <div className="right-navbar--button" id="right-nav">
                <Button type="button" className="btn-demo" $isSmall $variant="transparent">Book a Demo</Button>
                <div ref={navRef} className="navbar-hamburger-menu">
                    <Menu />
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar
