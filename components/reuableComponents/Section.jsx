import React from 'react'

const Section = ({Title,subTitle}) => {
  return (
    <div className="relative flex justify-center items-center h-32">
    {/* Large Outline Text */}
    <h1 className="text-6xl md:text-7xl font-bold text-gray-300/20 absolute  outlined-text tracking-wider">
      {Title}
    </h1>

    {/* Bold Foreground Text */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#00d2b5] relative">
      {subTitle}
    </h2>
  </div>
  )
}

export default Section