import { lazy, Suspense } from "react";
import useGallery from "../hooks/gallery.hooks"
const GalleryItem = lazy(() => import("./gallery-item"));

const GallerySection = () => {
  const { data } = useGallery();
  return (
    <section id="gallery" className="gallery">
      <div className="col-lg-6 text-center">
        <h2></h2>
      </div>
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          <Suspense fallback={<div>Cargando...</div>}>
            {data.map((e, idx) => <GalleryItem key={idx} image={e.image} name={e.name} />)}
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default GallerySection