import React from 'react';

import isFavImg from '../img/heart.svg';
import isNotFavImg from '../img/unheart.svg';
import star from '../img/star.svg';
// import fount from '../img/fount.svg';

const Product = (props) => {
  const myData = props.singleItem;
  myData.name = myData.name.charAt(0).toUpperCase() + myData.name.slice(1);

  const productIsFav = () => {
    if(myData.isFav) {
      return <div
        onClick={props.favChange}
        className="product-fav"
        style={{ backgroundImage: `url(${isFavImg})`}}
      ></div>
    } else {
      return <div 
        onClick={props.favChange}
        className="product-fav"
        style={{ backgroundImage: `url(${isNotFavImg})` }}
      ></div>
    }
  }

  const rating = () => {
    const elems = [];
    for(let i = 1; i <= +myData.rating; i++) {
      elems.push('star ')
    }
    const jsxElems = elems.map((item, index) => {
      return <div key={index} className="product-star" style={{backgroundImage: `url(${star})`}}></div>
    })
    return jsxElems;
  }
  const savings = () => {
    if (myData.savings !== undefined) return(
      <div className="product-savings">You save {myData.savings}</div>
    );
  }
  // const currency = () => {
  //   return <img className="product-currency" src={fount} alt="currency" />
  // }
  const gridOrList = () => {
    const type = props.listOrGrid;
    switch (type) {
      case 'grid':
        return 'product-item'
      case 'list':
        return 'product-item list'
      default:
        return 'product-item'
    }
  }
  return(
    <li className={gridOrList()}>
      <a className="product-link" onClick={(event) => event.preventDefault()} href={myData.url}>
        <div className="product-img" style={{backgroundImage: `url(${myData.picture})`}}>
        {productIsFav()}
        </div>
        <div className="product-info">
          <h3 className="product-title">{myData.name}</h3>
          <div className="product-size">{myData.size}</div>
          <div className="product-rating">
            {rating()}
          </div>
          <div className="product-price__container">
            <div className="product-price">{myData.price}</div>
            <div className="product-oldPrice">{myData.oldPrice}</div>
            {savings()}
          </div>
        </div>
      </a>
    </li>
  );
}

export default Product;