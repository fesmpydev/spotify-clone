import { popularAlbums } from "../../constants/popularAlbums";
import CoverList from "../shared/CoverList";

export default function PopularAlbumns() {
  return <CoverList title="Popular albums" list={popularAlbums} type="album" />;
}
