"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Images } from "lucide-react";

interface GalleryFolder {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

const galleryFolders: GalleryFolder[] = [
  {
    id: "christmas-2025",
    title: "Christmas Day2025",
    description: "Moments from our 2025 Christmas Day",
    coverImage: "/christmas-2025/cd (1).webp",
    images: [
      "/christmas-2025/cd (1).webp",
      "/christmas-2025/cd (2).webp",
      "/christmas-2025/cd (3).webp",
      "/christmas-2025/cd (4).webp",
      "/christmas-2025/cd (5).webp",
      "/christmas-2025/cd (6).webp",
      "/christmas-2025/cd (7).webp",
      "/christmas-2025/cd (8).webp",
    ],
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation Programs",
    description: "Transformative journeys of hope and restoration",
    coverImage: "/gallery/ioc (9).webp",
    images: [
      "/gallery/ioc (9).webp",
      "/gallery/ioc (10).webp",
      "/gallery/ioc (11).webp",
      "/gallery/ioc (12).webp",
      "/gallery/ioc (13).webp",
      "/gallery/ioc (14).webp",
      "/gallery/ioc (15).webp",
      "/gallery/ioc (16).webp",
    ],
  },
  {
    id: "worship-services",
    title: "Worship Services",
    description: "Spiritual gatherings and fellowship moments",
    coverImage: "/gallery/ioc (17).webp",
    images: [
      "/gallery/ioc (17).webp",
      "/gallery/ioc (18).webp",
      "/gallery/ioc (19).webp",
      "/gallery/ioc (20).webp",
      "/gallery/ioc (21).webp",
      "/gallery/ioc (22).webp",
      "/gallery/ioc (23).webp",
      "/gallery/ioc (24).webp",
    ],
  },
  {
    id: "family-day-2025",
    title: "Family Day 2025",
    description: "Celebrations and milestone occasions",
    coverImage: "/family-day-2025/fd (25).webp",
    images: [
      "/family-day-2025/fd (1).webp",
      "/family-day-2025/fd (2).webp",
      "/family-day-2025/fd (3).webp",
      "/family-day-2025/fd (4).webp",
      "/family-day-2025/fd (5).webp",
      "/family-day-2025/fd (6).webp",
      "/family-day-2025/fd (7).webp",
      "/family-day-2025/fd (8).webp",
      "/family-day-2025/fd (9).webp",
      "/family-day-2025/fd (10).webp",
      "/family-day-2025/fd (11).webp",
      "/family-day-2025/fd (12).webp",
      "/family-day-2025/fd (13).webp",
      "/family-day-2025/fd (14).webp",
      "/family-day-2025/fd (15).webp",
      "/family-day-2025/fd (16).webp",
      "/family-day-2025/fd (17).webp",
      "/family-day-2025/fd (18).webp",
      "/family-day-2025/fd (19).webp",
      "/family-day-2025/fd (20).webp",
      "/family-day-2025/fd (21).webp",
      "/family-day-2025/fd (22).webp",
      "/family-day-2025/fd (23).webp",
      "/family-day-2025/fd (24).webp",
      "/family-day-2025/fd (25).webp",
      "/family-day-2025/fd (26).webp",
      "/family-day-2025/fd (27).webp",
      "/family-day-2025/fd (28).webp",
      "/family-day-2025/fd (29).webp",
      "/family-day-2025/fd (30).webp",
      "/family-day-2025/fd (31).webp",
      "/family-day-2025/fd (32).webp",
      "/family-day-2025/fd (33).webp",

    ],
  },
  {
    id: "daily-activities",
    title: "Daily Activities",
    description: "A glimpse into everyday life at the centre",
    coverImage: "/gallery/ioc (33).webp",
    images: [
      "/gallery/ioc (33).webp",
      "/gallery/ioc (34).webp",
      "/gallery/ioc (35).webp",
      "/gallery/ioc (36).webp",
      "/gallery/ioc (38).webp",
      "/gallery/ioc (39).webp",
      "/gallery/ioc (40).webp",
      "/gallery/ioc (41).webp",
      "/gallery/ioc (42).webp",
    ],
  },
];

/* ───────────────────── Folder Card ───────────────────── */

function FolderCard({
  folder,
  onOpen,
}: {
  folder: GalleryFolder;
  onOpen: (f: GalleryFolder) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!hovered) {
      setIdx(0);
      return;
    }
    const t = setInterval(
      () => setIdx((i) => (i + 1) % Math.min(folder.images.length, 5)),
      700
    );
    return () => clearInterval(t);
  }, [hovered, folder.images.length]);

  return (
    <button
      type="button"
      onClick={() => onOpen(folder)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col text-left rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_40px_-12px] hover:shadow-primary/15"
    >
      {/* Image area */}
      <div className="relative aspect-[3/2] overflow-hidden">
        {/* Stacked images for cycling */}
        {folder.images.slice(0, 5).map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`${folder.title} preview`}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${
              hovered
                ? i === idx
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
                : i === 0
                  ? "opacity-100 scale-100 group-hover:scale-105"
                  : "opacity-0"
            }`}
          />
        ))}

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        {/* Image count pill */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white/90 text-xs font-medium rounded-full px-2.5 py-1">
          <Images className="w-3 h-3" />
          {folder.images.length}
        </div>

        {/* Hover progress dots */}
        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {folder.images.slice(0, 5).map((_, i) => (
            <span
              key={i}
              className={`block h-1 rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text area */}
      <div className="flex flex-col gap-1 p-4">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {folder.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
          {folder.description}
        </p>
      </div>
    </button>
  );
}

/* ───────────────────── Lightbox ───────────────────── */

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={() =>
          onNavigate((index - 1 + images.length) % images.length)
        }
        className="absolute left-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => onNavigate((index + 1) % images.length)}
        className="absolute right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image */}
      <div className="relative w-full max-w-5xl h-[80vh] mx-6">
        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

/* ───────────────────── Folder Detail ───────────────────── */

function FolderDetail({
  folder,
  onBack,
}: {
  folder: GalleryFolder;
  onBack: () => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          All collections
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          {folder.title}
        </h2>
        <p className="text-muted-foreground mt-1.5">
          {folder.description}
          <span className="mx-2 text-border">{"/"}</span>
          <span className="text-muted-foreground/70 tabular-nums text-sm">
            {folder.images.length} photos
          </span>
        </p>
      </div>

      {/* Masonry-like grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {folder.images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className={`group relative overflow-hidden rounded-xl bg-muted ${
              i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div
              className={`relative w-full ${
                i % 5 === 0 ? "aspect-square" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img}
                alt={`${folder.title} - ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={folder.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

/* ───────────────────── Main Export ───────────────────── */

export default function GalleryFolders() {
  const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(
    null
  );

  if (selectedFolder) {
    return (
      <FolderDetail folder={selectedFolder} onBack={() => setSelectedFolder(null)} />
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {galleryFolders.map((folder) => (
        <FolderCard key={folder.id} folder={folder} onOpen={setSelectedFolder} />
      ))}
    </div>
  );
}
