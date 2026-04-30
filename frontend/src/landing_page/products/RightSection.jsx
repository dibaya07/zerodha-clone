import React from 'react'

export default function RightSection({imgUrl, productName, productDes, learnMore}) {
  return (
    <div className="container mt-5">
    <div className="row ">
     
      <div className="col-6 p-5 mt-5">
        <h1>{productName}</h1>
        <p>{productDes}</p>
       
        <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
       <div className="col-6">
        <img src={imgUrl}  />
      </div>

    </div>
   </div>
  )
}
