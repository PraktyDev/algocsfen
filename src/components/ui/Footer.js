import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copyright } from "lucide-react";
import Image from "next/image";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    const date = new Date()

    const year = date.getFullYear()


  return (
    <div className="relative bg-gray-950 w-full h-auto flex flex-col">
      <section className="">
        <div className="grid tablet:grid-cols-3">
          <Card className="group overflow-hidden rounded-none">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
                <Image
                  src="/images/algosec3.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                    GALLERY
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-none">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
                <Image
                  src="/images/algocsfen4.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                    OUR EXCOS
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-none">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
                <Image
                  src="/images/algocsfen2.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                    EVENTS
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      <section className="container tablet:max-w-full mx-auto laptop:px-40 px-4 py-7">
        <div className="grid gap-2 tablet:grid-cols-3">
          <div className="group space-y-2 rounded-lg bg-white flex flex-col items-center justify-center p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-nowrap">HAVE QUESTIONS?</h3>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              You can get to know us better from the following frequently asked questions
            </p>
            <Button variant="outline" className="w-full">
              FAQ
            </Button>
          </div>

          <div className="group space-y-4 rounded-lg bg-white flex flex-col items-center justify-center p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold">OUR SOCIALS</h3>
            <div className="flex items-center gap-6 tablet:gap-2 laptop:gap-6">
             <FaWhatsappSquare size={30} className="hover:text-slate-800" />
             <FaFacebookSquare size={30} className="hover:text-slate-800" />
             <FaSquareInstagram  size={30} className="hover:text-slate-800"/>
             <FaSquareXTwitter size={30} className="hover:text-slate-800" />
            </div>
          </div>

          <div className="group rounded-lg bg-white flex flex-col items-center justify-center p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold">REACH OUT</h3>
            <p className="text-sm text-center text-muted-foreground">
              If you need to reach out to us, contact algocsfen@organization.com
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-2 items-center text-slate-500 pb-4 cursor-default">
        <Copyright size={15} />
        <p className="text-xs uppercase">Algocsfen {year}</p>
    </div>
    </div>
  )
}

