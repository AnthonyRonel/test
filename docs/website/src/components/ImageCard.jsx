import React from 'react'

const ImageCard = ({ src, alt, title, description, className = '' }) => {
  return (
    <div className={`bg-dark-light border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition-colors ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
      ) : null}
      <div className="hidden items-center justify-center h-48 bg-dark-light/50">
        <p className="text-gray-500 text-sm">Image placeholder</p>
      </div>
      <div className="p-4">
        {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
    </div>
  )
}

export default ImageCard
