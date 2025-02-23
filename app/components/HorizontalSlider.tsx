"use client";
// components/HorizontalSlider.tsx
import React, { useRef, useEffect, useState } from "react";

interface EventCard {
  title: string;
  description: string;
  // ... other event properties
}

const HorizontalSlider: React.FC<{
  title: string;
  events: EventCard[];
  viewAllLink: string;
}> = ({ title, events, viewAllLink }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 200; // Adjust scroll amount
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 200; // Adjust scroll amount
    }
  };

  return (
    <div className="w-full">
      {" "}
      {/* Container fills width */}
      <div className="flex justify-between items-center mb-4">
        {" "}
        {/* Title and View All */}
        <h2 className="text-2xl font-bold">{title}</h2>
        <a href={viewAllLink} className="text-blue-500 hover:underline">
          View All
        </a>
      </div>
      <div className="relative">
        {" "}
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className={`flex overflow-x-auto scroll-smooth snap-x snap-mandatory ${
            isMobile ? "" : "scrollbar-hide"
          }`} // Hide scrollbar on desktop
        >
          {events.map((event, index) => (
            <div key={index} className="snap-start shrink-0 w-64 p-4">
              {" "}
              {/* Event Card */}
              <div className="bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-medium">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        {!isMobile && ( // Arrows only on desktop
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HorizontalSlider;
