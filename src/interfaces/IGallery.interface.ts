export default interface IGallery {
  image: string;
  name: string;
}

export interface IGalleryData {
  total: number,
  data: IGallery[],
}
