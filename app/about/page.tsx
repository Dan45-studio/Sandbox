import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="w-full h-full bg-slate-500">
        <h1 className="text-black">About</h1>
      </div>
      <div className="p-4">
        <section className="mb-8">
          <Image
            src="/AX1Z0313.jpeg"
            alt="Image 1"
            width={1920}
            height={1080}
            className="w-full h-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Section 1</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Learn More
          </button>
        </section>
        <section className="mb-8">
          <Image
            src="/AX1Z0313.jpeg"
            alt="Image 2"
            width={1920}
            height={1080}
            className="w-full h-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Section 2</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Learn More
          </button>
        </section>
        <section>
          <Image
            src="/AX1Z0313.jpeg"
            alt="Image 3"
            width={1920}
            height={1080}
            className="w-full h-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Section 3</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Learn More
          </button>
        </section>
      </div>
    </div>
  );
}

export default page