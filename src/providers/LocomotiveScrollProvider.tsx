'use client'
import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const LocomotiveProvider = (props: any) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    return (
        <LocomotiveScrollProvider
            options={
                {
                     smooth: false,
                
                }
            }
            watch={
                [
                    pathname
                ]
            }
            location={pathname}
            onLocationChange={(scroll: any) => {
                scroll.update()
                scroll.scrollTo(0, {
                    duration: 0,
                    disableLerp: true,
                })
            }}
            containerRef={containerRef}
        >
            <main id="main" ref={containerRef} data-scroll-container suppressHydrationWarning>
                {props.children}
            </main>
        </LocomotiveScrollProvider>

    )
}

export default LocomotiveProvider
