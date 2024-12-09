import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-body-secondary border-top py-3">
      <div className="container d-flex justify-content-between">
        <div className="text-start">
          <p className="mb-0">Republic of the Philippines</p>
          <p className="mb-0">Office of the President</p>
          <p className="mb-0">National Commission on Indigenous Peoples</p>
        </div>
        <div className="text-end">
          <p className="mb-0">FB: NCIP CSC Buenavista</p>
          <p className="mb-0">Contact: 09058268146</p>
          <p className="mb-0">Telephone No.: (034) 456-7890</p>
          <p className="mb-0">Email: ncipbuenavistacsc@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
