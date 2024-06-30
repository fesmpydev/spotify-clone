import usePlayButton from "../../hooks/usePlayButton";

export default function PlayButton({
  cover,
  name,
  artistId,
  songId,
}: {
  cover: string;
  name: string;
  artistId: string;
  songId: string;
}) {
  const { currentAudioSlice, songsList, playSong, pauseSong, resumeSong } =
    usePlayButton();

  const currentSong = songsList.find((song) => song.id === songId);

  return (
    <div className="relative w-[50px] h-[50px]">
      {currentSong?.isPlaying && (
        <span
          className="absolute top-1/2 -translate-y-1/2 lef-1/2 translate-x-1/2"
          onClick={() => pauseSong({ artistId, songId })}
        >
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", width: "26" }}
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        </span>
      )}
      {currentSong?.isPaused && (
        <span
          className="absolute top-1/2 -translate-y-1/2 lef-1/2 translate-x-1/2"
          onClick={() => resumeSong({ artistId, songId })}
        >
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="Svg-sc-ytk21e-0 bneLcE"
            style={{ fill: "#fff", width: "26" }}
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </span>
      )}

      {!currentSong?.isPlaying &&
        !currentSong?.isPaused &&
        currentAudioSlice.id !== songId && (
          <img
            src={cover}
            alt={name}
            className="w-[50px] h-[50px] rounded-md relative z-10"
            onClick={() => playSong({ artistId, songId })}
          />
        )}
    </div>
  );
}
