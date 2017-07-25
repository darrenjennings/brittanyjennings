import React from "react";

const Home = () =>
  <div className="outerblock">
    <p>
      <img src="static/img/pinetrees.png" />
      <i>Brittany Anne Jarboe Jennings</i>
      <img src="static/img/pinetrees2.png" />
    </p>
    <hr />
    <div className="mainlogo">
      <img className="imgLogo" src="static/img/celloshot.jpg" />
    </div>
    <br />
    <hr />
    <div className="innerblock">
      <p>
        Brittany is a classically trained cellist, enthusiastic about sharing
        the violoncello through giving <a href="lessons.html">lessons</a> and
        collaborating with other musicians for weddings and rock concerts. Her
        imaginative improvisation is a wonderful, versatile addition to any
        musical group or occassion.
      </p>
      <blockquote>
        <li>
          Attended Western Kentucky University with the Blanche & Austin Duckett
          Strings Music Scholarship and the Jerry Baker Scholarship. Received
          degrees in both music and{" "}
          <a href="http://bajennings.tumblr.com">visual arts</a>.
        </li>
        <li>
          Experienced in giving lessons to various ages ranging from beginner to
          intermediate.
        </li>
        <li>
          Recorded and performed with several bands/artists including:{" "}
          <a href="http://brooksrittermusic.com/">Brooks Ritter</a>,{" "}
          <a href="http://theparadeschedule.bandcamp.com/">
            Matt Kinder of the Parade Schedule
          </a>, and Foxhole.
        </li>
      </blockquote>
      Cello Philosophy - You do not "arrive" one day playing your cello
      perfectly and knowing all of its nuances. Being a musician and a cellist
      is a journey of imaginatively exploring a complex and beautiful
      instrument. The cello is an instrument that gives joy to the musicians and
      listeners alike.
      <br />
      <hr />
      <i>
        <div style={{ textAlign: "right" }}>
          "The spirit of the music is the only thing which<br /> can rightfully
          dictate physical action on the cello."<br /> William Pleeth, Cellist
          and Teacher
        </div>
      </i>
    </div>
    <audio controls autoPlay style={{ width: "100%" }}>
      <source src="static/Media/Brittany1small.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>;

export default Home;
