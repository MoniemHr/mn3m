import React from 'react'
import Data from './Apidata'
import CetogaryData from './categoryApi'
const Card = ({title , image}) => {
    return (
        <div className="col-xm-12 col-sm-6 col-md-4">
            <div class="card" >
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title} h</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card



