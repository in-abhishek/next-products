
"use client"
import Image from 'next/image';
import React from 'react'

const Product = (props) => {
    const { image ,id} = props;
    const handleId=(getId)=>{
        alert(getId);
    }
    return (
        <Image onClick={() => handleId(id)} 
        src={image}
        width={200} height={250} alt={image} />
    )
}

export default Product