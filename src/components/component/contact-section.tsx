import React from "react";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F0F4FF] to-[#F7F4FF] dark:bg-card dark:bg-none py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-[#1F2937] dark:text-foreground md:text-4xl lg:text-5xl">
            Reach Out for Support
          </h2>
          <p className="text-[#6B7280] dark:text-muted-foreground md:text-xl">
            Our compassionate team is here to provide the resources and guidance
            you need on your journey to recovery. Whether you&apos;re struggling with
            addiction or supporting a loved one, we&apos;re here to help.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/Contact"
              prefetch={false}
            >
              <Button className="w-full sm:w-auto">Learn More</Button>
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
