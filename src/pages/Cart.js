import React from 'react'

import Header from "parts/Header"
// import JustArrived from 'parts/HomePage/JustArrived'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import Breadcrumb from 'components/Breadcrumb'
import ShoppingCarts from 'parts/Cart/ShoppingCarts'
import ShippingDetails from 'parts/Cart/ShippingDetails'
// import ProductDetatils from 'parts/Details/ProductDetatils'
// import Suggestion from 'parts/Details/Suggestion'
export default function Cart() {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        {url: "/", name:"Home"},
        {url: "/categories/121212", name:"Shopping Cart"},
    
    ]} />
    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 flex-wrap">
            <ShoppingCarts />
            <ShippingDetails />
        </div>
       </div>
     </section>

    {/* <ProductDetatils />
    <Suggestion /> */}

    <Sitemap />
    <Footer />
    </>
  )
}
