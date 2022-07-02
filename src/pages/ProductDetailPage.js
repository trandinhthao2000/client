import React, { Component } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'

export default class ProductDetailPage extends Component {
  render() {
    const {id} = this.props.match.match.params
    return (
      <div>
        <ProductDetail id={id}></ProductDetail>
      </div>
    )
  }
}
