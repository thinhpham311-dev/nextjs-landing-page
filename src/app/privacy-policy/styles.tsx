import tw, { styled, css } from 'twin.macro'

const PrivacyPolicyPage = styled.div(() => [
  tw`bg-[#020814] text-white`,
  css`
    .policy-shell {
      ${tw`relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(17,55,202,0.25),_transparent_40%),linear-gradient(180deg,#04112f_0%,#030a1f_40%,#02060f_100%)]`}
    }

    .section {
      ${tw`relative`}
    }

    .hero {
      ${tw`px-[4vw] pb-12 pt-36 lg:px-[5vw] lg:pb-16 lg:pt-44`}
    }

    .eyebrow {
      ${tw`inline-flex items-center rounded-full border border-secondary-3 px-4 py-2 text-5xs font-type-3 uppercase tracking-[0.34em] text-secondary-3`}
    }

    .hero h1 {
      ${tw`mt-6 max-w-[920px] text-sm font-type-2 leading-[1.04] tracking-[-0.03em] text-white md:text-md xl:text-2xl`}
    }

    .hero p {
      ${tw`mt-6 max-w-[760px] text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3 md:text-3xs`}
    }

    .policy {
      ${tw`px-[4vw] pb-20 lg:px-[5vw] lg:pb-28`}
    }

    .policy-card {
      ${tw`rounded-[2rem] border border-secondary-2 bg-[rgba(255,255,255,0.03)] p-6 md:p-8 lg:p-10`}
    }

    .hero-actions {
      ${tw`mt-8 flex flex-wrap gap-4`}
    }

    .policy-list {
      ${tw`grid gap-6`}
    }

    .policy-item {
      ${tw`rounded-[1.5rem] border border-secondary-2 bg-[rgba(255,255,255,0.02)] p-5 md:p-6`}
    }

    .policy-item h2 {
      ${tw`text-2xs font-type-2 leading-[1.14] tracking-[-0.015em] text-white md:text-xs`}
    }

    .policy-item p {
      ${tw`mt-3 text-4xs font-type-3 font-thin leading-[1.72] tracking-[0.01em] text-secondary-3`}
    }
  `,
])

export { PrivacyPolicyPage }
