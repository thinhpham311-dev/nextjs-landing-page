'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button, Footer, Navbar } from '@/components'
import { getBlogPostBySlug } from '@/constants/blogPosts'
import { BlogDetailPage } from './styles'

export default function BlogDetail() {
  const params = useParams()
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <BlogDetailPage>
        <Navbar />
        <div className="detail-shell">
          <section className="section item hero">
            <span className="eyebrow">Blog Detail</span>
            <h1>Post not found</h1>
            <p>The article you are looking for does not exist or has been moved.</p>
            <div className="hero-actions">
              <Link href="/blog">
                <Button type="button" $variant="light">
                  Back To Blog
                </Button>
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </BlogDetailPage>
    )
  }

  return (
    <BlogDetailPage>
      <Navbar />
      <div className="detail-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Blog Detail</span>
              <h1>{post.title}</h1>
              <div className="hero-meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <p>{post.description}</p>
              <div className="hero-actions">
                <Link href="/blog">
                  <Button type="button" $variant="light">
                    Back To Blog
                  </Button>
                </Link>
                <Link href="/book-demo">
                  <Button type="button" $variant="transparent">
                    Book A Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <Image src={post.image} alt={post.title} width={1200} height={900} priority quality={100} sizes="(max-width: 1024px) 100vw, 46vw" />
            </div>
          </div>
        </section>

        <section className="section item content">
          <div className="content-panel">
            <div className="content-list">
              {post.sections.map((section) => (
                <article className="content-item" key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </BlogDetailPage>
  )
}
