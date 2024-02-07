import React from 'react'
import where1 from '../assets/images/arb2.jpg'
import where2 from '../assets/images/arb1.jpg'

function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img className='where2' src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'>The Arbutus Club</i> 
                <p>2001 Nanton Ave, Vancouver, BC V6J 4A1</p>
              </p>
              <p>
                <i className='ti-time'></i> <span>4:00pm – 5:30pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img className='where1'src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
              <i className='ti-location-pin'>The Arbutus Club</i> 
              <p>2001 Nanton Ave, Vancouver, BC V6J 4A1</p>
              </p>
              <p>
                <i className='ti-time'></i> <span>5:30pm</span>
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
