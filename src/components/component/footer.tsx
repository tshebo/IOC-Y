import Image from "next/image";
import { MailOpen, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTiktokLine,
  RiMailLine,
  RiYoutubeLine,
} from "@remixicon/react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Image of Christ/logo.webp"
                alt="IOC Recovery Centre Logo"
                width={60}
                height={60}
                className="h-14 w-14"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Christ-focused rehabilitation centre dedicated to transforming lives through faith, compassion, and professional care.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <address className="not-italic text-sm text-muted-foreground">
                  Johannesburg,<br />South Africa
                </address>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-primary shrink-0" />
                <Link 
                  href="tel:+27780700179" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +27 78 070 0179
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <RiMailLine className="h-5 w-5 text-primary shrink-0" />
                <Link
                  href="mailto:IOCRecoverycentre@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  IOCRecoverycentre@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/About"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Gallery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Image of Christ/Vision.jpg"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Our Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Follow Us</h4>
            <p className="text-sm text-muted-foreground">
              Stay connected on social media
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/profile.php?id=100067463223702"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <RiFacebookLine className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/imageofchristrecoverycentre_?igsh=ZnRhNDBpeHg1ZDdo"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <RiInstagramLine className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@imageofchrist_?_t=ZM-8wM7t2AwjlW&_r=1"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <RiTiktokLine className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@imageofchrist"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <RiYoutubeLine className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Image of Christ Recovery Centre. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Transforming lives through faith
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
