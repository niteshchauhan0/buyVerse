import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../customer/pages/Home/Home'
import Products from '../customer/pages/Products/Products'
import ProductDetails from '../customer/pages/Products/ProductDetails/ProductDetails'
import Cart from '../customer/pages/Cart/Cart'
import Profile from '../customer/pages/Account/Profile'
import BecomeSeller from '../customer/pages/BecomeSeller/BecomeSeller'
import Footer from '../customer/components/Footer/Footer'
import Navbar from '../customer/components/Navbar/Navbar'
import NotFound from '../customer/pages/NotFound/NotFound'
import Auth from '../customer/pages/Auth/Auth'
import { useAppDispatch, useAppSelector } from '../ReduxToolkit/Store'
import { fetchUserCart } from '../ReduxToolkit/Customer/CartSlice'
import PaymentSuccessHandler from '../customer/pages/Pyement/PaymentSuccessHandler'
import Reviews from '../customer/pages/Review/Reviews'
import Wishlist from '../customer/pages/Wishlist/Wishlist'
import { getWishlistByUserId } from '../ReduxToolkit/Customer/WishlistSlice'
import ChatBot from '../customer/pages/ChatBot/ChatBot'
import SearchProducts from '../customer/pages/Search/SearchProducts'
import WriteReviews from '../customer/pages/Review/WriteReviews'
import AddressPage from '../customer/pages/CheckOut/AddressPage'
// import Address from '../customer/pages/Checkout/AddressPage'



const CustomerRoutes = () => {
  const dispatch = useAppDispatch()
    const { cart, auth } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
        dispatch(getWishlistByUserId())
    }, [auth.jwt])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/chat-bot' element={<ChatBot />} /> */}
        <Route path='/products/:categoryId' element={<Products />} />
        <Route path='/search-products' element={<SearchProducts />} />
        <Route path='/reviews/:productId' element={<Reviews />} />
        <Route path='/reviews/:productId/create' element={<WriteReviews />} />
        <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout/address' element={<AddressPage />} />
        <Route path='/account/*' element={<Profile />} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/payment-success/:orderId' element={<PaymentSuccessHandler/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  )
}

export default CustomerRoutes