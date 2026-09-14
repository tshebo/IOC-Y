"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { RiMailSendLine, RiWhatsappLine } from "@remixicon/react";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full bg-background py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold"
          prefetch={false}
        >
          <Image
            src="/Image of Christ/logo.webp"
            alt="Logo"
            width={50}
            height={50}
            className="h-15 w-15"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/Services"
            className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="/Gallery"
            className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Gallery
          </Link>
          <Link
            href="/Contact"
            className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=%2B27780700179&context=ARDGsaIPm1fe7wABqQCwppqLaynC9Wz7lZqwm3xkGayZ9Zj7620e4FdWRZlXYvUAJjXvmQWY-32dCprnZ1FL6b5hOzPaYUZmGWSWqmWv8z-_qSl7W_NY2000mG06P1C1AffURPsfn2kk9boNNxg_IICYoQ&source=FB_Page&app=facebook&entry_point=page_cta"
          >
            <Button variant="outline">
              <RiWhatsappLine />
            </Button>
          </Link>
          <Link target="_blank" href="mailto:IOCRecoverycentre@gmail.com">
            <Button>
              <RiMailSendLine />
            </Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-background px-6 py-11 md:hidden"
          >
            <nav className="grid gap-4">
              <Link
                href="/"
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/About"
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/Services"
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="/Gallery"
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                Gallery
              </Link>
              <Link
                href="/Contact"
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4 flex items-center gap-4">
              <Button variant="outline">
                <RiWhatsappLine />
              </Button>
              <Button>
                <RiMailSendLine />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
