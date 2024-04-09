import { api } from "@/lib/api-client";
import { Movie } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

type Media = "movie" | "tv";

interface HTTP_RESPONSE {
  data: {
    results: Movie[];
  };
}

const useTrending = (type: Media) => {
  return useQuery<HTTP_RESPONSE>({
    queryKey: [type],
    queryFn: async () => await api.get(`/trending/${type}/day?language=en-US`),
  });
};
export default useTrending;
