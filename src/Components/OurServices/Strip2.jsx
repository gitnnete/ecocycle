import React from "react";
import recycleBuckets from "../../assets/recycleBuckets.jpg";

const Strip2 = () => {
  const materials = [
    { text: "082 671 1554", icon: "fas fa-phone" },
    { text: "ecocycle_cycle", icon: "fab fa-instagram" },
    { text: "ecocycle@info.com", icon: "fas fa-envelope" },
  ];

  return (
    <>
      <div className="font-forum container mx-auto px-8 md:px-48 py-4 mt-6">
        <img
          src={recycleBuckets}
          alt="Recycle Bottles"
          className="w-full h-auto rounded-lg md:w-3/4 mx-auto" // {{ edit_1 }} Added mx-auto for centering
        />
      </div>

      <div className="font-forum flex flex-col mt-12 mb-10 md:flex-row md:flex-wrap md:justify-between px-8 md:px-56">
        {materials.map((material, index) => (
          <div
            key={index}
            className="mb-6 flex items-center w-full md:w-1/3 p-2"
          >
            <div className="w-6 h-12 bg-blue-500 mr-2"></div>
            <i className={`${material.icon} text-green-500 mr-2`}></i>{" "}
            {/* Added icon */}
            <span className="text-lg font-bold">{material.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Strip2;
