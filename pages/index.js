import React from "react";
import Head from "next/head";
import Home from "../Home";

export default () =>
  <div>
    <Head>
      <title>Brittany Jennings</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="stylesheet" href="static/css/html5.css" />
      <link rel="stylesheet" href="static/css/main.css" />
    </Head>
    <div className="body-container">
      <Home />
    </div>
  </div>;
