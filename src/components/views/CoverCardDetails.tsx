import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import usePlayButton from "../../hooks/usePlayButton";
import SongCard from "./SongCard";
import useCoverCardDetails from "../../hooks/useCoverCardDetails";

export default function CoverCardDetails() {
  const [totalPlayTime, setTotalPlayTime] = useState(0);
  const params = useLoaderData() as { id: string };
  const { handlePlayFirstSong } = usePlayButton();
  const { pathname } = window.location;
  const typeCover = pathname.split("/")[1];

  const { albumData, artistData } = useCoverCardDetails({
    type: typeCover,
    id: params.id,
  });

  useEffect(() => {
    if (albumData) {
      (async () => {
        const time = await albumData.songsTotalTime;
        setTotalPlayTime(time);
      })();
    }
  }, [albumData]);

  useEffect(() => {
    const header = window.document.getElementById("header");

    if (header) {
      header.style.backgroundColor = "#1db954";
    }

    return () => {
      if (header) {
        header.style.backgroundColor = "#000";
      }
    };
  }, []);

  const data = albumData ? albumData : artistData;

  return (
    <section className="w-full min-h-screen mb-20">
      <article
        className={`w-full h-auto mb-3 bg-gradient-to-b from-green-500 to-black grid place-items-center`}
      >
        <img
          src={data?.photo}
          alt={data?.artistName}
          className={`w-[150px] h-[150px] ${
            typeCover === "artist" ? "rounded-full" : ""
          } object-cover m-auto mt-10`}
        />
        <div className="w-[90%] m-auto mt-14">
          <h2 className="text-white font-extrabold text-5xl">
            {artistData?.artistName || albumData?.albumName}
          </h2>
          {typeCover === "album" && (
            <div className="flex items-center gap-5 mt-5">
              <img
                src={albumData?.artistPhoto}
                alt={albumData?.artistName}
                className="w-[28px] h-[28px] rounded-full object-cover"
              />
              <span className="text-white font-bold text-xl">
                {albumData?.artistName}
              </span>
            </div>
          )}
          <span className="text-slate-200 font-medium mt-4 text-2xl flex items-center gap-3">
            {typeCover === "album" ? (
              <>
                <span>{albumData?.year}</span>
                <span>• {albumData?.songsQty} songs,</span>
                <span> {totalPlayTime} min</span>
              </>
            ) : (
              <span>{artistData?.listeners} listeners</span>
            )}
          </span>
        </div>
      </article>

      <article className="w-[90%] m-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <button
            className={`${
              typeCover === "album"
                ? ""
                : "rounded-full p-3 border border-white w-[70px]"
            }`}
          >
            {typeCover === "album" ? (
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                style={{ fill: "#fff", width: "24px", height: "24px" }}
                className="Svg-sc-ytk21e-0 bneLcE"
              >
                <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
              </svg>
            ) : (
              <span className="text-white font-extrabold text-xl">Follow</span>
            )}
          </button>
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", width: "26" }}
              className="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="M18.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM15 5.5a3.5 3.5 0 1 1 1.006 2.455L9 12l7.006 4.045a3.5 3.5 0 1 1-.938 1.768l-6.67-3.85a3.5 3.5 0 1 1 0-3.924l6.67-3.852A3.513 3.513 0 0 1 15 5.5zm-9.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm13 6.5a1.5 1.5 0 1 0-.001 3 1.5 1.5 0 0 0 .001-3z"></path>
            </svg>
          </span>
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
        </div>
        <span
          className="w-[50px] h-[50px] rounded-full grid place-items-center bg-green-500"
          onClick={() =>
            handlePlayFirstSong({
              artistId: artistData!.id,
              songId: artistData?.songs ? artistData.songs[0].id : undefined,
            })
          }
        >
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ fill: "#000", width: "26" }}
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </span>
      </article>

      <article className="w-[90%] m-auto mt-14">
        {typeCover === "artist" && (
          <h2 className="text-white font-extrabold text-3xl">Popular</h2>
        )}

        <section className="mt-5 flex flex-col gap-10">
          {typeCover === "artist"
            ? artistData?.songs?.map((song) => (
                <SongCard
                  key={song.name}
                  name={song.name}
                  cover={song.cover}
                  artistId={params.id}
                  songId={song.id}
                />
              ))
            : albumData?.songs?.map((song) => (
                <SongCard
                  key={song.id}
                  name={song.name}
                  cover={song.cover}
                  artistId={params.id}
                  songId={song.id}
                />
              ))}
        </section>
      </article>
    </section>
  );
}
