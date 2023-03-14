const SeccionHero = () => {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center"
      data-aos="fade"
      data-aos-delay= "1500" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>Bien venido a <span>Personalizaciónes MYA</span> el lugar donde le damos forma a sus sueños</h2>
            <p>Especializados en sublimacion y diseño.</p>
            <a href="contact.html" className="btn-get-started">Contactenos aquí</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccionHero