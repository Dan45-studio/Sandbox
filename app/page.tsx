import React from 'react'
import TextPressure from './components/TextAnimations/TextPressure/TextPressure';

const page = () => {
  return (
    <div className="bg-black text-white">
      <div style={{ position: "relative", height: "500px" }}>
        <TextPressure
          text="We Create"
          flex={true}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#514AFF"
          minFontSize={36}
        />
        <div>
          <div className="text-center text-4xl font-bold mt-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page