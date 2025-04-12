import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 justify-center gap-8 px-10">
    
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            Our project focuses on deep learning techniques for image dehazing,
            utilizing AOD-Net to enhance visibility in hazy images through
            advanced neural network architectures.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us on Github</h3>
          <ul>
            {/* <h1>GitHub</h1> */}
            <li>
              <a href="https://github.com/Muhiu-DDin" className="hover:underline">
                Muhiu DDin
              </a>
            </li>
            

            <li>
              <a href="https://github.com/frager098" className="hover:underline">
              M.Arham Khalid
              </a>
            </li>

            <li>
              <a href="https://github.com/moizishere-droid" className="hover:underline">
                Abdul Moiz
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Campus</h3>
          <p>University Of Karachi</p>
          <p>(UBIT)</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        &copy; 2025 AOD-Net Research. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
