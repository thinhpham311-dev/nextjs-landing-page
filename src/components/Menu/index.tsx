'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from "gsap";
import { ImageHamburger, MenuWrapper } from './styles'
import { Button } from "@/components"
import { FiArrowRight } from "react-icons/fi";
import { SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";


const Menu = () => {
    const [menuTl] = useState(gsap.timeline({ paused: true }));
    const menuBars: any = {};

    useEffect(() => {
        menuTl
            .to(menuBars.topBar, { duration: 0.2, x: 52, stroke: "#fff", rotation: 45 })
            .to(menuBars.middleBar, { duration: 0.2, alpha: 0 }, 0)
            .to(menuBars.bottomBar, { duration: 0.2, x: 52, stroke: "#fff", rotation: -45 }, 0)
            .to(menuBars.btnToggle, { backgroundColor: "#1137ca", duration: 0.2, delay: 0.1 }, 0)
            .to(".btn-demo", { zIndex: "-1", duration: 0.2, delay: 0.1 }, 0)
            .to(".img-logo", { backgroundColor: "#000", duration: 0.2, delay: 0.1 }, 0)
            .to(menuBars.menuWrapper, { display: "block", duration: 0.2, }, 0)
            .to(menuBars.menuOverlap, { opacity: 1, display: "block", duration: 0.2, delay: 0.1 }, 0)
            .to(menuBars.menuContent, { x: 0, duration: 0.2, delay: 0.1 }, 0)
            .to(".menu-link", { y: 0, duration: 0.2, delay: 0.2 }, 0)
            .reverse();
    }, []);

    const handleToggleMenu = () => {
        menuTl.reversed(!menuTl.reversed())
    }

    return (
        <>
            <Button className="btn-toggle" $variant="transparent" $isSmall ref={e => (menuBars["btnToggle"] = e)} onClick={handleToggleMenu}>
                <ImageHamburger
                    className="menu-btn"
                    viewBox="0 0 384 276"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="16"
                        y1="17"
                        x2="368"
                        y2="17"
                        ref={e => (menuBars["topBar"] = e)}
                    />
                    <line
                        x1="16"
                        y1="139.2"
                        x2="368"
                        y2="139.2"
                        ref={e => (menuBars["middleBar"] = e)}
                    />
                    <line
                        x1="16"
                        y1="261"
                        x2="368"
                        y2="261"
                        ref={e => (menuBars["bottomBar"] = e)}
                    />
                </ImageHamburger>
            </Button>
            <MenuWrapper ref={e => (menuBars["menuWrapper"] = e)} >
                <div className="menu-overlap" ref={e => (menuBars["menuOverlap"] = e)} onClick={handleToggleMenu}></div>
                <div className='menu-content' ref={e => (menuBars["menuContent"] = e)}>
                    <div className="place-setting"></div>
                    <ul className='menu-list'>
                        <li>
                            <Link href='/book-demo' className='menu-link'>Book a Demo <FiArrowRight /></Link>
                        </li>
                        <li>
                            <Link href='/product' className='menu-link'>Product <FiArrowRight /></Link>
                        </li>
                        <li>
                            <Link href='/mission' className='menu-link'>Mission <FiArrowRight /></Link>
                        </li>
                        <li>
                            <Link href='/blog' className='menu-link'>Blog <FiArrowRight /></Link>
                        </li>
                        <li>
                            <Link href='/faq' className='menu-link'>FAQ <FiArrowRight /></Link>
                        </li>
                        <li>
                            <Link href='/contact' className='menu-link'>Contact <FiArrowRight /></Link>
                        </li>
                    </ul>

                    <ul className="menu-socials">
                        <li>
                            <a href="https://twitter.com" className='menu-link' target="_blank" rel="noreferrer"><SiTwitter /> Twitter</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" className='menu-link' target="_blank" rel="noreferrer"><SiLinkedin /> Linkedin</a>
                        </li>
                        <li>
                            <a href="https://instagram.com" className='menu-link' target="_blank" rel="noreferrer"><SiInstagram /> Instagram</a>
                        </li>
                    </ul>

                </div>
            </MenuWrapper>
        </>

    )
}

export default Menu
