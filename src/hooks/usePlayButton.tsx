import { useAppSelector, useAppDispatch } from "../redux/hook";
import { play, pause, resume, playFirstSong } from "../redux/features/song";

export default function usePlayButton() {
  const dispatch = useAppDispatch();
  const { song: songsList, currentAudioSlice } = useAppSelector(
    (state) => state.song
  );
  const playSong = ({
    artistId,
    songId,
  }: {
    artistId: string;
    songId: string;
  }) => {
    dispatch(play({ artistId, songId }));
  };

  const pauseSong = ({
    artistId,
    songId,
  }: {
    artistId: string;
    songId: string;
  }) => {
    dispatch(pause({ artistId, songId }));
  };

  const resumeSong = ({
    artistId,
    songId,
  }: {
    artistId: string;
    songId: string;
  }) => {
    dispatch(resume({ artistId, songId }));
  };

  const handlePlayFirstSong = ({
    artistId,
    songId,
  }: {
    artistId: string;
    songId: string | undefined;
  }) => {
    dispatch(playFirstSong({ artistId, songId }));
  };

  return {
    currentAudioSlice,
    songsList,
    playSong,
    pauseSong,
    resumeSong,
    handlePlayFirstSong,
  };
}
