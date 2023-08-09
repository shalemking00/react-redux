import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Link, useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate=useNavigate()

    const handleBuyNow=(id)=>{
        navigate(`/cart/${id}`)
    }

    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={props.url} style={{height:'150px',width:"150px"}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text"><span>Description:</span>{props.description}</p>
                    <p class="card-text"><span>features:</span> {props.features}</p>
                    <p class="card-text"><span>price: </span>{props.price}</p>
                    <button onClick={()=>handleBuyNow(props.id.toString())} class="btn btn-primary">Buy Now</button>
                </div>
        </div>

    )
}

export default Card