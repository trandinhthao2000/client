import React, { Component } from 'react'
import Slider from '../components/HomePage/Slider/Slider'
import Product from '../components/HomePage/Content/ProductNew/Product'
import LaptopArea from '../components/HomePage/Content/LaptopArea/LaptopArea'
import TrenddingProduct from '../components/HomePage/Content/TrenddingProduct/TrenddingProduct'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <Slider></Slider> */}
                <Product></Product>
                <LaptopArea></LaptopArea>
                <TrenddingProduct></TrenddingProduct>
            </div>
        )
    }
}
