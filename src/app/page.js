
"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);
  const getAllData = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const response = await data.json();
    console.log("response->>>", response);
    setProduct(response);
  }

  useEffect(() => {
    getAllData();
  }, [])

  const handleId = (id) => {
    alert("key->>>", id);
  }
  return (
    <main >
      <div className="nav-content">
        <h2>Fetching From Client Side</h2>
        <span><Link href="/serverProducts">Server Side</Link></span>
      </div>
      <div className="all-product">
        {
          product.map((item, key) => {
            return (
              <div className="product" key={key}>
                <div className="single-product">
                  <div className="product-image">
                    <img onClick={() => handleId(item?.id)} src={item?.image} alt="" />
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
  );
}
