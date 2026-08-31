import React, { useEffect, useState } from 'react'

function Products() {


const[products,setProducts]=useState([]);


function loadProducts()
{

    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((products)=>setProducts(products))

};


useEffect(()=>{

    loadProducts();
   
},[]);



return (
<div className='container mt-5'>

<h2>List of Products</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatem ea cum, iure praesentium enim! Soluta culpa, nemo amet ipsa expedita eveniet dolorem praesentium vero possimus, repellat illum ab dignissimos.</p>


<div className='container mt-3'>
<div className='row'>
    {
        products.map(p=>
            <div className='col-lg-3'>
                <div className='card shadow mt-2 p-3'>
                    <img src={p.image} height="200px" className='card-image-top d-block'/>
                    <div className='card-body'>
                        <dt>Title</dt>
                        <dd className='text-truncate'>{p.title}</dd>

                        <dt>Description</dt>
                        <dd>{p.description.slice(0,30)}</dd>

                        <dt>Rating</dt>
                        <dd className='badge bg-success'>{p.rating.rate} <span className='bi bi-star-fill'></span></dd>

                        <div>
                            <button className='btn btn-danger'>Add To Cart</button>
                        </div>
                    </div>
                </div>


            </div>

        )
    }

</div>
</div>


</div>
)
}

export default Products