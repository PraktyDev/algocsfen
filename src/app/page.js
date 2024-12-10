import Scroll from "@/components/ui/Scroll"
import ScrollButton from "@/components/ui/ScrollButton"

const page = () => {
  return (
    <main className="flex flex-col">
      <section className="relative w-full h-screen bg-[url('/images/algoshero.jpg')] bg-no-repeat bg-center bg-cover">
        <div className='bg-black opacity-50 w-full h-screen absolute top-0'></div>
        <div className="flex flex-col w-full h-screen justify-center items-center gap-2">
          <h1 className="z-10 font-semibold bg-gradient-to-r from-violet-100 to-pink-200 bg-clip-text text-transparent uppercase text-[70px] tablet:text-[100px] laptop:text-[130px]">Algocsfen</h1>
          <Scroll />
        </div>

        <div className="absolute bottom-12 flex w-full items-center justify-center">
            <ScrollButton targetId="next" />
        </div>
      </section>
      
      <section id="next" className="bg-gray-950 w-full h-screen">
        <h1 className="text-6xl text-white flex items-center justify-center">work in progress</h1>
      </section>
    </main>
    
  )
}

export default page