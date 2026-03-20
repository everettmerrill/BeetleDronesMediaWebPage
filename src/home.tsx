import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function Home() {
  const [active, setActive] = useState(0);
  const touchStartY = useRef(null);

  // Wheel event for desktop
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && active < 2) setActive((prev) => prev + 1);
      if (e.deltaY < 0 && active > 0) setActive((prev) => prev - 1);
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [active]);

  // Touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY.current - touchEndY > 50 && active < 2) setActive((prev) => prev + 1); // swipe up
      if (touchEndY - touchStartY.current > 50 && active > 0) setActive((prev) => prev - 1); // swipe down
      touchStartY.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active]);


  return (
    <>

    
      <div className="homeMain">
        <section className={`section${active === 0 ? " active" : ""}`}>
          <h1>Intro</h1>
          </section>
        <section className={`section${active === 1 ? " active" : ""}`}>
          <h1>Portfolio</h1>
          </section>
        <section className={`section${active === 2 ? " active" : ""}`}>
          <h1>Contact</h1>
          </section>
  </div>


      <footer className="homeCard">
        <p>
          © 2026 Beetle Drones Media. <br />
          All rights reserved. <br />
          Privacy Policy | Contact
        </p>
      </footer>
    

    </>
  );
}

export default Home;