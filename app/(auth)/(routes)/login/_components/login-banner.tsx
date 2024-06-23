import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import React from 'react'
import Fade from 'embla-carousel-fade'
type Props = {}

export default function LoginBanner({}: Props) {
  let images = [
    {
      url: require('@/images/login-banner/login-banner-1.jpg'),
    },
    {
      url: require('@/images/login-banner/login-banner-2.jpg'),
    },
    {
      url: require('@/images/login-banner/login-banner-3.jpg'),
    },
  ]

  return (
    <Carousel
      opts={{
        loop: true,
        containScroll: false,
        duration: 150,
      }}
      plugins={[Autoplay(), Fade()]}
      className="h-full [&>div]:h-full"
    >
      <CarouselContent className="h-full">
        {images.map((img, index) => (
          <CarouselItem className="relative w-full h-full" key={index}>
            <Image src={img.url} fill alt="banner" className="bg-center object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
