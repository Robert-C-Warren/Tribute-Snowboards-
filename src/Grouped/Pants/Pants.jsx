import React from 'react'
import PantsData from './PantsData'
import Snowfall from 'react-snowfall'
import '../../Grouped/Grouped.css'


function Pants() {


  return (
    <div className='main'>
        <div class="row">
            <Snowfall snowflakeCount={500} style={{position: 'fixed', height: '100vh'}}/>
            {/* Map array elements to card  */}
            {PantsData.map(({ key, name, image, desc, price }) => (
                <div class="col-sm-3" style={{ paddingBottom: '10px'}}>
                    <div class="card text-white bg-dark h-100">
                            <div class="card-body" style={{ textAlign: 'center'}}>
                                <img src={image} className='card-img-top'/>
                                <h5 class="card-title">{name}</h5>
                                <p className='card-dec'>{desc}</p>
                                <h6 className='card-price' style={{ paddingBottom: '10px'}}>${price}</h6>
                                <a href={`/shop/pants/${key}`} class="btn btn-light bi bi-arrow-right" />
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pants