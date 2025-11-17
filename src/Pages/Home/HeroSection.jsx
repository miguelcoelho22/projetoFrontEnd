export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Oi, sou o Miguel</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">backend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Desenvolvedor backend especializado em Java e Spring Boot, com foco em aplicações web modernas e eficientes
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="/img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
