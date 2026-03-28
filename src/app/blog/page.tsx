'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { BlogPage } from './styles'
import { blogPosts } from '@/constants/blogPosts'

export default function Blog() {
  const featured = blogPosts[0]

  return (
    <BlogPage>
      <Navbar />
      <div className="blog-shell">
        <section className="section item hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Blog</span>
              <h1>
                Insights, field notes, and product thinking around digital twins,
                tokenization, and the future of real estate operations.
              </h1>
              <p>
                The blog page gives the site a proper editorial surface. It gathers
                updates, ideas, and industry context so the brand can explain not
                just what the product does, but why the category matters.
              </p>
              <div className="hero-actions">
                <Link href="/">
                  <Button type="button" $variant="light">
                    Back Home
                  </Button>
                </Link>
                <Link href="/product">
                  <Button type="button" $variant="transparent">
                    View Product
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hero-card">
              <div className="product-frame">
                <Image
                  src="/exploring-the-potential-of-real-estate-tokenization-digital-twins-magma.png"
                  alt="Blog editorial hero visual"
                  width={1200}
                  height={900}
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
              <div className="hero-thumbs">
                <div className="hero-thumb">
                  <strong>Editorial context</strong>
                  <span>Use content to explain the market shift behind the product, not just the interface itself.</span>
                </div>
                <div className="hero-thumb">
                  <strong>Ongoing proof</strong>
                  <span>Case notes, events, and essays give the site a more credible, living voice.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section item featured">
          <div className="featured-panel">
            <div>
              <span className="eyebrow">Featured Story</span>
              <h2>{featured.title}</h2>
              <div className="featured-meta">
                <span>{featured.date}</span>
                <span>{featured.category}</span>
                <span>{featured.readTime}</span>
              </div>
              <p className="mt-6">{featured.description}</p>
              <div className="hero-actions">
                <Link href={`/blog/${featured.slug}`}>
                  <Button type="button" $variant="light">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
            <div className="featured-visual">
              <Link href={`/blog/${featured.slug}`}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={1200}
                  height={900}
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="section item posts">
          <div className="posts-head">
            <span className="eyebrow">Latest Posts</span>
            <h2>A small editorial layer that makes the site feel active, informed, and worth revisiting.</h2>
            <p>
              This route can grow into a full content hub later. For now, it gives
              navigation a real blog destination and turns the existing article
              assets into a cleaner publishing surface.
            </p>
          </div>
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="post-card-link">
                  <div className="post-card-image">
                    <Image src={post.image} alt={post.title} width={1200} height={900} quality={100} sizes="(max-width: 1024px) 100vw, 30vw" />
                  </div>
                  <div className="post-card-copy">
                    <span>{post.date}</span>
                    <strong>{post.title}</strong>
                    <p>{post.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section item cta">
          <div className="cta-panel">
            <span className="eyebrow">Continue</span>
            <h2>Read the thinking, then move into the mission and product pages that anchor it.</h2>
            <p>
              The site now has three real destinations: mission, product, and blog.
            </p>
            <div className="cta-actions">
              <Link href="/mission">
                <Button type="button" $variant="light">
                  Go To Mission
                </Button>
              </Link>
              <Link href="/product">
                <Button type="button" $variant="transparent">
                  Go To Product
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </BlogPage>
  )
}
