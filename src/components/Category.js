import React, { useState } from 'react'
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
      <h1>Category</h1>
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
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
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