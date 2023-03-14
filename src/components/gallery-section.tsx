import GalleryItem from "./gallery-item"

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          {[
            "assets/img/gallery/gallery-1.jpg",
            "assets/img/gallery/gallery-2.jpg",
            "assets/img/gallery/gallery-3.jpg",
            "assets/img/gallery/gallery-4.jpg",
            "assets/img/gallery/gallery-5.jpg",
            "assets/img/gallery/gallery-6.jpg",
            "assets/img/gallery/gallery-7.jpg",
          ].map((e, idx) => <GalleryItem key={idx} imageSource={e} />)}
        </div>
      </div>
    </section>
  )
}

export default GallerySection