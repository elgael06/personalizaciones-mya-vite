export interface IServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: number;
}

export interface IServiceItemProp {
  services: IServiceItem[]  
}