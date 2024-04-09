"use client";

import { VideoCarousel } from "./video-carousel";
import useTrending from "@/hooks/useTrending";

const TrendingTV = () => {
  const { data, isLoading, error } = useTrending("tv");
  console.log(data);

  const movies = data?.data.results;

  if (isLoading) return <div>Loading</div>;

  if (!movies) return null;

  return (
    <div>
      <VideoCarousel direction="left" movies={movies} />
    </div>
  );
};
export default TrendingTV;
