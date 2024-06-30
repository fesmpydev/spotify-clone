import { useLoaderData } from "react-router-dom";
import usePlayButton from "../../hooks/usePlayButton";
import SongCard from "./SongCard";
import useCoverCardDetails from "../../hooks/useCoverCardDetails";

export default function CoverCardDetails() {
  const params = useLoaderData() as { id: string };
  const { handlePlayFirstSong } = usePlayButton();
  const { pathname } = window.location;
  const typeCover = pathname.split("/")[1];

  const { data } = useCoverCardDetails({ type: typeCover, id: params.id });

  return (
    <section className="w-full min-h-screen mb-20">
      <article
        className={`w-full h-[50vh] bg-gradient-to-b from-${data?.bgColor}-500 to-slate-700 grid place-items-center`}
      >
        <img
          src={data?.photo}
          alt={data?.artistName}
          className="w-[150px] h-[150px] rounded-full object-cover m-auto mt-10"
        />
        <div className="w-[90%] m-auto mt-14">
          <h2 className="text-white font-extrabold text-5xl">
            {data?.artistName}
          </h2>
          <span className="text-slate-200 font-medium mt-4 block text-2xl">
            {data?.listeners} monthly listeners
          </span>
        </div>
      </article>

      <article className="w-[90%] m-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <button className="rounded-full p-3 border border-white w-[70px]">
            <span className="text-white font-extrabold text-xl">Follow</span>
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
              artistId: data!.id,
              songId: data?.songs ? data.songs[0].id : undefined,
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
        <h2 className="text-white font-extrabold text-3xl">Popular</h2>

        <section className="mt-5 flex flex-col gap-10">
          {data?.songs?.map((song) => (
            <SongCard
              key={song.name}
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
