'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PostsWrapper } from "./styles"
import { Button } from "@/components"
import { FiArrowRight } from "react-icons/fi";
import { blogPosts } from "@/constants/blogPosts";


const Posts = () => (
    <PostsWrapper className="item" >
        <div className="container">
            <h1 className="post-title">Recent Blog</h1>
            {blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="post-link">
                    <div className="post-inner">
                        <div className="post-inner--left">
                            <Image src={post.image} height={900} width={1200} alt={post.title} quality={100} sizes="(max-width: 1024px) 100vw, 48vw" />
                        </div>
                        <div className="post-inner--right">
                            <h4>{post.date}</h4>
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        <div className="container">
            <Link href="/blog">
                <Button type="button" className="btn-view-all" $variant='primary' >VIEW ALL <FiArrowRight /></Button>
            </Link>
        </div>
    </PostsWrapper>
)

export default Posts
