import React from 'react'

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>Organization</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/Bianca.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Ceremony</h6>
            <p>
              Celebrate love with us at the Arbutus Club as we 
              exchange vows amidst the timeless elegance of this exclusive venue.
              Your presence is cherished.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Dinner</h6>
            <p>
              Join us for a joyous dinner with delicious buffet style dishes as we celebrate love together.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Party</h6>
            <p>
                Join us for a lively party to share in the joy, laughter, and dancing.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Cake Cutting</h6>
            <p>
             Finally, amidst love and cheers, 
             witness the joy as we cut our wedding cake, 
             sealing our sweet union!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
