import React from 'react';

const Maps = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-xl font-semibold">Location: 25 Downtown</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3797.5002441702504!2d72.819386!3d18.978396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf000d02a0d1%3A0xf05aa4bfce080823!2s25%20Downtown!5e1!3m2!1sen!2sin!4v1729495765457!5m2!1sen!2sin"
        width="800"
        height="500"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        title="Location Map"
      ></iframe>
    </div>
  );
};

export default Maps;
