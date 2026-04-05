'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const playVideo = async () => {
      try {
        await video.play();
        setVideoFailed(false);
      } catch {
        setVideoFailed(true);
      }
    };

    // Try autoplay immediately.
    playVideo();

    // On mobile, retry on the first user interaction.
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <main className="landing">
      <video
        ref={videoRef}
        className={`landing__video ${videoFailed ? 'landing__video--hidden' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/spaetial-hero-fallback.jpg"
        controls={false}
      >
        <source src="/spætial-hero.mp4" type="video/mp4" />
      </video>

      {videoFailed && (
        <div className="landing__fallback" aria-hidden="true">
          <img src="/spaetial-hero-fallback.jpg" alt="Spaetial background" />
        </div>
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
