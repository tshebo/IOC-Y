import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "../ui/button";


export function Hero() {

  return (
    <section className="w-full">
      <Carousel className="w-full max-h-[80vh] overflow-hidden relative text-center">
        <CarouselContent>
          <CarouselItem>
            <div
              className="w-full h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: "url('/ioc-home3.webp')" }}
            >
              <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Nation Shakers</h2>
                <p className="text-lg mb-4">Raising Up Nation Shakers</p>
                <Link href="/Gallery">
                  <Button>Gallery</Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="w-full h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: "url('/ioc-home.webp')" }}
            >
              <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Mighty Men</h2>
                <p className="text-lg mb-4">Raising Up Mighty Men of David</p>
                <Link href="/About">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="w-full h-[80vh] bg-cover bg-center"
              style={{
                backgroundImage: "url('/ioc-home2.webp')",
              }}
            >
              <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Preachers</h2>
                <p className="text-lg mb-4">Raising Up Preachers</p>
                <Link href="/Contact">
                  <Button>Reach Out</Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <ChevronLeftIcon className="w-8 h-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <ChevronRightIcon className="w-8 h-8" />
        </CarouselNext>
      </Carousel>
    </section>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
