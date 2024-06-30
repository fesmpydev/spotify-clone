import { useEffect, useState } from "react";
import { popularAlbums } from "../constants/popularAlbums";
import { popularArtist } from "../constants/popularArtists";
import { PopularAlbums, PopularArtists, UseCoverCardDetails } from "../types";

export default function useCoverCardDetails({ type, id }: UseCoverCardDetails) {
  const [data, setData] = useState<PopularAlbums | PopularArtists>();

  useEffect(() => {
    if (type && id) {
      if (type === "artist") {
        const artist = popularArtist.find((artist) => artist.id === id);

        if (artist === undefined) return;

        setData(artist);
      } else if (type === "album") {
        const album = popularAlbums.find((album) => album.id === id);

        if (album === undefined) return;

        setData(album);
      } else {
        return;
      }
    }
  }, [type, id]);

  return { data };
}
