'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const images = [
  "https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment1.jpg",
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h5u2oswh04yxn6yg9uxp.jpg",
  "https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment2.jpg",
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4amxqv4k1n7kvcldpdd.jpg",
]
export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      duration: 60,
      dragFree: true
    }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide relative flex-[0_0_100%] min-w-0 h-full"
              style={{ flex: '0 0 100%' }}
            >
              <div className="absolute inset-0 md:inset-x-0">
                <Image
                  src={src}
                  alt={`Property ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 