export interface BlogPost {
  slug: string
  date: string
  title: string
  description: string
  image: string
  category: string
  readTime: string
  sections: {
    heading: string
    body: string
  }[]
}

const blogPosts: BlogPost[] = [
  {
    slug: 'magma-cbre-france-3rd-tech-talk',
    date: 'May 30, 2023',
    title: "Magma At CBRE France's 3rd Tech Talk",
    description:
      'A look at how digital twins, tokenization, and real-estate operations were framed in front of industry stakeholders.',
    image: '/magma-a-la-3eme-edition-du-tech-talk-de-cbre-france-1684942208038.jpeg',
    category: 'Industry',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Context',
        body: 'The session focused on how fragmented building data limits operational speed and strategic decision-making. Magma presented a product-first view of digital twins where data quality, governance, and usability are treated as one integrated system.',
      },
      {
        heading: 'Main Discussion',
        body: 'The audience discussion highlighted a practical gap: teams often have data but cannot trust or operationalize it across stakeholders. The Digital Twin Token approach was positioned as a way to create one verifiable asset layer that can support both operations and commercial workflows.',
      },
      {
        heading: 'What It Means',
        body: 'For owners and operators, the takeaway is straightforward: value does not come from dashboards alone. It comes from a shared source of truth that multiple roles can rely on without constant manual reconciliation.',
      },
    ],
  },
  {
    slug: 'workshop-blockchain-et-actif-digitaux',
    date: 'May 25, 2023',
    title: 'Workshop Blockchain Et Actif Digitaux',
    description:
      'How the team discussed blockchain, digital assets, and the role of trustworthy property information in the sector.',
    image: '/workshop-blockchain-et-actif-digitaux-sba-16-min-scaled.jpg',
    category: 'Workshop',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Workshop Focus',
        body: 'The workshop explored how blockchain can support real-estate workflows when tied to validated operational evidence. The conversation moved past speculation and into use cases where traceability improves execution quality.',
      },
      {
        heading: 'Data First Principle',
        body: 'Participants aligned on one critical idea: tokenization is only as useful as the data it represents. The discussion emphasized verification workflows, role-based access, and clear ownership of updates over time.',
      },
      {
        heading: 'Practical Outcome',
        body: 'The event reinforced that digital asset infrastructure in real estate should be designed for adoption by day-to-day teams, not only technical specialists. That framing continues to shape product direction.',
      },
    ],
  },
  {
    slug: 'exploring-real-estate-tokenization-digital-twins',
    date: 'May 18, 2023',
    title: 'Exploring The Potential Of Real Estate Tokenization',
    description:
      'An editorial view on why digital twins and tokenization belong in the same conversation for modern buildings.',
    image: '/exploring-the-potential-of-real-estate-tokenization-digital-twins-magma.png',
    category: 'Editorial',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Why This Topic Matters',
        body: 'Real-estate teams increasingly need systems that link technical building reality with financial and strategic outcomes. Tokenization can offer structure, but only when grounded in continuously maintained operational data.',
      },
      {
        heading: 'Digital Twin + Token Layer',
        body: 'The article outlines a combined model: the digital twin captures evolving asset truth, while the token layer packages trust and provenance in a transferable form. Together, they can enable stronger collaboration across fragmented stakeholders.',
      },
      {
        heading: 'Forward View',
        body: 'The near-term opportunity is to start with focused implementation on one asset or workflow, prove operational reliability, then expand. The long-term opportunity is a portfolio-level system of verifiable building intelligence.',
      },
    ],
  },
]

const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug)

export { blogPosts, getBlogPostBySlug }
