import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const Section3 = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/images/algosec3.jpg')] bg-no-repeat bg-center bg-cover overflow-hidden">      
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 container mx-auto px-4 py-16 h-full flex flex-col justify-center items-center text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl tablet:text-5xl font-bold mb-4">Our Mission & Vision</h2>
          <Separator className='mx-auto w-[200px] h-1 tablet:h-1.5 bg-gradient-to-r from-violet-100 to-pink-200 rounded-full' />
        </div>

        <div className="grid tablet:grid-cols-2 gap-8 w-full max-w-6xl">
          <div className="group transition-transform duration-300 hover:-translate-y-1 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary text-pink-200">Our Mission</h3>
            <p className="text-base leading-7 text-justify">
                The fellowship was established for the members to worship God together in spirit and truth (John 4:23)
                <li className='list-inside '>To promote unity and harmony among Christians in our work environment and to propagate the gospel of our Lord Jesus Christ through evangelism across the nooks and crannies of the Local Governments. To pull down the stronghold of the devil and to put the devil to shame in all areas of our lives. To assist members Spiritually, Physically, Financially and Morally.</li>
            </p>
          </div>

          <div className="group transition-transform duration-300 hover:-translate-y-1 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary text-pink-200">Our Vision</h3>
            <p className="text-base leading-7 text-justify">
                <li className='list-inside '>To protect and uplift career interest of Christian staff members and help in any areas that may be necessary.</li>
                <li className='list-inside '>To carry out evangelism in areas of Prison, Welfare Homes, Hospitals, Rural area, etc.</li>
                <li className='list-inside '>To pray for the peace and stability of the Nation, the State, the Local Government, among others.</li>
            </p>
          </div>
        </div>

        <div className="group mt-12 w-full laptop:w-[750px] h-[500px]">
          <Image
            src="/images/algocert.jpg"
            alt="Registration Certificate"
            width={1000}
            height={1000}
            className="rounded-xl shadow-2xl h-full w-full object-cover transition-transform duration-1000 group-hover:scale-95"
          />
        </div>
        <p className='text-xs text-pink-200 text-center pt-4 font-light'>Our CAC Registration Certificate - Click to view full document</p>
      </div>
    </section>
  )
}

export default Section3