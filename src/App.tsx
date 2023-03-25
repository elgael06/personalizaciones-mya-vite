import { lazy, Suspense } from 'react';
import './configs/firebase'

const ContactSection = lazy(()=> import('./components/contact-section'));
const GallerySection = lazy(()=> import('./components/gallery-section'));
const SeccionHero = lazy(()=> import('./components/hero-section'));
const ServiceSection = lazy(()=> import('./components/services-section'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>} >
      <SeccionHero />
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <GallerySection />
        <ServiceSection />
        <ContactSection />
       </main>
    </Suspense>
  )
}

export default App
