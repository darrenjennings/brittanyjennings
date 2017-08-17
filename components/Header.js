import React from "react";
import Head from "next/head";
import Link from "next/link";

export default props =>
  <div>
    <Head>
      <title>
        {props.title ? `${props.title} - ` : ""}Brittany Jennings
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/css/html5.css" />
      <link rel="stylesheet" href="/static/css/main.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <div className="body-container">
      <Link href="/" style={{ color: "#323232" }}>
        <a>
          <p>
            <img src="/static/img/pinetrees.png" />
            <i>Brittany Anne Jarboe Jennings</i>
            <img src="/static/img/pinetrees2.png" />
          </p>
        </a>
      </Link>
      <hr />
    </div>
  </div>;
