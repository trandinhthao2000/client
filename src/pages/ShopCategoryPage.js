import React, { Component } from 'react'
import ShopCategory from '../components/ShopCategory/ShopCategory'

export default class ShopCategoryPage extends Component {

  render() {
    const {id} = this.props.match.match.params
    return (
      <div>
        <ShopCategory id={id}></ShopCategory>
      </div>
    )
  }
}
