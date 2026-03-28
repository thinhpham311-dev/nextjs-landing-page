'use client'
import React, { useRef, useEffect } from 'react'
import { useWindowDimensions } from "@/utils"
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

interface CanvasProps {
    dataImages: string[],
    isElCircle: any
}


gsap.registerPlugin(ScrollTrigger);

const CanvasParallax = ({ dataImages, isElCircle }: CanvasProps) => {
    const imagesRef = useRef<HTMLImageElement[]>([])
    const imageSeqRef = useRef({ frame: 1 })
    const { height, width } = useWindowDimensions();
    const { scroll } = useLocomotiveScroll();
    const canvasRef = useRef<HTMLDivElement>(null)

    const render = () => {
        const canvasEl = canvasRef.current?.querySelector("canvas")
        const canvas = canvasEl as HTMLCanvasElement | null
        if (!canvas || !height || !width) {
            return
        }
        canvas.height = height
        canvas.width = width
        const context = canvas.getContext("2d");
        if (context) {
            const image = imagesRef.current[imageSeqRef.current.frame]
            if (image) {
                scaleImage(image, context);
            }
        }
    }

    const scaleImage = (img: HTMLImageElement, ctx: any) => {
        let canvas = ctx?.canvas;
        let hRatio = canvas.width / img.width;
        let vRatio = canvas.height / img.height;
        let ratio = Math.max(hRatio, vRatio);
        let centerShift_x = (canvas.width - img.width * ratio) / 2;
        let centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }

    const createScroll = () => {
        const scrollCanvas = canvasRef.current
        const imageSeq = imageSeqRef.current
        if (scroll && scrollCanvas) {
            gsap.to(imageSeq, {
                frame: dataImages.length - 1,
                snap: "frame",
                ease: `none`,
                scrollTrigger: {
                    trigger: scrollCanvas,
                    pin: true,
                    scroller: scroll?.el,
                    start: `top top`,
                    end: `250% top`,
                    scrub: .1,
                },
                onUpdate: () => {
                    imageSeqRef.current.frame = imageSeq.frame
                    render()
                },
            });
        }
    }

    useEffect(() => {
        imagesRef.current = []
        const imageSeq = imageSeqRef.current
        imageSeq.frame = 1

        for (let i = 0; i < dataImages.length; i++) {
            const img = new Image();
            img.src = dataImages[i];
            img.srcset = dataImages[i];
            imagesRef.current.push(img)
        }

        const firstRenderableImage = imagesRef.current[1]
        if (firstRenderableImage) {
            firstRenderableImage.onload = render;
        }
        createScroll()
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === canvasRef.current) {
                    trigger.kill();
                }
            })
        };
    }, [height, width, dataImages, scroll])

    return (
        <div className="inner-canvas" ref={canvasRef} data-scroll data-scroll-sticky data-scroll-target="#section-canvas">
            <canvas></canvas>
            {isElCircle}
        </div>
    )
}

export default CanvasParallax
