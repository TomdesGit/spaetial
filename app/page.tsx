'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked, video will show poster
      });
    }
  }, []);

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
