import ContactSection from './components/contact-section'
import GallerySection from './components/gallery-section'
import SeccionHero from './components/hero-section'
import ServiceSection from './components/services-section'
import './configs/firebase'

function App() {
  return (
    <>
      <SeccionHero />
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <GallerySection />
        <ServiceSection />
        <ContactSection />
       </main>
      </>
  )
}

export default App
