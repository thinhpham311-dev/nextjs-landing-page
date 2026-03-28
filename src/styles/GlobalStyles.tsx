'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import FontsCss from './fonts.css'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import { ScrollTriggerProxy } from "@/components"

const CustomStyles = createGlobalStyle`
  ${FontsCss}
  html, body{
    ${tw`w-full h-full`}
  }
  *{
    ${tw`p-0 m-0 box-border`}
  }
  main{
    ${tw`relative overflow-x-hidden bg-primary`}
  }

  .container{
    ${tw`container mx-auto xl:px-[2vw] px-[4vw]`}
}

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: inherit;
    line-height: inherit;
    text-align: inherit;
    letter-spacing: inherit;
}

  img{
    image-rendering: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  html.has-scroll-smooth {
    overflow: hidden; }
  
  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }
  
  .has-scroll-smooth body {
    overflow: hidden; }
  
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100dvh; }
  
  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100dvh;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0; }
    .c-scrollbar:hover {
      transform: scaleX(1.45); }
    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
      opacity: 1; }
  
  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab; }
    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing; }
`




const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <ScrollTriggerProxy />
  </>
)

export default GlobalStyles
