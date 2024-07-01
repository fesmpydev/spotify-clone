import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import {
  setOpenMiniPlayer,
  setFullScreenMiniPlayer,
} from "../redux/features/appSettings";
import { UseMiniPlayer, Songs } from "../types";
import { popularArtist } from "../constants/popularArtists";

export default function useMiniPlayer() {
  const [currentSongPlaying, setCurrentSongPlaying] = useState<UseMiniPlayer>({
    id: "",
    isPlaying: false,
    isPaused: false,
    audio: new Audio(),
  });
  const [songDetails, setSongDetails] = useState<Songs>({
    id: "",
    cover: "",
    name: "",
    path: "",
  });
  const { song, currentAudioSlice } = useAppSelector(
    (state) => state.songSlice
  );
  const { openMiniPlayer, fullScreenMiniPlayer } = useAppSelector(
    (state) => state.appSettings
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (song.length > 0 && currentAudioSlice.id) {
      const songPlaying = song.find((item) => item.isPlaying === true);

      const artistId = currentAudioSlice.artistId;

      console.log(typeof artistId);
      if (songPlaying) {
        const songDetails = popularArtist
          .find((artist) => artist.id === artistId)
          ?.songs?.find((song) => song.id === songPlaying.id);
        setCurrentSongPlaying(songPlaying);
        setSongDetails(songDetails!);

        console.log({
          currentSongPlaying: songPlaying,
          songDetails: songDetails,
        });
      }
    }
  }, [song, currentAudioSlice.artistId, currentAudioSlice.id]);

  const handleOpenMiniPlayer = () => {
    dispatch(setOpenMiniPlayer());
  };

  const handleFullScreenMiniPlayer = () => {
    dispatch(setFullScreenMiniPlayer());
  };

  return {
    handleOpenMiniPlayer,
    handleFullScreenMiniPlayer,
    openMiniPlayer,
    currentSongPlaying,
    songDetails,
    fullScreenMiniPlayer,
  };
}
