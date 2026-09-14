import React from "react";
import Image from "next/image";

export function Founders() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <Image
          src="/Image of Christ/founders.jpg"
          width={400}
          height={200}
          alt="Founders"
          className="mx-auto rounded-xl object-cover object-center aspect-[3/2]"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Founders&apos; Story
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Randolph Beyers has been serving as a Youth Pastor at the Upper Room
            Christian Centre in Johannesburg. Together with his wife, Jade
            Beyers, Randolph has been ministering to drug addicts on the streets
            of Rosettenville and surrounding areas. Their dedication stems from
            a firm belief that a drug addict is akin to an uncut diamond, which,
            with the right care, can be cut and polished to reveal its true
            value.
          </p>
        </div>
      </div>
    </section>
  );
}
