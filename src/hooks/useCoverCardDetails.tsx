import { useEffect, useState } from "react";
import { popularAlbums } from "../constants/popularAlbums";
import { popularArtist } from "../constants/popularArtists";
import { PopularAlbums, PopularArtists, UseCoverCardDetails } from "../types";

export default function useCoverCardDetails({ type, id }: UseCoverCardDetails) {
  const [artistData, setArtistData] = useState<PopularArtists>();
  const [albumData, setAlbumData] = useState<PopularAlbums>();

  useEffect(() => {
    if (type && id) {
      if (type === "artist") {
        const artist = popularArtist.find((artist) => artist.id === id);

        if (artist === undefined) return;

        setArtistData(artist);
      } else if (type === "album") {
        const album = popularAlbums.find((album) => album.id === id);

        if (album === undefined) return;

        setAlbumData(album);
      } else {
        return;
      }
    }
  }, [type, id]);

  return { artistData, albumData };
}
