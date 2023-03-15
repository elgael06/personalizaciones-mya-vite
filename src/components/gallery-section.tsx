import { galleryList } from "../data/galeria"
import GalleryItem from "./gallery-item"

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="col-lg-6 text-center">
        <h2></h2>
      </div>
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          {galleryList.map((e, idx) => <GalleryItem key={idx} image={e.image} name={e.name} />)}
        </div>
      </div>
    </section>
  )
}

export default GallerySection