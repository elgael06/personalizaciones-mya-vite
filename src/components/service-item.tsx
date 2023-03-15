import { IServiceItemProp } from "../interfaces/IServiceItem.interface"

const ServiceItem = ({ services }: IServiceItemProp) => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row gy-4">
          {/* items */}
          {
            services.map(({id, name, description, icon}) => (<div key={id} className="col-xl-3 col-md-6 d-flex">
            <div className="service-item position-relative">
              <i className={`${icon}`}></i>
              <h4><a href="" className="stretched-link">{name}</a></h4>
                <p>{description}</p>
            </div>
          </div>))
          }
        </div>
      </div>
    </section>)
}

export default ServiceItem