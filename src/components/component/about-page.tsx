import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
              Image of Christ
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <strong> Image of Christ Recovery Centre</strong> was established
              on June 16, 2020, by Randolph and Jade Beyers and officially
              registered on November 4, 2020. Our centre was created to combat
              the devastating effects of substance abuse on the youth in our
              community. We aim to prevent the loss of young lives and the
              squandering of talents due to drug addiction. The repercussions of
              substance abuse extend beyond the individual, impacting families
              and the broader community.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Image of Christ/logo1.png"
              width={500} // Adjust width to make it smaller
              height={350} // Adjust height to maintain aspect ratio
              alt="Hero"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Restoring the Hurtful and Rejected and Bringing Them to a Place
                of Influence
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe that while addiction may alter a person&apos;s character,
                it never diminishes their inherent value.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Objectives
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Empowering Growth
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Funding:</strong> Secure sufficient funding for
                    start-up, development, and operational needs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Consistency and Productivity:</strong> Ensure all
                    programs run consistently and productively, with the
                    potential to expand into other areas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Community Development:</strong> Equip the community
                    with essential moral values and life skills to foster a
                    generation that will influence positive change in South
                    Africa and beyond.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Board and Team Development:</strong> Develop a
                    strong Board of Directors and a successful team to guide,
                    assist with fundraising efforts, and oversee smooth
                    operations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
