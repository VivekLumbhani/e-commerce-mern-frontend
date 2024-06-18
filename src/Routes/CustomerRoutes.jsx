import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/pages/HomePage/HomePage';
import Cart from '../customer/components/cart/Cart';
import Products from '../customer/components/Products/Product';
import Navigation from '../customer/components/Navigation/Navigation';
import Footer from '../customer/components/Footer/Footer';
import ProductDetail from '../customer/ProductDetail/ProductDetail';
import ChekOut from '../customer/components/CheckOut/CheckOut';
import Order from '../customer/components/Order/Order';
import OrderDetail from '../customer/components/Order/OrderDetail';

const CustomerRoutes = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/login' element={<HomePage />} />
        <Route path='/register' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Products />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route path='/checkout' element={<ChekOut/>}></Route>
        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderId' element={<OrderDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
