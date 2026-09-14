import Link from "next/link";
import { ServicesSection } from "./ServicesSection";

export function Services() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-20 lg:py-32 bg-muted">
        <div>
          <ServicesSection />
          <div className="flex justify-center space-x-4">
            <Link
              href="/Contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Us
            </Link>
            <Link
              href="/About"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
