import PlayButton from "../shared/PlayButton";

interface ArtistSongsProps {
  name: string;
  cover: string;
  artistId: string;
  songId: string;
}

interface AlbumProps {
  name: string;
  cover: string;
  artistId: string;
  songId: string;
}

export default function SongCard({
  name,
  cover,
  artistId,
  songId,
}: ArtistSongsProps | AlbumProps) {
  return (
    <article className="w-full h-full flex items-center justify-between">
      <div className="flex items-center gap-5">
        <PlayButton
          cover={cover}
          name={name}
          artistId={artistId}
          songId={songId}
        />
        <div>
          <h3 className="text-white text-3xl font-semibold">{name}</h3>
          <span className="text-white text-xl font-medium">5.000.000</span>
        </div>
      </div>
      <span>
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{ fill: "#fff", width: "26" }}
          className="Svg-sc-ytk21e-0 bneLcE"
        >
          <path d="M10.5 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 15a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0-7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path>
        </svg>
      </span>
    </article>
  );
}
