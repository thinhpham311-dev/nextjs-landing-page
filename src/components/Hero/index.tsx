'use client'
import React from 'react'
import Link from 'next/link'
import { HeroWrapper, HeroBottom } from './styles'
import { Button } from "@/components"



const Hero = () => {


    return (
        <>
            <HeroWrapper className="item" data-scroll data-scroll-speed="-5" id="hero">
                <HeroBottom>
                    <div className="container">
                        <h1>Experience Real  <br /> Estate Agility</h1>
                        <div className="hero--bottom-inner">
                            <div className="hero--bottom-inner-content">
                                <h4 className="hero--bottom-inner-content--text">Create a Digital Twin Token (DTT®) of your <br /> existing building   and release the potential of<br /> Web3.</h4>
                                <Link href="/product">
                                    <Button type="button" $variant='light'>VIEW PRODUCT</Button>
                                </Link>
                            </div>
                            {/* <Button type="button" className="btn-scrolldown" $isSmall $isLink onClick={handleScrollDown}>Scroll Down<br /><BsChevronCompactDown /></Button> */}
                        </div>
                    </div>
                </HeroBottom>
                <video src="./1.mp4" autoPlay loop muted ></video>
            </HeroWrapper>
        </>
    )
}

export default Hero
