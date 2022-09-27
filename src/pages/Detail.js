import React from 'react'

import Header from "parts/Header"
// import JustArrived from 'parts/HomePage/JustArrived'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'

import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import Breadcrumb from 'components/Breadcrumb'
import ProductDetatils from 'parts/Details/ProductDetatils'
import Suggestion from 'parts/Details/Suggestion'
export default function Details() {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        {url: "/", name:"Home"},
        {url: "/categories/121212", name:"Office Room"},
        {url: "/categories/121212/product/2121212", name:"Detail"}
    ]} />
    <ProductDetatils />
    <Suggestion />

    <Sitemap />
    <Footer />
    </>
  )
}
