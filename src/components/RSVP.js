import React from 'react'
import Search from './search'

function RSVP () {

  
  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '} 
           <span className='oliven-title-meta text-center'>Will you attend?</span>
           <h2 className='oliven-title text-center'>Please enter your name</h2>
            <Search className='row justify-content-center'/>
            <br />

          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
