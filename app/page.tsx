'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        setShowPlayButton(true);
      });
    }
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setShowPlayButton(false);
    }
  };

  return (
    <main className="landing">
      <video
        ref={videoRef}
        className="landing__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/poster-image.jpg"
      >
        <source src="/spætial-hero.mp4" type="video/mp4" />
      </video>

      {showPlayButton && (
        <button className="play-button" onClick={handlePlay}>
          ▶ Play Video
        </button>
      )}

      <div className="landing__overlay" />

      <div className="landing__content">
        <div className="logo logo--svg">
          <img src="/logo-spaetial.svg" alt="Spaetial logo" className="logo__img" />
        </div>
        <a className="contact-link" href="mailto:contact@spaetial.com">Contact Us</a>
      </div>
    </main>
  );
}
