import React from 'react'
import Header from '../layouts/header.jsx'
import Hero from '../layouts/hero.jsx'
import Product from '../layouts/product.jsx'
import FeatureSection from '../layouts/feature_section.jsx'
import ContentSection from '../layouts/content_section.jsx'
import LogoClouds from '../layouts/logo_clouds.jsx'
import '../index.css'


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <FeatureSection />
      <ContentSection />
      <LogoClouds />
    </>
  );
}

export default Home;

