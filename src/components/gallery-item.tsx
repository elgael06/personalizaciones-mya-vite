import IGallery from "../interfaces/IGallery.interface"

const GalleryItem = ({ image, name='' }: IGallery) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6" title={name}>
      <div className="gallery-item h-100">
        <img src={image} className="img-fluid" alt="" width="" height=""/>
      </div>      
    </div>
  )
}

export default GalleryItem