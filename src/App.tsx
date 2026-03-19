import { useState } from "react";
import WebmLandingPageVideo from "./assets/heroSplashVideo.webm";
import heroPoster from "./assets/heroSplashPoster.webp";
import BeetleDronesBannerLogo from "./assets/BeetleDronesBannerLogo1.png";
import "./App.css";

function App() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      <div>
        <video className="backgroundImage" autoPlay muted loop poster={heroPoster} >
          <source src={WebmLandingPageVideo} type="video/webm" />
        </video>
        <a href="/welcome-to-the-show">
          <img
            src={BeetleDronesBannerLogo}
            className={`bannerLogo${logoHovered ? " logoNoAnim" : ""}`}
            alt=" Beetle Drones Media Banner Logo for Landing Page"
            onMouseEnter={() => setLogoHovered(true)}
            onTouchStart={() => setLogoHovered(true)}
          />
        </a>
      </div>

      <div className="card">
        <p>
          © 2026 Beetle Drones Media. <br />
          All rights reserved. <br />
          Privacy Policy | Contact
        </p>
      </div>
    </>
  );
}

export default App;
