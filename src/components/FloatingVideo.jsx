"use client";

// components/FloatingVideo.js
import { useEffect, useState } from "react";

const FloatingVideo = () => {
  const [showVideo, setShowVideo] = useState(true); // Start with video shown

  useEffect(() => {
    // Optional: Show the video after the component mounts
    setShowVideo(true);
  }, []);

  if (!showVideo) return null;

  return (
    <div style={styles.floatingContainer}>
      <button style={styles.closeButton} onClick={() => setShowVideo(false)}>
        <XIcon style={styles.closeIcon} />
      </button>
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/BMDEx6Y0GOs?si=KjEd8neRhZ0HF0yb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={styles.video}
      ></iframe>
    </div>
  );
};

const styles = {
  floatingContainer: {
    position: "fixed", // Keeps the container fixed in the viewport
    bottom: "10px", // Distance from the bottom of the viewport
    right: "10px", // Distance from the right of the viewport
    width: "300px",
    height: "200px",
    zIndex: 9999, // Ensure this is higher than other elements
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",  
  },
  video: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute", // Position relative to the floatingContainer
    top: "10px",
    right: "10px",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "5px",
    zIndex: 10000,  
  },
  closeIcon: {
    color: "white",
    width: "20px",
    height: "20px",
  },
};

// Simple X Icon Component
const XIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default FloatingVideo;
