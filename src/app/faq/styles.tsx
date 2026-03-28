import tw, { styled, css } from 'twin.macro'

const FaqPage = styled.div(() => [
  tw`bg-[#04112f] text-white`,
  css`
    .faq-shell {
      ${tw`relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(28,96,255,0.22),_transparent_28%),linear-gradient(180deg,#06153b_0%,#05102b_38%,#030918_100%)]`}
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

    .faq {
      ${tw`px-[4vw] py-16 lg:px-[5vw] lg:py-24`}
    }

    .faq-head {
      ${tw`max-w-[760px]`}
    }

    .faq-head h2 {
      ${tw`mt-6 text-xs font-type-2 leading-[1.1] tracking-[-0.02em] text-white md:text-sm`}
    }

    .faq-head p {
      ${tw`mt-5 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3 md:max-w-[640px]`}
    }

    .faq-list {
      ${tw`mt-10 grid gap-4`}
    }

    .faq-item {
      ${tw`rounded-[1.8rem] border border-secondary-2 bg-[rgba(255,255,255,0.04)] p-6`}
    }

    .faq-item strong {
      ${tw`block text-2xs font-type-2 leading-[1.16] tracking-[-0.02em] text-white md:text-xs`}
    }

    .faq-item p {
      ${tw`mt-4 max-w-[900px] text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
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

export { FaqPage }
