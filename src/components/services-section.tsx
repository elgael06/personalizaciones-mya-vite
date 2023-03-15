import ServiceItem from "./service-item"
import ServiceHeader from "./service-header"
import ServicePrice from "./service-prices";
import { listServices } from "../data/services";

const ServiceSection = () => {

  return (<div id="services" >
    <ServiceHeader />
    <ServiceItem services={listServices} />
    <ServicePrice services={listServices} />
  </div>)
}

export default ServiceSection
