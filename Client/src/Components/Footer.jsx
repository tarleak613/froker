import React from 'react';
import qrCode from '../assets/qr.png';
import copyWriteFooter from '../assets/copy-write-footer.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white-800 text-black py-8 pb-0">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo Column */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg"
            alt="Company Logo"
            className="mx-[25%] w-32 h-auto"
          />
        </div>

        {/* Quick Links Column */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h4 className="text-2xl text-[#f76f32] font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: "/", text: "Home" },
              { href: "/about-us", text: "About Us" },
              { href: "/privacy-policy", text: "Privacy Policy" },
              { href: "/terms-and-conditions", text: "Terms & Conditions" }
            ].map((link, index) => (
              <li key={index} className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg"
                  alt="Arrow"
                  className="w-4 h-4 mr-2"
                />
                <a href={link.href} className="hover:text-gray-400">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h4 className="text-2xl text-[#f76f32] font-semibold mb-4">Contacts</h4>
          <div className="mb-4">
            <a
              href="https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mb-2"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 mr-2 text-orange-500" />
              <span>Whitefield, Bengaluru, 560066</span>
            </a>
            <a href="mailto:Support@Froker.In" className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2 text-orange-500" />
              <span>support@froker.in</span>
            </a>
          </div>
          <div className="flex space-x-4">
            {[
              { href: "https://twitter.com/FrokerSocial", icon: faTwitter },
              { href: "https://www.linkedin.com/company/froker/", icon: faLinkedin },
              { href: "https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu", icon: faFacebook },
              { href: "https://www.instagram.com/frokerofficial/", icon: faInstagram },
              { href: "https://www.youtube.com/@frokerofficial", icon: faYoutube }
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noreferrer" className="text-orange-500 hover:text-gray-400">
                <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* QR Code Column */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h4 className="text-2xl text-[#f76f32] font-semibold mb-4">Scan To Download</h4>
          <img
            src={qrCode}
            alt="QR Code"
            className="w-32 h-auto"
          />
        </div>
      </div>

      <div className="mt-4">
        <img src={copyWriteFooter} alt="copywrite" />
      </div>
    </footer>
  );
};

export default Footer;
