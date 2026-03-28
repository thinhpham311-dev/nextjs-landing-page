import tw, { styled, css } from 'twin.macro'

const BlogPage = styled.div(() => [
  tw`bg-[#05122f] text-white`,
  css`
    .blog-shell {
      ${tw`relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,104,255,0.25),_transparent_30%),linear-gradient(180deg,#06153d_0%,#05122f_38%,#030918_100%)]`}
    }

    .section {
      ${tw`relative`}
    }

    .eyebrow {
      ${tw`inline-flex items-center rounded-full border border-secondary-3 px-4 py-2 text-5xs font-type-3 uppercase tracking-[0.34em] text-secondary-3`}
    }

    .hero {
      ${tw`px-[4vw] pb-16 pt-36 lg:px-[5vw] lg:pb-24 lg:pt-44`}
    }

    .hero-grid {
      ${tw`grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]`}
    }

    .hero-copy {
      ${tw`max-w-[780px]`}
    }

    .hero-copy h1 {
      ${tw`mt-6 text-sm font-type-2 leading-[1.04] tracking-[-0.03em] text-white md:text-md xl:text-2xl`}
    }

    .hero-copy p {
      ${tw`mt-6 max-w-[620px] text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3 md:text-3xs`}
    }

    .hero-actions {
      ${tw`mt-10 flex flex-wrap gap-4`}
    }

    .hero-card {
      ${tw`relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-secondary-2 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.28)] md:p-5 lg:sticky lg:top-28 lg:mt-[4.6rem]`}
    }

    .hero-card::before {
      content: "";
      ${tw`pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)]`}
    }

    .product-frame {
      ${tw`relative overflow-hidden rounded-[1.6rem] bg-[#0d1c5a]`}
    }

    .product-frame img {
      ${tw`h-[240px] w-full object-contain bg-[#081033] p-4 md:h-[300px]`}
    }

    .hero-thumbs {
      ${tw`mt-4 grid grid-cols-2 gap-4`}
    }

    .hero-thumb {
      ${tw`rounded-[1.2rem] border border-secondary-2 bg-[rgba(255,255,255,0.04)] p-4`}
    }

    .hero-thumb strong {
      ${tw`block text-3xs font-type-2 leading-[1.16] tracking-[-0.015em] text-white`}
    }

    .hero-thumb span {
      ${tw`mt-2 block text-5xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .featured {
      ${tw`px-[4vw] py-16 lg:px-[5vw] lg:py-20`}
    }

    .featured-panel {
      ${tw`grid gap-8 rounded-[2rem] border border-secondary-2 bg-[rgba(4,12,38,0.76)] p-6 md:p-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:p-10`}
    }

    .featured-panel h2 {
      ${tw`mt-6 max-w-[560px] text-xs font-type-2 leading-[1.1] tracking-[-0.025em] text-white md:text-sm`}
    }

    .featured-panel p {
      ${tw`text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .featured-visual {
      ${tw`overflow-hidden rounded-[1.6rem] border border-secondary-2 bg-[rgba(255,255,255,0.03)]`}
    }

    .featured-visual img {
      ${tw`h-[240px] w-full object-cover md:h-[320px]`}
    }

    .featured-meta {
      ${tw`mt-6 flex flex-wrap gap-3 text-5xs font-type-3 uppercase tracking-[0.2em] text-secondary-3`}
    }

    .posts {
      ${tw`px-[4vw] py-16 lg:px-[5vw] lg:py-24`}
    }

    .posts-head {
      ${tw`max-w-[760px]`}
    }

    .posts-head h2 {
      ${tw`mt-6 text-xs font-type-2 leading-[1.1] tracking-[-0.02em] text-white md:text-sm`}
    }

    .posts-head p {
      ${tw`mt-5 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3 md:max-w-[640px]`}
    }

    .posts-grid {
      ${tw`mt-10 grid gap-5 lg:grid-cols-3`}
    }

    .posts-actions {
      ${tw`mt-10 flex justify-center lg:justify-start`}
    }

    .post-card {
      ${tw`overflow-hidden rounded-[1.8rem] border border-secondary-2 bg-[rgba(255,255,255,0.04)]`}
    }

    .post-card-image {
      ${tw`overflow-hidden border-b border-secondary-2 bg-[#081033]`}
    }

    .post-card-image img {
      ${tw`h-[220px] w-full object-cover`}
    }

    .post-card-copy {
      ${tw`p-6`}
    }

    .post-card-copy span {
      ${tw`text-5xs font-type-3 uppercase tracking-[0.24em] text-secondary-3`}
    }

    .post-card-copy strong {
      ${tw`mt-4 block text-2xs font-type-2 leading-[1.16] tracking-[-0.02em] text-white md:text-xs`}
    }

    .post-card-copy p {
      ${tw`mt-3 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .cta {
      ${tw`px-[4vw] pb-20 pt-10 lg:px-[5vw] lg:pb-28`}
    }

    .cta-panel {
      ${tw`overflow-hidden rounded-[2.2rem] border border-secondary-2 bg-[linear-gradient(135deg,rgba(17,55,202,0.9),rgba(4,11,34,0.95))] p-7 md:p-10`}
    }

    .cta-panel h2 {
      ${tw`max-w-[760px] text-xs font-type-2 leading-[1.1] tracking-[-0.025em] text-white md:text-sm`}
    }

    .cta-panel p {
      ${tw`mt-5 max-w-[620px] text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .cta-actions {
      ${tw`mt-8 flex flex-wrap gap-4`}
    }
  `,
])

export { BlogPage }
