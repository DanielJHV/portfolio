function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero__text">
          <h1 className="heading-primary">Software Developer</h1>
          <p className="hero__description">
            I'm a Full Stack developer who enjoys working on both the client and
            server-side parts of an application. Passionate about building
            high-quality web applications that are both efficient and
            user-friendly, I'm constantly looking to expand my skills in this
            field.
          </p>
          <div className="hero__btns">
            <a href="#projects" className="more-btn">
              Read more
            </a>
            <a href="mailto: danielveres72@gmail.com" className="contact-btn">
              Contact me
            </a>
          </div>
        </div>
        <a href="#projects">
          <img
            className="arrow-bottom"
            src="src/assets/arrow-bottom.svg"
            alt="Arrow bottom"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
