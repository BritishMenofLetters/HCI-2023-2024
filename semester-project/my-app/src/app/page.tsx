"use client"
import Link from 'next/link'
import Image from "next/image";
import { Button } from '@/app/components/Button'
import { Inter, Libre_Baskerville, Roboto } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

const libreBaskerville = Libre_Baskerville({subsets: ['latin'], weight: "700"});
const roboto = Roboto({subsets: ['latin'], weight: "400"});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 h-screen">
      <div className='h-full w-full'>
        <div className={`${libreBaskerville.className} w-full bg-no-repeat bg-cover bg-center md:h-screen h-72`} style={{ backgroundImage: `url(/HeroBg.svg)` }}>
          <div className="absolute md:top-1/4 mt-16 md:mt-0 lg:left-40 md:left-20 sm:left-10 px-8 flex flex-col items-center md:items-start">
            <div className="2xl:text-6xl md:text-5xl text-3xl text-center md:text-left">
              Discover Your Perfect
              {"\n"}
              Space
            </div>
            <div className={`${roboto.className} md:md:top-2/4 sm:mt-8 mt-4`}>
              <Link href="/products">
                <Button variant="default" size="lg">
                  Explore Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex xl:flex-row flex-col xl:justify-around justify-center items-center p-2 pt-8 md:p-24 gap-y-8 gap-x-8 w-full bg-slate-700 text-white'>
        <div className={`${roboto.className} m-0 rounded-md md:w-full w-screen`}>
          <Image src={"/EcoFurniture.jpg"} width={1000} height={1000} alt="" className="rounded-lg shadow-lg" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center md:mx-24 mx-8'>
          <div className='2xl:text-3xl md:text-2xl text-xl font-semibold'>
            Customizable Furniture Options
            <div className='text-sm font-normal mt-2'>
              Choose from a wide range of furniture options that can be customized to suit your style and needs.
            </div>
          </div>
          <div className='2xl:text-3xl md:text-2xl text-xl font-semibold'>
            Eco-Friendly Materials
            <div className='text-sm font-normal mt-2'>
              We prioritize sustainability by using eco-friendly materials in our furniture manufacturing process.
            </div>
          </div>
          <div className='2xl:text-3xl md:text-2xl text-xl font-semibold'>
            Year-Long Warranties
            <div className='text-sm font-normal mt-2'>
              Enjoy peace of mind with our year-long warranties on all our furniture products.
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row xl:justify-around justify-center items-center p-4 md:p-24 gap-y-8 gap-x-8 w-full'>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full justify-items-center">
          <div className="flex flex-col justify-center items-center">
            <Link href="/products">
              <Image src={"/LivingRoom.jpg"} alt="Living Room" width={1000} height={1000} className="rounded-lg shadow-lg" />
            </Link>
            <div className="flex justify-center mt-4 w-full">
            <Link href="/products">
              <span className="text-lg font-semibold">Living Room</span>
              </Link>

            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
          <Link href="/products">
            <Image src={"/Bedroom.jpg"} alt="Bedroom" width={1000} height={1000} className="rounded-lg shadow-lg" />
            </Link>

            <div className="flex justify-center mt-4 w-full">
            <Link href="/products">
              <span className="text-lg font-semibold">Bedroom</span>
              </Link>

            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
          <Link href="/products">
            <Image src={"/Kitchen.jpg"} alt="Kitchen" width={1000} height={1000} className="rounded-lg shadow-lg" />
          </Link>

            <div className="flex justify-center mt-4 w-full">
            <Link href="/products">
              <span className="text-lg font-semibold">Kitchen</span>
            </Link>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}