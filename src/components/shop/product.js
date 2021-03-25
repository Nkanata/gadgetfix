import React from "react";
import iphone from "../../assets/images/phoneX-spacegray.jpeg"
import {Link} from "react-router-dom";


const Product = (product) => {
    console.log("prop", product)
    const item = {product}

    console.log("item", item)

    return (
        <div className="product">
            <div className="card" style={{width: "18rem"}}>
                <Link to={'/details/'+ item.name} key={item.pk}>
              <img src={iphone} alt="iphone" className="card-img-top"/>
                </Link>
              <div className="card-body">
                  <p className="card-text">Iphone X</p>
              </div>
            </div>
        </div>
    )
};

export default Product;