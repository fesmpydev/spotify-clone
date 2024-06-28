export interface PopularArtists {
  id: string;
  artistName: string;
  photo: string;
}

export interface PopularAlbums extends PopularArtists {
  albumName: string;
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
