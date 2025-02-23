import React from 'react'

const page = () => {
  return (
    <div className="w-full h-screen bg-slate-500 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white p-4 rounded shadow flex flex-col items-center">
          <img src={`https://via.placeholder.com/150?text=Image+${index + 1}`} alt={`Image ${index + 1}`} className="w-full h-32 object-cover rounded mb-4" />
          <h2 className="text-xl font-bold mb-2 text-center">Title {index + 1}</h2>
          <div className="flex justify-between w-full">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Open</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">Share</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default page