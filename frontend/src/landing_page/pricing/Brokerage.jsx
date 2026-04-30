import React from 'react'

export default function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top mx-4">
        <div className="col-8 p-4">
          <a href="#" style={{textDecoration:'none'}}><h3 className='fs-5'>Brokerage calculator</h3></a>
          <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px", paddingLeft:"100px"}} className='text-muted mt-3'>
            <li>Call and Trade</li>
            <li>Digital contract</li>
            <li>Physical copies</li>
            <li>For NRI account (non - PIS)</li>
            <li>For NRI account (PIS)</li>
            <li>Debit balance charges</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{textDecoration:'none'}}><div className="fs-5">List of charges</div></a>
        </div>
      </div>
    </div>
  )
}
