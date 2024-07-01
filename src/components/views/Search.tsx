import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { setOpenSearch } from "../../redux/features/appSettings";
import ExploreCard from "../shared/ExploreCard";
import { explore } from "../../constants/explore";
import { useEffect } from "react";

export default function Search() {
  const dispatch = useAppDispatch();

  const resetSearchIcon = () => {
    dispatch(setOpenSearch());
  };

  useEffect(() => {
    return () => resetSearchIcon();

    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <article className="w-[90%] m-auto h-full flex items-center gap-5">
        <span>
          <Link to="..">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", width: "26" }}
              className=""
            >
              <path d="M13.414 3.5a.999.999 0 0 0-1.707-.707l-9.207 9.2 9.207 9.202a1 1 0 1 0 1.414-1.413L6.335 13H20.5a1 1 0 0 0 0-2H6.322l6.799-6.794a.999.999 0 0 0 .293-.707z"></path>
            </svg>
          </Link>
        </span>
        <form className="w-full pl-5 pr-5 h-[38px] bg-white rounded-lg flex items-center gap-3">
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              style={{ fill: "#000", width: "16" }}
              className="Svg-sc-ytk21e-0 dYnaPI xfLs2p800R6R4ZghQN1c"
              viewBox="0 0 16 16"
            >
              <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
            </svg>
          </span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="What do you want to listen to?"
            className="w-full -h-full outline-none bg-transparent text-2xl text-gray-500"
            required
          />
        </form>
      </article>

      <article className="w-[90%] m-auto mt-14">
        <h2 className="text-white text-3xl font-bold">Play what you love</h2>
        <p className="text-white text-xl mt-5">
          Search for artists, songs, podcasts and more.
        </p>
      </article>

      <article className="w-[90%] m-auto mt-14">
        <h2 className="text-white text-2xl font-extrabold">Browse all</h2>
      </article>

      <article className="w-[90%] min-h-[50vh] m-auto mt-14 grid grid-cols-2 grid-rows-[100,150px, 1fr] gap-5 mb-10">
        {explore.map((item) => (
          <ExploreCard
            key={item.title}
            title={item.title}
            photo={item.photo}
            bgColor={item.bgColor}
            genre={item.genre}
          />
        ))}
      </article>
    </section>
  );
}
