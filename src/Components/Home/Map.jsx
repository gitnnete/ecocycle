import React from "react";
// Add Font Awesome CDN link in your HTML file

const Map = () => {
  const materials = [
    { text: "082 671 1554", icon: "fas fa-phone" },
    { text: "ecocycle_cycle", icon: "fab fa-instagram" },
    { text: "ecocycle@info.com", icon: "fas fa-envelope" }
  ];
  return (
    <>
      <div className="font-forum flex flex-col mt-16 mb-20 md:flex-row md:flex-wrap md:justify-between px-8 md:px-56">
        {materials.map((material, index) => (
          <div
            key={index}
            className="mb-6 flex items-center w-full md:w-1/3 p-2"
          >
            <div className="w-6 h-12 bg-blue-500 mr-2"></div>
            <i className={`${material.icon} text-green-500 mr-2`}></i> {/* Added icon */}
            <span className="text-lg font-bold">{material.text}</span>
          </div>
        ))}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzfCsDQyJzQwLjAiUyAxNDRyJzQwLjAiRQ!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mt-10"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
