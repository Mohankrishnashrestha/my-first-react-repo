import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

function Header() {
  return (
    <>
      <div>
        <div className="top_heading">
          <div className="img1">
            <img src="/images/logo.svg" alt="imae" className="image_of_logo" />
          </div>
          <div className="top_contact">
            <ul>
              <li>
                <a href="011-499081, 011-499046">
                  <FaPhoneAlt />
                  011-499081, 011-499046
                </a>
              </li>
              <li>
                <CgMail />
                <a href="arthikbikash061@gmail.com">
                  arthikbikash061@gmail.com
                </a>
              </li>
              <li>
                <CiLocationOn />
                Panchkhal-4, Kavrepalanchok
              </li>
              <li>
                <SlCalender />
                3rd January 2025
              </li>
            </ul>
          </div>
          <div className="img2">
            <img src="/images/min-logo.svg" alt="wrong" />
          </div>
        </div>
        <nav className="navigation">
          <a>Home</a>
          <a>About</a>
          <a>Our Team</a>
          <a>Services</a> 
          {/* <select>
          <option value=""></option>
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>

            </select> */}
          <a>News & Events</a>
          <a>Notice</a>
          <a>Gallery</a>
          <a>Download</a>
          <a>Contact Us</a>
          <a>Interest Rate</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
