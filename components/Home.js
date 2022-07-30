import React from "react";
import Adventures from "./Adventures";
import Blogs from "./Blogs";
import Popular from "./Popular";
import Recommendations from "./Recommendations";

function Homepage() {
  return (
    <div className="main-container mb-3">
      <div className="search my-3">
        <input type="text" placeholder="Search.." className="ms-2" />
      </div>

      <h3 className="mt-3">Adventures</h3>
      <Adventures />
      <h3>Recently Viewed</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-slash-circle my-3"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
      </svg>
      <h3>Recommendations</h3>
      <Recommendations />
      <h3>Blogs</h3>
      <Blogs />
      <h3>Popular Ports</h3>
      <Popular />
    </div>
  );
}

export default Homepage;
