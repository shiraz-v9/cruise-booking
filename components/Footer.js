import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h3 className="grey">Contact Us</h3>
        <p>
          <a href="mailto:shiraz.xt@gmail.com">Send email</a>
        </p>
      </div>
      <div>
        <h3 className="grey">Socials</h3>{" "}
        <p>
          TikTok <br /> Instagram
          <br /> Twitter <br />
          Facebook <br />
          LinkedIn
        </p>
      </div>
      <div>
        <h3 className="grey">Info</h3>
        <a href="">Privacy</a>
        <br />
        <a href="">Booking terms</a>
        <br />
        <a href="">Cookies</a>
        <br />
      </div>
      <div>
        <h3 className="grey">Partners</h3>
        <img
          src="https://www.mykindofcruise.com/icons/capita_white.png"
          alt="1"
          width="100"
          className="me-3"
        />
        <img
          src="https://www.mykindofcruise.com/icons/worldpay_white.png"
          alt="2"
          width="100"
          className="me-3"
        />
        <img
          src="https://www.mykindofcruise.com/icons/tta_white.png"
          alt="3"
          width="100"
          className="me-3"
        />
        <img
          src="https://www.mykindofcruise.com/icons/tta_money_white.png"
          alt="4"
          width="100"
          className="me-3"
        />
      </div>
    </div>
  );
}

export default Footer;
