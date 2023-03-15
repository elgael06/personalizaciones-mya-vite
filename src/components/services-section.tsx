import ServiceItem from "./service-item"
import ServiceHeader from "./service-header"
import { IServiceItem } from "../interfaces/IServiceItem.interface";
import ServicePrice from "./service-prices";

const ServiceSection = () => {
  const listItem: IServiceItem[] = [
    {id: 'playeras', name: 'playeras', description: 'Diseños personalizados sobre playeras blancas o de color', icon: 'bi bi-person-fill', price:120},
    {id: 'tazas', name: 'tazas normal', description: 'Tazas blancas con la imagen de tu preferencia', icon:'bi bi-cup-hot', price:80},
    {id: 'tazas', name: 'tazas magica', description: 'Tazas magicas que muestra la imagen con el calor', icon:'bi bi-cup-hot', price:120},
    {id: 'plumas', name: 'plumas', description: "Plumas personalizadas para tu negocio.", icon: 'bi bi-pen', price: 10},
    {id: 'llaveros', name: 'llaveros', description:"llaveros personalizadas para tu negocio o fiesta.", icon: 'bi bi-file-easel', price:40},
    {id: 'rompecavezas', name: 'rompecavezas', description: 'lindos y variados rompecavezas.', icon:  'bi bi-file-image', price:50},
    {id: 'tarjetas', name: 'tarjetas', description: 'tarjetas personalizadas de precentacion o servicio.', icon: 'bi bi-card-heading', price:100},
    {id: 'dulceros', name: 'dulceros', description: 'Lindos dulceros personalizados para tu fiesta.', icon: 'bi bi-bag-heart', price:40},
    {id: 'collar_mascota', name: 'collar mascota', description: 'Lindos collares personalizados para tu mascota.', icon: 'bi bi-tencent-qq', price:70},
  ]; 
  return (<>
    <ServiceHeader />
    <ServiceItem services={listItem} />
    <ServicePrice services={listItem} />
  </>)
}

export default ServiceSection
