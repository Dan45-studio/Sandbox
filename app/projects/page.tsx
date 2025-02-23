import React from 'react'
import ImageGrid from '../components/ImageGrid';

const page = () => {

    return (
        <div className="w-full h-full bg-slate-500 flex flex-col items-center justify-center px-6">
            <section className="w-full h-1/4 flex items-center justify-center">
                <h1 className="text-9xl">Projects</h1>
            </section>

            <ImageGrid />
        </div>
    )
}

export default page