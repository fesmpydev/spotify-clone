import { CoverCardProps } from "../../types";

export default function CoverCard({
  artistName,
  photo,
  albumName,
}: CoverCardProps) {
  return (
    <div className="w-full h-full">
      <figure className="">
        <img
          src={photo}
          alt={artistName}
          className="w-full h-full object-cover"
        />
        <figcaption className="text-white font-medium text-3xl mt-5">
          {artistName ? artistName : albumName}
        </figcaption>
      </figure>
    </div>
  );
}
