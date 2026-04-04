export default function Home() {
  return (
    <main className="landing">
      <video className="landing__video" autoPlay muted loop playsInline>
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
