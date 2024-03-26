"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140180.68583516848!2d77.35273446988895!3d28.612324813167844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52c5d15e4dd%3A0xa2f73d6865b8e2d8!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sbd!4v1692186485963!5m2!1sen!2sbd"></iframe>

        </div>
      </div>
    </>
  );
};

export default GoogleMap;
