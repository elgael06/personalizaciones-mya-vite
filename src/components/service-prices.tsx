import { IServiceItemProp } from "../interfaces/IServiceItem.interface"

const ServicePrice = ({ services }: IServiceItemProp) => {
  return ( <section id="pricing" className="pricing">
    <div className="container">
      {/* header */}
      <div className="section-header">
          <h2>Precios</h2>
        <p title='el presion mostrado es sugerido y puede cambiar segun la complegidad del diseño.'>Mira nuestros geniales precios</p>
        
        </div>
      {/* content */}
      <div className="row gy-4 gx-lg-5">
        {services.map(({name, price, id}) => (
          <div className="col-lg-6" key={id} title='el presion mostrado es sugerido y puede cambiar segun la complegidad del diseño.'>
            <div className="pricing-item d-flex justify-content-between">
              <h3>{ name }</h3>
              <h4>${ price }</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>)
}

export default ServicePrice
