import GalleryFolders from "@/components/component/GalleryFolders";
import React from "react";

function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)/0.08,transparent_70%)]" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Our Moments
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-5">
              Gallery
            </h1>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Explore moments captured at Christ Recovery Centre. Each collection
              tells a story of hope, restoration, and lives being transformed.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery content */}
      <section className="container pb-20">
        <GalleryFolders />
      </section>
    </main>
  );
}

export default GalleryPage;
