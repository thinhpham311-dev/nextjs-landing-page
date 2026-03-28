import tw, { styled, css } from 'twin.macro'

const FooterWrapper = styled.footer(() => [
    tw`relative w-full bg-black text-white`,
    css`
            .footer-inner{
                ${tw`flex flex-wrap items-center justify-between py-3 h-[55vh]`}
                &--menu{
                    ${tw`grid grid-cols-2 xl:gap-x-32 lg:gap-x-32 gap-x-20 gap-y-4`}
                    a{
                        ${tw`xl:text-3xs lg:text-3xs text-4xs font-thin font-type-1 hover:text-primary`}
                    }
                }
                &--form{
                    ${tw`w-[400px]`}
                    .form-label{
                        ${tw`xl:text-2xs lg:text-3xs text-4xs font-type-1 font-thin`}
                    }
                    .form-group-inline{
                        ${tw`flex items-center xl:my-3 my-1 border-b-[0.5px] border-secondary hover:border-white focus:border-white transition-all  duration-500`}
                        input{
                            ${tw`w-[calc(100%-50px)] h-[50px] text-4xs text-white font-type-1 bg-transparent focus:outline-0 `}
                        }
                        input.has-error{
                            ${tw`text-[#ff9f9f]`}
                        }
                        button{
                            ${tw`h-[50px] w-[50px] text-3xs flex items-center justify-center`}
                        }
                    }
                    .form-message{
                        ${tw`mt-2 text-5xs font-type-1`}
                    }
                    .form-message.error{
                        ${tw`text-[#ff9f9f]`}
                    }
                    .form-message.success{
                        ${tw`text-[#9df2b4]`}
                    }
                }
                .copy-right{
                    ${tw`w-full`}
                    span{
                        ${tw`xl:text-4xs lg:text-4xs text-5xs font-thin font-type-1`}
                    }
                }
            
        }
    `
])

export {
    FooterWrapper
}
