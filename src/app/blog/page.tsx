'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Footer, Navbar } from '@/components'
import { BlogPage } from './styles'

const posts = [
  {
    date: 'May 30, 2023',
    title: "Magma At CBRE France's 3rd Tech Talk",
    description:
      'A look at how digital twins, tokenization, and real-estate operations were framed in front of industry stakeholders.',
    image: '/magma-a-la-3eme-edition-du-tech-talk-de-cbre-france-1684942208038.jpeg',
  },
  {
    date: 'May 25, 2023',
    title: 'Workshop Blockchain Et Actif Digitaux',
    description:
      'How the team discussed blockchain, digital assets, and the role of trustworthy property information in the sector.',
    image: '/workshop-blockchain-et-actif-digitaux-sba-16-min-scaled.jpg',
  },
  {
    date: 'May 18, 2023',
    title: 'Exploring The Potential Of Real Estate Tokenization',
    description:
      'An editorial view on why digital twins and tokenization belong in the same conversation for modern buildings.',
    image: '/exploring-the-potential-of-real-estate-tokenization-digital-twins-magma.png',
  },
]

export default function Blog() {
  const featured = posts[0]

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
                <span>Industry</span>
                <span>Editorial</span>
              </div>
              <p className="mt-6">{featured.description}</p>
            </div>
            <div className="featured-visual">
              <Image
                src={featured.image}
                alt={featured.title}
                width={1200}
                height={900}
              />
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
            {posts.map((post) => (
              <article className="post-card" key={post.title}>
                <div className="post-card-image">
                  <Image src={post.image} alt={post.title} width={1200} height={900} />
                </div>
                <div className="post-card-copy">
                  <span>{post.date}</span>
                  <strong>{post.title}</strong>
                  <p>{post.description}</p>
                </div>
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
