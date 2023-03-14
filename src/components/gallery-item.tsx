const GalleryItem = ({ imageSource }: any) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src={imageSource} className="img-fluid" alt=""/>
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <a href={imageSource} title="Gallery 1" className="glightbox preview-link">
            <i className="bi bi-arrows-angle-expand"></i>
          </a>
        </div>
      </div>      
    </div>
  )
}

export default GalleryItem