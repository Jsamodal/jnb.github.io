import React from 'react'
import storyImage from '../assets/images/Bianca.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>  
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
            Our journey began in 2021 when our paths crossed at our local church. 
            Intrigued by each other, we felt a deep connection, and it became evident that God had a hand in weaving our stories together. 
            Despite the growing interest, we decided to trust God with our future – including our love life, allowing Him to guide us to the right time 
            for dating and learning more about one another.
            </p>
            <h4>July 29th, 2023, We Said Yes!</h4>
            <p>
            Finally, at the beginning of 2023, we officially started this journey together of getting to know one another. 
            Time flew by so quickly and by the end of July, we found ourselves happily engaged. 
            As we now prepare to celebrate this special day, we eagerly anticipate the future that God has intricately planned for us. 
            Our story is a testament to the power of faith, patience, and divine timing, and we can't wait to share the joy of our union with all of you.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
