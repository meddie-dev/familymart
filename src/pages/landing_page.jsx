import React from 'react'
import StoreNav from '../components/store_nav';
import PromoSection from '../components/promo_section.jsx';
import ProductLists from '../components/product_lists.jsx';
import Footer from '../components/footer.jsx';
import PromoSectionOverlap from '../components/promo_section_overlap.jsx';

import '../index.css'


function Home() {
  return (
    <>
      <StoreNav />
      <PromoSectionOverlap /> 
      
      <PromoSection />
      <ProductLists />
      <Footer />
    </>
  );
}

export default Home;

