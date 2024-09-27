import React from "react";
import { NavLink } from "react-router-dom"; 


const WhoAreWe = () => {
  return (
    <>
      <div className="font-forum container mx-auto px-8 md:px-48 py-4 mt-12">
        {" "}
        {/* Increased horizontal padding */}
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-7">
          Who Are <span className="text-blue-600">We?</span>
        </h2>
        <p className="text-left text-lg mt-10">
          At EcoCycle Innovations, we are committed to transforming waste into
          resources. Established in 2000 in Johannesburg, we specialize in
          innovative recycling solutions aimed at reducing environmental impact
          and promoting sustainability. Our dedicated team works with both
          individuals and businesses to repurpose materials like plastics,
          metals, and paper, turning waste into valuable resources. By combining
          cutting-edge technology with eco-conscious practices, we strive to
          create a greener future for South Africa and beyond, ensuring a
          cleaner environment for generations to come.
        </p>
        <div className="mt-10"> 
          <NavLink 
            to="/OurServices" 
            className="bg-blue-500 text-white py-4 px-8  hover:bg-green-500 hover:scale-110 transition-transform duration-200"
          >
            Our Services
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
