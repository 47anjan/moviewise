import { movies } from "@/lib/movies";
import { VideoCarousel } from "./video-carousel";

const TrendingMovies = () => {
  return (
    <div>
      <VideoCarousel direction="right" movies={movies} />
      <VideoCarousel direction="left" movies={movies} />
    </div>
  );
};
export default TrendingMovies;
