import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default () => (
  <div>
    <Header title="Contact" />
    <div
      className="body-container"
      style={{ textAlign: "left", padding: "10px" }}
    >
      <a href="mailto:b.annejarboe@gmail.com">
        <img
          height="30px"
          src="/static/svg/envelope.svg"
          style={{ padding: "10px" }}
        />
        b.annejarboe@gmail.com
      </a>
      <br />
      <a href="https://www.instagram.com/brittandthecello/" target="_blank">
        <img
          style={{ padding: "10px" }}
          height="30px"
          src="/static/svg/insta.svg"
        />
        instagram
      </a>
      <img src="/static/img/brittany.jpg" className="about-img" />
    </div>
  </div>
);
