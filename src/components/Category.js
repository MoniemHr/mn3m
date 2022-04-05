import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import CetogaryData from './categoryApi'
const Category = () => {
  const [data,setdata]=useState(CetogaryData);
  const filterResult=(catItem)=>{
    const result=CetogaryData.filter((curData)=>{
      return curData.category===catItem;
    });
    setdata(result);
  }
  return (
    <>
      <div className="HeroSection">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 titleHero">
            <h1>Our Products</h1>
            <h1>Category</h1>
            <p>All your need to start your perfume brand . From the name of company to your products . We can help you to grow up together .</p>
            <p>All your need to start your perfume brand . From the name of company to your products . We can help you to grow up together .</p>
            <button type="button" class="btn btn-success w-50 HeroButton" >Contact Us On WhatssApp <FaWhatsapp className="iconHero"/> </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
          <img className='HeroImage' src='../../MoniemHr/mn3m.git/assesst/HeroImage.png' />
          </div>
        </div>
      </div>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button type="button" class="btn btn-success w-100 mb-4" onClick={()=>setdata(CetogaryData)}>All Product</button>
            <button type="button" class="btn btn-success w-100 mb-4"  onClick={()=>filterResult('PerfumeOil')}>Perfume Oil</button>
            <button type="button" class="btn btn-success w-100 mb-4"  onClick={()=>filterResult('PerfumeGlass')}>Perfume Glass</button>
            <button type="button" class="btn btn-success w-100 mb-4"  onClick={()=>filterResult('SkinCare')}>Skin Care</button>
            <button type="button" class="btn btn-success w-100 mb-4"  onClick={()=>filterResult('BodyCare')}>Body Care</button>

          </div>
          <div className="col-md-9">
            <div className="row">
            {data.map((values)=>{
              const {id,title,image}=values;
                            return(
                                <>
                                <div className="col-md-4 mb-4" key={id}>
                                <div class="card">
                                      <img src={image} class="card-img-top" alt="..."/>
                                      <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-light">More Info</a>
                                      </div>
                                    </div>
                                    </div>
                                </>
                            )
                        })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category