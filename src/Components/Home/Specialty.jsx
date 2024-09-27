import React from "react";
import recycleBottles from '../../assets/recycleBottles.jpg'

const Specialty = () => {
  return (
    <>
      <div className="font-forum container mx-auto px-8 md:px-48 py-4 mt-20">
        {" "}
        {/* Increased horizontal padding */}
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-7">
          What is Our <span className="text-blue-600">Specialty?</span>
        </h2>
        <p className="text-left text-lg">
          Founded in 2020 in Johannesburg, EcoCycle Solutions is dedicated to
          creating a sustainable future through innovative recycling practices.
        </p>
        <p className="text-left text-lg mt-10">
          We specialize in the collection, processing, and repurposing of
          various materials, reducing waste in landfills and conserving natural
          resources. Our mission is to foster a cleaner environment while
          promoting community awareness around eco-friendly practices. At
          EcoCycle Solutions, we believe in transforming waste into opportunity,
          helping businesses and households contribute to a greener, healthier
          planet.
        </p>
        <img src={recycleBottles} alt="Recycle Bottles" className="w-full h-auto rounded-lg mt-12 md:w-3/4" />
      </div>
    </>
  );
};

export default Specialty;
