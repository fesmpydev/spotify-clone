import { Link } from "react-router-dom";
import { ExploreCardProps } from "../../types";

export default function ExploreCard({
  title,
  photo,
  bgColor,
  genre,
}: ExploreCardProps) {
  return (
    <>
      <Link to={`/genre/${genre}`}>
        <div
          className={`bg-purple-400 w-full h-full rounded-lg relative overflow-hidden`}
        >
          <h2 className="text-white text-3xl font-extrabold absolute top-1/3 left-5">
            {title}
          </h2>
          <img
            src={photo}
            alt={`Cover of ${title}`}
            className="absolute bottom-0 -right-10 rotate-[25deg] w-[70px] h-[70px]"
          />
        </div>
      </Link>
    </>
  );
}
