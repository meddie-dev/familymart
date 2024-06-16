
import React from 'react';
import StoreNav from '../components/store_nav';
import Category from '../layouts/category.jsx';
import Products from '../components/products.jsx';
import CategoryReview from '../components/category_preview.jsx';
import Footer from '../components/footer.jsx';



function Shop() {
  return (
    <>
      <StoreNav />
      
      <Category />
      <Products/>
      <CategoryReview />
      <Footer />
    </>
  );
}

export default Shop;
