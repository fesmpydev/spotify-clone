import { Link } from "react-router-dom";
import { CoverCardProps } from "../../types";

export default function CoverCard({
  id,
  artistName,
  photo,
  albumName,
}: CoverCardProps) {
  return (
    <div className="w-full h-full">
      <figure className="">
        <Link to={artistName ? `/artist/${id}` : `/album/${id}`}>
          <img
            src={photo}
            alt={artistName}
            className="max-w-full h-full object-cover aspect-square"
          />
        </Link>
        <figcaption className="text-white font-medium text-3xl mt-5">
          {artistName ? artistName : albumName}
        </figcaption>
      </figure>
    </div>
  );
}
