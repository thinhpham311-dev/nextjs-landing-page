import tw, { styled, css } from 'twin.macro'

const ProductPage = styled.div(() => [
  tw`bg-[#061341] text-white`,
  css`
    .product-shell {
      ${tw`relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(64,110,255,0.38),_transparent_32%),linear-gradient(180deg,#081749_0%,#061341_36%,#040b22_100%)]`}
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
      ${tw`h-[260px] w-full object-contain bg-[#0b184d] p-3 md:h-[320px]`}
    }

    .hero-thumbs {
      ${tw`mt-4 grid grid-cols-2 gap-4`}
    }

    .hero-thumb {
      ${tw`overflow-hidden rounded-[1.2rem] border border-secondary-2 bg-[rgba(255,255,255,0.04)]`}
    }

    .hero-thumb img {
      ${tw`h-[120px] w-full object-contain bg-[#09133a] p-3 md:h-[150px]`}
    }

    .product-card-copy {
      ${tw`mt-5 grid gap-4 md:grid-cols-[0.9fr_1.1fr]`}
    }

    .product-card-copy h2 {
      ${tw`text-3xs font-type-2 leading-[1.18] tracking-[-0.02em] text-white md:text-2xs`}
    }

    .product-card-copy p {
      ${tw`text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .stats {
      ${tw`px-[4vw] py-16 lg:px-[5vw] lg:py-20`}
    }

    .stats-grid {
      ${tw`grid gap-4 md:grid-cols-3`}
    }

    .stat-card {
      ${tw`rounded-[1.8rem] border border-secondary-2 bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-sm`}
    }

    .stat-card strong {
      ${tw`block text-2xs font-type-2 leading-[1.16] tracking-[-0.02em] text-white md:text-xs`}
    }

    .stat-card span {
      ${tw`mt-3 block max-w-[280px] text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .story {
      ${tw`px-[4vw] py-16 lg:px-[5vw] lg:py-24`}
    }

    .story-panel {
      ${tw`grid gap-8 rounded-[2rem] border border-secondary-2 bg-[rgba(4,12,38,0.76)] p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-10`}
    }

    .story-visual {
      ${tw`mt-6 overflow-hidden rounded-[1.6rem] border border-secondary-2 bg-[rgba(255,255,255,0.03)]`}
    }

    .story-visual img {
      ${tw`h-[220px] w-full object-contain bg-[#081033] p-4 md:h-[280px]`}
    }

    .story-panel h2 {
      ${tw`mt-6 max-w-[560px] text-xs font-type-2 leading-[1.1] tracking-[-0.025em] text-white md:text-sm`}
    }

    .story-panel p {
      ${tw`text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .feature-list {
      ${tw`grid gap-4`}
    }

    .feature-item {
      ${tw`rounded-[1.5rem] border border-secondary-2 bg-[rgba(255,255,255,0.03)] p-5`}
    }

    .feature-item strong {
      ${tw`text-3xs font-type-2 leading-[1.16] tracking-[-0.01em] text-white`}
    }

    .feature-item p {
      ${tw`mt-2 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }

    .workflow {
      ${tw`px-[4vw] py-16 lg:px-[5vw] lg:py-24`}
    }

    .workflow-head {
      ${tw`max-w-[760px]`}
    }

    .workflow-head h2 {
      ${tw`mt-6 text-xs font-type-2 leading-[1.1] tracking-[-0.02em] text-white md:text-sm`}
    }

    .workflow-head p {
      ${tw`mt-5 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3 md:max-w-[640px]`}
    }

    .workflow-grid {
      ${tw`mt-10 grid gap-4 lg:grid-cols-3`}
    }

    .workflow-card {
      ${tw`flex min-h-[260px] flex-col justify-between rounded-[1.8rem] border border-secondary-2 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6`}
    }

    .workflow-card span {
      ${tw`text-5xs font-type-3 uppercase tracking-[0.28em] text-secondary-3`}
    }

    .workflow-card strong {
      ${tw`mt-8 block text-2xs font-type-2 leading-[1.16] tracking-[-0.02em] text-white md:text-xs`}
    }

    .workflow-card p {
      ${tw`mt-4 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
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

export { ProductPage }
