'use client'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useRef } from "react"

const Scroll = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )

    const scriptures =[
        { text: `"Whom we preach, warning every man, and teaching every man in all wisdom; that we may present every man perfect in Christ Jesus" - KJV` },
        { text: `"He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ" - NIV` },
        { text: `"So we tell others about Christ, warning everyone and teaching everyone with all the wisdom God has given us. We want to present them to God, perfect in their relationship to Christ" - NLT` },
        { text: `"We proclaim Him, warning and instructing everyone in all wisdom [that is, with comprehensive insight into the word and purposes of God], so that we may present every person complete in Christ [mature, fully trained, and perfect in Him—the Anointed]" - AMP` },
        { text: `"Christ is our message! We preach to awaken hearts and bring every person into the full understanding of truth. It has become my inspiration and passion in ministry to labor with a tireless intensity, with his power flowing through me, to present to every believer the revelation of being his perfect one in Jesus Christ" - TPT` },
    ] 

  return (
        <Carousel
          plugins={[plugin.current]}
          className="w-full px-5 laptop:px-0 laptop:max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {scriptures.map((scripture, index) => (
              <CarouselItem key={index}>
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="">
                    <p className='text-white text-center text-lg tablet:text-xl laptop:text-2xl font-normal'>{scripture.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
  )
}

export default Scroll