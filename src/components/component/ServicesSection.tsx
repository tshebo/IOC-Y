import {
  RiBriefcase2Line,
  RiInformationLine,
  RiMusicLine,
  RiPresentationLine,
  RiTeamLine,
  RiVideoLine,
} from "@remixicon/react";
import { Handshake, UserRound, UserRoundCheck, UsersRound } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-4xl text-center underline font-bold">
          What we do
        </div>
        <div className="text-center text-slate-500 italic my-5 md:px-32">
          &quot;We reach out to the rejected and hurting, who have been
          struggling with substance abuse and have been
          written off by society.&quot;
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <UsersRound className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Counselling Services</h3>
              <p className="text-muted-foreground">
                &quot;We offer qualified substance abuse counselling,
                rehabilitation, and support for family reunification and
                community integration.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <UserRoundCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Rehabilitation Programs</h3>
              <p className="text-muted-foreground">
                &quot;Through biblical teachings and structured programs, we
                help individuals transform and equip them for a better
                life.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Community Outreach</h3>
              <p className="text-muted-foreground">
                &quot;We actively engage with individuals addicted to substances
                on the streets, offering support and guidance.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiTeamLine className="h-8 w-10" />
              </div>
              <h3 className="text-xl font-semibold">
                Family Support & Restoration
              </h3>
              <p className="text-muted-foreground">
                &quot;We provide support to families to help them understand and
                deal with the challenges of substance abuse.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiPresentationLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Skills Development</h3>
              <p className="text-muted-foreground">
                &quot;We offer skills development programmes to help individuals
                gain new skills and improve their lives.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiMusicLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">
                Musical Instrument Lessons
              </h3>
              <p className="text-muted-foreground">
                &quot;We provide lessons in playing musical instruments as part
                of our effort to equip individuals with valuable skills.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiBriefcase2Line className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">
                Business Development Support
              </h3>
              <p className="text-muted-foreground">
                &quot;We provide guidance and support to help individuals start
                and grow their own businesses, offering resources, mentorship,
                and training to turn their entrepreneurial ideas into successful
                ventures.&quot;
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="bg-primary rounded-md p-3 text-primary-foreground">
                <RiInformationLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">
                Information and Referral Services
              </h3>
              <p className="text-muted-foreground">
                &quot;We provide information and referrals to appropriate
                services and resources, helping individuals navigate their
                journey to recovery and support.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
