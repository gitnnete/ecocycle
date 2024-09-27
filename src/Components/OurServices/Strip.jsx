import React from 'react'
import recycleBeach from '../../assets/recycleBeach.jpg'

const Strip = () => {
  return (
    <>
      <div className="w-full h-56 bg-cover bg-center mt-14" style={{ backgroundImage: `url(${recycleBeach})` }}>
        {/* Removed the img tag to use background image */}
      </div>
    </>
  )
}

export default Strip
