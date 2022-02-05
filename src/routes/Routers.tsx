import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Index from '../pages/Index'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'

import MyCart from '../pages/MyCart'
import SelectAddress from '../pages/SelectAddress'
import Checkout from '../pages/Checkout'

import Orders from '../pages/Orders';
import OrdersDetail from '../pages/OrderDetail';

import ManageOrderDetail from '../pages/ManageOrderDetail';
import ManageOrders from '../pages/ManageOrders';
import ManageProducts from '../pages/ManageProducts';
import ManageUsers from '../pages/ManageUsers';

interface Props { }

const Routers: React.FC<Props> = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<ProductDetail />} />
            <Route path='buy'>
                <Route path='my-cart' element={<MyCart />} />
                <Route path='select-address' element={<SelectAddress />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
            <Route path='orders'>
                <Route path='my-orders' element={<Orders />} />
                <Route path='my-orders/:id' element={<OrdersDetail />} />
            </Route>
            <Route path='admin' >
                <Route path='manaage-products' element={<ManageProducts />} />
                <Route path='manage-orders' element={<ManageOrders />} />
                <Route path='manage-orders/:id' element={<ManageOrderDetail />} />
                <Route path='manage-users' element={<ManageUsers />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
};

export default Routers;
