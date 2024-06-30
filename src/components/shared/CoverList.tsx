import { Fragment } from "react/jsx-runtime";
import CoverCard from "./CoverCard";
import { CoverListProps } from "../../types";

export default function CoverList({ title, list, type }: CoverListProps) {
  return (
    <section className="w-[90%] m-auto mt-14">
      <h2 className="text-white font-extrabold text-3xl">{title}</h2>
      <article
        className="w-full h-full mt-5 grid grid-cols-[minmax(168px,1fr)] auto-cols-[minmax(168px,1fr)] grid-flow-col overflow-x-scroll gap-5"
        id="cover-list"
      >
        {list.map((item) => (
          <Fragment key={item.id}>
            {type === "artist" && "artistName" in item && (
              <CoverCard
                artistName={item.artistName}
                photo={item.photo}
                id={item.id}
              />
            )}

            {type === "album" && "albumName" in item && (
              <CoverCard
                albumName={item.albumName}
                photo={item.photo}
                id={item.id}
              />
            )}
          </Fragment>
        ))}
      </article>
    </section>
  );
}
