import React from "react";


const Bullets = () => {
  const materials = [
    "Plastic",
    "Paper",
    "Glass",
    "Metal",
    "Organic Waste",
    "Electronics",
  ];
  return (
    <>
      <div className="font-forum flex flex-col mt-9 md:flex-row md:flex-wrap px-8 md:px-56">
        {materials.map((material, index) => (
          <div key={index} className="mb-6 flex items-center w-full md:w-1/2 p-2">
            <div className="w-8 h-8 bg-blue-500 mr-2"></div>
            <span className="text-2xl">{material}</span>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Bullets;
