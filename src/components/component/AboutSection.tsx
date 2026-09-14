import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <div className="w-full">
      <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] py-5">
                About Our Organization
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                <strong>Image of Christ Recovery Centre</strong> was established
                on June 16, 2020, by Randolph and Jade Beyers and officially
                registered on November 4, 2020. Our centre was created to combat
                the devastating effects of substance abuse on the youth in our
                community. We aim to prevent the loss of young lives and the
                squandering of talents due to drug addiction. The repercussions
                of substance abuse extend beyond the individual, impacting
                families and the broader community.{" "}
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-primary-foreground text-sm font-medium">
                Our Values
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="w-5 h-5 text-primary" />
                  Faithful: We are passionate and dedicated to making a
                  difference, driven by our commitment to our cause.
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="w-5 h-5 text-primary" />
                  Influential: We ignite change and motivate others through our
                  innovative approaches and solutions.
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="w-5 h-5 text-primary" />
                  Effective: We believe in lifting others, empowering them to
                  overcome their challenges and reach their full potential.
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="w-5 h-5 text-primary" />
                  Reliable: We are unwavering in the face of adversity, standing
                  strong and united with our clients.
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="w-5 h-5 text-primary" />
                  Yielding: We are focused on productive outcomes, ensuring that
                  our efforts produce meaningful and lasting results.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-10">
          <Link href="/About">
            <Button variant="outline">
              About Us <ChevronRight />{" "}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function CircleCheckIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
