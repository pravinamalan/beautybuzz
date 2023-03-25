import React, { useState } from 'react'
import './products.css'
import plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {
    const [parent] = useAutoAnimate();
    const[MenuProducts,setMenuProducts]= useState(ProductsData)
    const filter = (type)=>{
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }
  return (
    <div className='container product-wrapper'>
        <img src={plane} alt="" />
        <h1>Our Feature Products</h1>

        <div className="products">
            <ul className="menu">
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>
            <div className="lists" ref={parent}>
                {
                    MenuProducts.map((product,i)=>(
                        <div className="product" key={i}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>shop now</div>
                            </div>
                            <img src={product.img} alt="product" className='product-image'/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products