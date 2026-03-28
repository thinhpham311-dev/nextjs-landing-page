import tw, { styled, css, theme } from 'twin.macro'

const ImageHamburger = styled.svg(() => [
    tw`h-[15px] w-full`,
    css`
   
        line {
            fill: #fff;
            fill: none;
            stroke: #fff;
            stroke-width: 32;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-linejoin: bevel;
        }
    `
])

const MenuWrapper = styled.div(() => [
    tw`fixed left-0 top-0 hidden  z-[-10] w-0 !h-dvh w-full`,
    css`
        .menu-overlap{
            ${tw`absolute z-10 top-0 right-0 bottom-0 opacity-0 hidden w-full h-full bg-[rgba(10,60,206,.6)] `}
        }
        .menu-content{
            ${tw`xl:w-1/3 lg:w-1/3 w-full h-full shadow-md bg-white translate-x-[100%] h-full overflow-hidden absolute z-50 top-0 right-0 bottom-0  `}
            .menu-list{
                ${tw`list-none flex justify-center flex-col  px-[4vw]  w-full h-[calc(100%-200px)] relative after:w-full after:h-[0.5px] after:absolute after:left-0 after:bottom-0 after:bg-black`}
                li{
                    ${tw`w-full overflow-hidden my-[3vh]`}
                    .menu-link{
                        ${tw`xl:text-sm lg:text-xs text-2xs flex items-center justify-between font-type-1 w-full text-black hover:text-primary transition-all duration-500 whitespace-nowrap translate-y-[100%]`}
                        i{
                            ${tw`xl:text-sm lg:text-xs text-2xs`}
                        }
                    }
                }
            }
            .menu-socials, .place-setting{
                ${tw` px-[4vw]  flex items-center gap-x-10 xl:justify-start lg:justify-start justify-center  w-full h-[100px]`}
            }
            .menu-socials{
                .menu-link{
                    ${tw`text-primary hover:text-black font-type-1 font-normal transition-colors duration-300 inline-flex items-center gap-2`}
                }
            }
        }
    `
])

export {
    ImageHamburger,
    MenuWrapper
}
