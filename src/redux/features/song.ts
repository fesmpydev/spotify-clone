import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { popularArtist } from "../../constants/popularArtists";
import { Song } from "../../types";

const initialState: Song = {
  song: [{ id: "", isPlaying: false, isPaused: false, audio: new Audio() }],
  currentAudioSlice: { id: "" },
};

export const song = createSlice({
  name: "song",
  initialState,
  reducers: {
    play(state, action: PayloadAction<{ artistId: string; songId: string }>) {
      const artist = popularArtist.find(
        (artist) => artist.id === action.payload.artistId
      );
      const url = artist?.songs?.find(
        (song) => song.id === action.payload.songId
      )?.path;

      if (!url) return;
      console.log("url", url);

      // validate if the song is already exist in the state
      const song = state.song.find((item) => item.id === action.payload.songId);
      if (song) {
        const previousSong = state.song.find(
          (item) => item.id === state.currentAudioSlice.id
        );
        previousSong?.audio.pause();
        previousSong!.audio.currentTime = 0;
        previousSong!.isPlaying = false;
        previousSong!.isPaused = false;
        song.audio.play();
        song.isPlaying = true;
        song.isPaused = false;
        state.currentAudioSlice = { id: action.payload.songId };
        return;
      }

      const audio = new Audio(url);

      Object.assign(state, {
        song: [
          ...state.song,
          {
            id: action.payload.songId,
            isPlaying: true,
            isPaused: false,
            audio,
          },
        ],
      });

      if (
        state.currentAudioSlice.id !== "" &&
        state.currentAudioSlice.id !== action.payload.songId
      ) {
        const previousSong = state.song.find(
          (item) => item.id === state.currentAudioSlice.id
        );
        previousSong?.audio.pause();
        previousSong!.audio.currentTime = 0;
        previousSong!.isPlaying = false;
        previousSong!.isPaused = false;
      }

      state.currentAudioSlice = { id: action.payload.songId };

      console.warn(state.currentAudioSlice);

      state.song
        .find((item) => item.id === action.payload.songId)
        ?.audio.play();
    },

    playFirstSong(
      state,
      action: PayloadAction<{ artistId: string; songId: string | undefined }>
    ) {
      console.log(action.payload);

      const artist = popularArtist.find(
        (artist) => artist.id === action.payload.artistId
      );

      const url = artist?.songs?.find(
        (song) => song.id === action.payload.songId
      )?.path;

      if (!url) return;

      const audio = new Audio(url);

      if (!action.payload.songId) return;

      state.currentAudioSlice = { id: action.payload.songId };

      // si existe la primera cancion en la lista reproducirlo y no agregar
      if (!artist.songs) return;

      const firstSongId = artist.songs[0].id;
      const songExist = state.song.find((item) => item.id === firstSongId);

      if (songExist) {
        songExist.audio.play();
        songExist.isPlaying = true;
        songExist.isPaused = false;
        return;
      }

      // si no existe reproducirlo y agregarlo a la lista
      Object.assign(state, {
        song: [
          ...state.song,
          {
            id: firstSongId,
            isPlaying: true,
            isPaused: false,
            audio,
          },
        ],
      });

      state.song.find((item) => item.id === firstSongId)?.audio.play();
    },

    pause(state, action: PayloadAction<{ artistId: string; songId: string }>) {
      const artist = state.song.find(
        (artist) => artist.id === action.payload.songId
      );

      artist?.audio.pause();
      artist!.isPlaying = false;
      artist!.isPaused = true;
    },

    resume(state, action: PayloadAction<{ artistId: string; songId: string }>) {
      const artist = state.song.find(
        (artist) => artist.id === action.payload.songId
      );

      artist?.audio.play();
      artist!.isPlaying = true;
      artist!.isPaused = false;
    },
  },
});

export const { play, pause, resume, playFirstSong } = song.actions;
export default song.reducer;
