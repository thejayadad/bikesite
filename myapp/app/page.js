import GallerySection from '@/components/GallerySection'
import HeroSection from '@/components/HeroSection'
import NewsLetter from '@/components/NewsLetter'
import ProductSection from '@/components/ProductSection'
import TestimonialSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <ProductSection />
      <TestimonialSection />
      <NewsLetter />
    </main>
  )
}
