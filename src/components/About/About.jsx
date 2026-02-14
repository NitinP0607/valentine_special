import React from "react";
import "./About.css";
import assets from "../../assets/assets";

const About = () => {
  const images = [
    assets.prakki_cartoon,
    assets.prakkimirror4,
    assets.prakki_mirror_close,
    assets.we_unique,
    assets.prakki_cartoon_different_pose,
    assets.prakki_tajmahal,
    assets.prakki_tajmahal_backlook,
    assets.prakki_paper,
    assets.prakki_mathura,
    assets.prakki_me_interview,
  ];
  return (
    <div id="about-section" className="about">
      <div className="about-header">
        <h2>About us</h2>
      </div>
      <div className="slider">
        <div className="slide-track">
          {images.concat(images).map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>
      <div className="about-bios">
        <h2>Our Journey is our Success and we are the target of each other</h2>
        <div className="about-bio">
        <div className="about-bio-left">
          <h3>Our Story</h3>
          <p>
            Our story isn’t just about moments we’ve spent together, it’s about
            the way you changed my world without even trying. From the first
            conversation to every laugh, every small fight, and every memory we
            created, you’ve become my favorite chapter of life. This website is
            just a small gift to remind you how deeply you are loved, today and
            always. Happy Valentine’s Day, my forever <br />
            You are not just part of my life, you are my life. Every smile of
            yours is my happiness, and every memory with you is my treasure.
            This website is my small way of saying — I love you more than words
            can ever express. <br />
            We didn’t just meet, we found each other. In a world full of people,
            you became my peace, my happiness, and my home. Every memory with
            you feels special, and every future dream includes you. This little
            space is my way of celebrating us — our love, our journey, and the
            beautiful life we are building together.
          </p>
        </div>
        <div className="about-bio-right">
          <img src={assets.prakki_about_story} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
