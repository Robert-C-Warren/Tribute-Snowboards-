import React from 'react'
import GogglesData from './GogglesData'
import Snowfall from 'react-snowfall'
import '../../Grouped/Grouped.css'


function Goggles() {


  return (
    <div className='main'>
        <div class="row">
            <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
            {GogglesData.map(({ key, name, image, desc, price }) => (
                <div class="col-sm-3" style={{ paddingBottom: '10px'}}>
                    <div class="card text-white bg-dark h-100" style={{ margin: '10px'}}>
                            <div class="card-body" style={{ textAlign: 'center'}}>
                                <img src={image} className='card-img-top'/>
                                <h5 class="card-title">{name}</h5>
                                <p className='card-dec'>{desc}</p>
                                <h6 className='card-price' style={{ paddingBottom: '10px'}}>${price}</h6>
                                <a href={`/shop/goggles/${key}`} class="btn btn-light bi bi-arrow-right" />
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Goggles