import { useState } from "react";
import WebmLandingPageVideo from "./assets/heroSplashVideo.webm";
import heroPoster from "./assets/heroSplashPoster.webp";
import BeetleDronesBannerLogo from "./assets/BeetleDronesBannerLogo1.png";
import "./App.css";

function Hero() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      <main>
        <nav>
          <a href="/welcome-to-the-show" className="skipButton">
            Skip
          </a>
        </nav>
        <video
          className="backgroundImage"
          autoPlay
          muted
          loop
          poster={heroPoster}
        >
          <source src={WebmLandingPageVideo} type="video/webm" />
        </video>
        <a href="/welcome-to-the-show">
          <img
            src={BeetleDronesBannerLogo}
            className={`bannerLogo${logoHovered ? " logoNoAnim" : ""}`}
            alt=" Beetle Drones Media Banner Logo for Landing Page"
            onMouseEnter={() => setLogoHovered(true)}
          />
        </a>
      </main>

      <footer className="card">
        <p>
          © 2026 Beetle Drones Media. <br />
          All rights reserved. <br />
          Privacy Policy | Contact
        </p>
      </footer>
    </>
  );
}

export default Hero;