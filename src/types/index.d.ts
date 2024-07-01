type Songs = {
  name: string;
  path: string;
  cover: string;
  id: string;
};

export interface PopularArtists {
  id: string;
  artistName: string;
  photo: string;
  listeners?: string;
  bgColor?: string;
  songs?: Songs[];
}

export interface PopularAlbums extends PopularArtists {
  albumName: string;
  artistPhoto: string;
  year: number;
  songsQty: number;
  songsTotalTime: Promise<number>;
}

export interface CoverListProps {
  title: string;
  list: PopularArtists[] | PopularAlbums[];
  type: "artist" | "album";
}

export interface CoverCardProps extends PopularArtists, PopularAlbums {
  id?: string;
  albumName?: string;
  artistName?: string;
}

export interface UseCoverCardDetails {
  type: string;
  id: string;
}

export interface Song {
  song: {
    id: string;
    isPlaying: boolean;
    isPaused: boolean;
    audio: HTMLAudioElement;
  }[];
  currentAudioSlice: { id: string; artistId: string };
}

export interface ExploreCardProps {
  title: string;
  photo: string;
  bgColor: string;
  genre: string;
}

export interface LoginContainerWithIconProps {
  icon: string;
  text: string;
}

export interface MethodsLogin {
  id: number;
  name: string;
  icon: string;
}

export interface UseMiniPlayer {
  id: string;
  isPlaying: boolean;
  isPaused: boolean;
  audio: HTMLAudioElement;
}

export interface FullScreenMiniPlayerProps {
  currentSong: UseMiniPlayer;
  songDetails: Songs;
}
