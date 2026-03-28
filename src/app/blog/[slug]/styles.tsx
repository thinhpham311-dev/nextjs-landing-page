import tw, { styled, css } from 'twin.macro'

const BlogDetailPage = styled.div(() => [
  tw`bg-[#030b1f] text-white`,
  css`
    .detail-shell {
      ${tw`relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,104,255,0.25),_transparent_32%),linear-gradient(180deg,#06153d_0%,#040d25_42%,#020710_100%)]`}
    }

    .section {
      ${tw`relative`}
    }

    .eyebrow {
      ${tw`inline-flex items-center rounded-full border border-secondary-3 px-4 py-2 text-5xs font-type-3 uppercase tracking-[0.34em] text-secondary-3`}
    }

    .hero {
      ${tw`px-[4vw] pb-12 pt-36 lg:px-[5vw] lg:pb-16 lg:pt-44`}
    }

    .hero-grid {
      ${tw`grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]`}
    }

    .hero h1 {
      ${tw`mt-6 max-w-[900px] text-sm font-type-2 leading-[1.05] tracking-[-0.03em] text-white md:text-md xl:text-2xl`}
    }

    .hero-meta {
      ${tw`mt-6 flex flex-wrap gap-3 text-5xs font-type-3 uppercase tracking-[0.2em] text-secondary-3`}
    }

    .hero p {
      ${tw`mt-6 max-w-[740px] text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3 md:text-3xs`}
    }

    .hero-actions {
      ${tw`mt-8 flex flex-wrap gap-4`}
    }

    .hero-visual {
      ${tw`overflow-hidden rounded-[2rem] border border-secondary-2 bg-[#081033]`}
    }

    .hero-visual img {
      ${tw`h-[260px] w-full object-cover md:h-[360px]`}
    }

    .content {
      ${tw`px-[4vw] pb-20 lg:px-[5vw] lg:pb-28`}
    }

    .content-panel {
      ${tw`rounded-[2rem] border border-secondary-2 bg-[rgba(255,255,255,0.03)] p-6 md:p-8 lg:p-10`}
    }

    .content-list {
      ${tw`grid gap-5`}
    }

    .content-item {
      ${tw`rounded-[1.5rem] border border-secondary-2 bg-[rgba(255,255,255,0.02)] p-5 md:p-6`}
    }

    .content-item h2 {
      ${tw`text-2xs font-type-2 leading-[1.14] tracking-[-0.015em] text-white md:text-xs`}
    }

    .content-item p {
      ${tw`mt-3 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }
  `,
])

export { BlogDetailPage }
