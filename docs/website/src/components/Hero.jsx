import React from 'react'

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  children,
  height = 'h-96'
}) => {
  return (
    <div className={`relative ${height} overflow-hidden rounded-lg mb-8`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40"></div>
        </div>
      )}
      
      {/* Fallback gradient if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      )}
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        {title && (
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl text-gray-200 max-w-3xl drop-shadow-md">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
