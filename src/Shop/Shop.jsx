import React from 'react'
import ShopData from './ShopData'
import Snowfall from 'react-snowfall'
import './Shop.css'

function Shop() {


  return (
    <div className='main'>
        <div class="row">
            <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
            {ShopData.map(({ key, name, image }) => (
                <div class="col-sm-3">
                    <div class="card text-white bg-dark" style={{ margin: '10px'}}>
                            <div class="card-body" style={{ textAlign: 'center'}}>
                                <img src={image} className='card-img-top'/>
                                <h5 class="card-title">{name}</h5>
                                <a href={`/shop/${key}`} class="btn btn-light bi bi-arrow-right" />
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shop