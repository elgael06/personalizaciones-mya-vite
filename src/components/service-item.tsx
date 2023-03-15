import { IServiceItemProp } from "../interfaces/IServiceItem.interface"

const ServiceItem = ({ services }: IServiceItemProp) => {
  return (
    <section className="services">
      <div className="container">
        <div className="row gy-4">
          {/* items */}
          {
            services.map(({id, name, description, icon}) => (<div key={id} className="col-xl-3 col-md-6 d-flex">
            <div className="service-item position-relative">
              <i className={`${icon}`}></i>
              <h4 title={name}>{name}</h4>
                <p>{description}</p>
            </div>
          </div>))
          }
        </div>
      </div>
    </section>)
}

export default ServiceItem