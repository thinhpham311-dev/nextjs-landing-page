'use client'
import React from 'react'
import Image from 'next/image'
import { BranchWrapper } from "./styles"

const Branchs = (props: any) => {


    return (
        <BranchWrapper className="item">
            <div className="branchs-inner"></div>
            <div className="branchs-inner">
                <div className="container">
                    <h1>Featured In</h1>
                    <p>Thrilled to have been featured in several prominent media <br /> outlets and leading professionals across the world’s best <br /> real estate and web3 institutions.</p>
                </div>
            </div>
            <div className="branchs-list" >
                <div className="branchs-sliders" >
                    {props.data.map((image: string, index: number) => <div className="branchs-slide" key={index}>
                        <Image src={image} width={800} height={400} alt="" quality={100} sizes="300px" />
                    </div>
                    )}
                </div>
                <div className="branchs-sliders" >
                    {props.data.map((image1: string, index1: number) => <div className="branchs-slide" key={index1}>
                        <Image src={image1} width={800} height={400} alt="" quality={100} sizes="300px" />
                    </div>
                    )}
                </div>
            </div>
        </BranchWrapper>
    )
}

export default Branchs
