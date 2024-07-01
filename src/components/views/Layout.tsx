import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import MiniPlayer from "../shared/MiniPlayer";

export default function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <MiniPlayer />
      <Outlet />
    </>
  );
}
