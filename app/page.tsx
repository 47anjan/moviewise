import { AnimatedTooltip } from "@/components/animated-tooltip";
import { Hero } from "@/components/hero";
import TrendingMovies from "@/components/trending-movies";
import TrendingTV from "@/components/trending-tv";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TrendingMovies />
      <TrendingTV />
    </main>
  );
}
