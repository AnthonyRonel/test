import React, { useState } from 'react'
import { X } from 'lucide-react'

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-700 hover:border-primary transition-colors"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231e293b" width="400" height="300"/%3E%3Ctext fill="%23475569" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage placeholder%3C/text%3E%3C/svg%3E'
              }}
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} className="text-white" />
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.title && (
              <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
            )}
            {selectedImage.description && (
              <p className="text-gray-400 text-center mt-2">{selectedImage.description}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
