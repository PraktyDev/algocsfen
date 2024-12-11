import Section3 from "@/components/Section3"
import Footer from "@/components/ui/Footer"
import Scroll from "@/components/ui/Scroll"
import ScrollButton from "@/components/ui/ScrollButton"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const page = () => {
  return (
    <main className="flex flex-col">
      <section className="relative w-full h-screen bg-[url('/images/algocsfenhero.jpg')] bg-no-repeat bg-center bg-cover">
        <div className='bg-black opacity-50 w-full h-screen absolute top-0'></div>
        <div className="flex flex-col w-full h-screen justify-center items-center gap-2">
          <h1 className="z-10 font-semibold bg-gradient-to-r from-violet-100 to-pink-200 bg-clip-text text-transparent uppercase text-[70px] tablet:text-[100px] laptop:text-[130px]">Algocsfen</h1>
          <Scroll />
        </div>

        <div className="absolute bottom-[12.5%] flex w-full items-center justify-center">
            <ScrollButton targetId="next" />
        </div>
      </section>
      
      <section id="next" className="bg-gray-950 w-full min-h-screen tablet:h-screen">
        <div className="flex flex-col tablet:flex-row justify-between items-center h-full m-auto container px-5 gap-10 tablet:gap-4 pt-40 tablet:pt-0">
          <div className="flex flex-col gap-12 tablet:gap-8 tablet:basis-1/2">
            <div className="flex flex-col gap-2 tablet:gap-4 items-center tablet:items-start">
              <h2 className="text-2xl tablet:text-4xl text-white">About Us</h2>
              <Separator className='w-[200px] h-1 tablet:h-2 bg-gradient-to-r from-violet-100 to-pink-200 rounded-full' />
            </div>
            <p className="text-lg text-white leading-10">
              Algocsfen is a revolutionary blockchain-based platform that combines the power of blockchain technology with advanced cryptographic algorithms to create a decentralized, secure, and transparent financial system.
            </p>
          </div>

          <div className="group w-full tablet:basis-1/2">
            <Image className="h-[300px] tablet:h-[500px] w-full transition-transform duration-700 group-hover:scale-95 object-cover rounded-lg shadow-md shadow-pink-700 hover:shadow-pink-500" src={'/images/algocsfen2.jpg'} alt='about' width={1000} height={1000}/>
          </div>
        </div>
      </section>

      <Section3 />

      <Footer />

    </main>
    
  )
}

export default page