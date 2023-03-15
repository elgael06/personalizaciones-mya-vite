const ContactContent = () => {
  return (
    <div className="row gy-4 justify-content-center">
      

      <div className="col-lg-3">
        <div className="info-item d-flex">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h4>Email:</h4>
            <a href="mailto:anamelitrabajos@gmail.com?subject = Solicutud de servicio Personalizaciones&body = Message">
              <p>anamelitrabajos@gmail.com</p>
            </a>
            <a href="mailto:elgael06@gmail.com?subject = Solicutud de servicio Personalizaciones&body = Message">
              <p>elgael06@gmail.com</p>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="info-item d-flex">
          <i className="bi bi-phone flex-shrink-0"></i>
          <div>
            <h4>Telefonos:</h4>
            <a href="tel:667 396 8590">
              <p>667 396 8590</p>
            </a>
            <a href="tel:667 542 0367">
              <p>667 542 0367</p>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="info-item d-flex">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h4>Localizacion:</h4>
            <p>Calle del Bosque #832, Frac. H Arboleda, Culiacan sinaloa 80019</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3659.4812268576516!2d-107.38638162228592!3d24.86172118042342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzM4LjMiTiAxMDfCsDIzJzA3LjkiVw!5e0!3m2!1ses-419!2smx!4v1678915248768!5m2!1ses-419!2smx" height="150" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        
        </div>
      </div>

  </div>
  )
}

export default ContactContent
