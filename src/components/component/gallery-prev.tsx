import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function GalleryPrev() {
  return (
    <Carousel className="w-11/12 p-10 sm:container">
      <CarouselContent>
        <CarouselItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/gallery/ioc (1).webp"
                width={800}
                height={450}
                alt="Community Outreach"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-4">
              <h3 className="text-2xl font-bold">Community Outreach</h3>
              <p className="text-muted-foreground">
                Engaging with our community through events and activities to
                raise awareness and support.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/gallery/ioc (9).webp"
                width={450}
                height={800}
                alt="Empowerment"
                className="w-full h-64 md:h-80 object-contain rounded-lg"
              />
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-4">
              <h3 className="text-2xl font-bold">Empowerment</h3>
              <p className="text-muted-foreground">
                Empowering you with skills, knowledge, and opportunities to
                build a brighter future.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/gallery/ioc (16).webp"
                width={800}
                height={450}
                alt="Healing and Recovery"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-4">
              <h3 className="text-2xl font-bold">Healing and Recovery</h3>
              <p className="text-muted-foreground">
                Providing a supportive environment for individuals to recover
                and reclaim their lives.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="text-center py-10">
        <Link href="/Gallery">
          <Button>
            Gallery <ChevronRight />
          </Button>
        </Link>
      </div>
    </Carousel>
  );
}
