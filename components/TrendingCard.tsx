import { Movie } from "@/lib/types";
import { getImage } from "@/lib/utils";
import { AnimatedTooltip } from "./animated-tooltip";
const TrendingCard = ({ movie }: { movie: Movie }) => {
  return (
    <div
      className="h-80 md:h-96 transition-all duration-700 md:hover:w-[26vw] w-[40vw]  shrink-0 md:w-[15vw] relative"
      key={movie.id}
    >
      <img
        className="h-full w-full rounded-xl object-contain"
        src={getImage(movie.poster_path)}
        alt={movie.name}
      />
    </div>
  );
};
export default TrendingCard;
