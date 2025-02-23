import React from 'react'

const Images = [
    { src: "/AX1Z0313.jpeg", title: "Image 1" },
    { src: "/AX1Z8493.jpeg", title: "Image 2" },
    { src: "/AX1Z0313.jpeg", title: "Image 3" },
    { src: "/AX1Z8493.jpeg", title: "Image 4" },
    { src: "/AX1Z8493.jpeg", title: "Image 5" },
    { src: "/AX1Z0313.jpeg", title: "Image 6" },
    { src: "/AX1Z0313.jpeg", title: "Image 7" },
];

const ImageGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 xl:columns-5 2xl:columns-6">
        {Images.map((src, index)=>(
            <div key={index} className="mb-4 break-inside-avoid">
                <img src={src.src} alt={src.title} className="w-full object-cover rounded-lg" />
                <h1>{src.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default ImageGrid