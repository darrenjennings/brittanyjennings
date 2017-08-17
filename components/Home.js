import React from "react";
import Link from "next/link";

const Home = () =>
  <div className="outerblock">
    <div className="innerblock">
      <div className="mainlogo">
        <img className="imgLogo" src="/static/img/celloshot.jpg" />
      </div>
      <hr />
      <p>
        Brittany is a classically trained cellist, enthusiastic about sharing
        the violoncello through giving lessons and collaborating with other
        musicians for weddings and recordings. Her imaginative improvisation is
        a wonderful, versatile addition to any musical group or occassion.
      </p>
      <blockquote>
        <li>
          Attended Western Kentucky University with the Blanche & Austin Duckett
          Strings Music Scholarship and the Jerry Baker Scholarship. Received
          degrees in both music and visual arts.
        </li>
        <li>
          Experienced in giving lessons to various ages ranging from beginner to
          intermediate.
        </li>
        <li>
          Recorded and performed with several bands/artists including:{" "}
          <a
            target="_blank"
            href="https://brooksritter.bandcamp.com/track/prodigal-feet"
          >
            Brooks Ritter
          </a>,{" "}
          <a
            target="_blank"
            href="https://soundcloud.com/harlowsmonkeyssf/everyone-should-ride-bikes"
          >
            Harlow's Monkeys
          </a>, and {" "}
          <a
            target="_blank"
            href="https://theparadeschedule.bandcamp.com/track/wyoming"
          >
            Matt Kinder of the Parade Schedule
          </a>.
        </li>
      </blockquote>
      Cello Philosophy - You do not "arrive" one day playing your cello
      perfectly and knowing all of its nuances. Being a musician and a cellist
      is a journey of imaginatively exploring a complex and beautiful
      instrument. The cello is an instrument that gives joy to the musicians and
      listeners alike.
      <hr />
      <i>
        <div style={{ textAlign: "right" }}>
          "The spirit of the music is the only thing which<br /> can rightfully
          dictate physical action on the cello."
          <br /> William Pleeth, Cellist and Teacher
        </div>
      </i>
    </div>
    <hr />
    <audio controls autoPlay style={{ width: "100%" }}>
      <source
        src="https://s3-us-west-2.amazonaws.com/brittany-jennings/brittany321.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
    <span style={{ fontStyle: "italic" }}>
      Brittany's recording of J.S. Bach - Cello Suite no. 1 in G major: II.
      Allemande
    </span>
    <div style={{ textAlign: "center", margin: "0 auto", padding: "20px" }}>
      <Link style={{ padding: "20px" }} href="/contact">
        <a>
          <img height="30px" src="/static/svg/contact.svg" /> Contact Me!
        </a>
      </Link>
    </div>
  </div>;

export default Home;
