import { useState, useEffect } from "react"
import { galleryList } from "../data/galeria";
import IGallery, { IGalleryData } from "../interfaces/IGallery.interface";

const useGallery = () => {
  const [gallery, setGallery] = useState<IGallery[]>([]);

  useEffect(() => {
    setGallery(galleryList);
    return () => setGallery([]);
  }, []);

  return {
    total: gallery.length,
    data: gallery.map(e => ({
      ...e,
    })),
  }
}

export default useGallery;
