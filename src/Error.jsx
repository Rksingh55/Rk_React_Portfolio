import React from 'react'


function Error() {
  return (
    <>
     <div className='error'>
   
      <h1 className='error-head'>Oops!</h1><br/>
      <h4 className='error-para'>404 This Page Not Found</h4>
      <h6>The page you looking for might have been removed, <br/>or temporary unavailable</h6>
     <button type="button" class="btn btn-primary">
<i class="bi bi-arrow-left-circle-fill"></i> 
      </button>
     
     </div>
    </>
  )
}

export default Error
