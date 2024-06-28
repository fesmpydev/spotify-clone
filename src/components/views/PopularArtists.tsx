import { popularArtist } from "../../constants/popularArtists";
import CoverList from "../shared/CoverList";

export default function PopularArtists() {
  return (
    <CoverList title="Popular artists" list={popularArtist} type="artist" />
  );
}
