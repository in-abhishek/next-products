import Link from 'next/link'
import React from 'react'
import Product from './Product'
const ProductList = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const response = await data.json();
    return response;
}
const ServerProducts = async () => {
    let products = await ProductList();
    console.log("products->>>", products);
    return (
        <main>
            <div className="nav-content">
                <h2>Fetching dgsda From Server Side</h2>
                <span><Link href="/">Client Side</Link></span>
            </div>
            <div className="all-product">
                {products.map((item, key) => {
                    return (
                        <div className="product" key={key}>
                            <div className="single-product">
                                <div className="product-image">
                                    <Product image={item?.image} id={item?.id} />
                                    <span className="ratings">{item?.rating?.rate}</span>
                                </div>
                                <div className="product-content">
                                    <h3>{item?.title}</h3>
                                    <div className="product-rating">
                                        <div className="span-ratings">
                                            <p>Price: <span>{item?.price}</span></p>
                                        </div>
                                        <div className="span-ratings">
                                            <p>Category: <span>{item?.category}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </main>
    )
}

export default ServerProducts