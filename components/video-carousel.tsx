"use client";

import { Movie } from "@/lib/movies";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const VideoCarousel = ({
  direction = "right",
  pauseOnHover = true,
  className,
  movies,
}: {
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  movies: Movie[];
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "100s");
    }
  };

  return (
    <motion.div className="bg-black py-4">
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <div
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4  w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && " hover:[animation-play-state:paused]"
          )}
        >
          {movies.map((movie, index) => (
            <div
              className="aspect-video  w-[40vw] shrink-0 md:w-[23vw]"
              key={`${movie.name}-${index}`}
            >
              <img
                className="h-full w-full rounded-xl object-cover"
                src={movie.poster}
                alt={movie.name}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
