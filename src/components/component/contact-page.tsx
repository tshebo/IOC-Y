"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Building, CreditCard, Banknote, ArrowUpRight } from "lucide-react";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTiktokLine,
  RiYoutubeLine,
  RiBankFill,
} from "@remixicon/react";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+27 78 070 0179",
    href: "tel:+27780700179",
  },
  {
    icon: Mail,
    label: "Email",
    value: "IOCRecoverycentre@gmail.com",
    href: "mailto:IOCRecoverycentre@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Johannesburg, South Africa",
    href: null,
  },
];

const socialLinks = [
  {
    icon: RiFacebookLine,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100067463223702",
  },
  {
    icon: RiInstagramLine,
    label: "Instagram",
    href: "https://www.instagram.com/imageofchristrecoverycentre_?igsh=ZnRhNDBpeHg1ZDdo",
  },
  {
    icon: RiTiktokLine,
    label: "TikTok",
    href: "https://www.tiktok.com/@imageofchrist_?_t=ZM-8wM7t2AwjlW&_r=1",
  },
  {
    icon: RiYoutubeLine,
    label: "YouTube",
    href: "https://www.youtube.com/@imageofchrist",
  },
];

const bankingDetails = [
  { icon: RiBankFill, label: "Bank", value: "First National Bank (FNB)" },
  { icon: CreditCard, label: "Account No.", value: "6289 129 1868" },
  { icon: Building, label: "Branch Code", value: "259605" },
  { icon: Banknote, label: "SWIFT Code", value: "FIRNZAJJ" },
];

export function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)/0.08,transparent_70%)]" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-5">
              Contact Us
            </h1>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Whether you&apos;re seeking help, looking to donate, or eager to
              volunteer, we welcome you to reach out. We&apos;re here to walk
              this journey with you.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left sidebar - Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Contact details card */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                Contact Details
              </h2>
              <div className="flex flex-col gap-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground break-all group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                      {item.href && (
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0" />
                      )}
                    </div>
                  );
                  return item.href ? (
                    <Link key={item.label} href={item.href} className="block">
                      {content}
                    </Link>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social media card */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                Follow Us
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Stay connected and follow our journey of hope and restoration.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Banking details card */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
                Banking Details
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Support our mission through a direct bank transfer.
              </p>
              <div className="flex flex-col gap-4">
                {bankingDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
