import { Suspense, lazy } from 'react';
import { listServices } from "../data/services";

const ServiceItem = lazy(()=> import("./service-item"))
const ServiceHeader = lazy(()=> import("./service-header"))
const ServicePrice = lazy(()=> import("./service-prices"));

const ServiceSection = () => {

  return (<div id="services" >
    <Suspense fallback={<div>Cargando...</div>}>
      <ServiceHeader />
    </Suspense>
    <Suspense fallback={<div>Cargando...</div>}>          
      <ServiceItem services={listServices} />
    </Suspense>
    <Suspense fallback={<div>Cargando...</div>}>  
      <ServicePrice services={listServices} />
    </Suspense>
  </div>)
}

export default ServiceSection
