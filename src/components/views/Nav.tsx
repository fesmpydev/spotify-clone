import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

export default function Nav() {
  const { openMenu, handleOpenMenu } = useMenu();

  return (
    <nav
      className={`${
        openMenu
          ? " sticky top-0 left-0 bottom-0 right-0 bg-black w-full h-screen transition-all duration-300 ease-in-out z-30"
          : "invisible h-0 transition-all duration-300 ease-in-out pointer-events-none"
      } relative`}
    >
      <ul className="w-[90%] m-auto h-full flex flex-col justify-start pt-32 gap-7">
        <span
          onClick={handleOpenMenu}
          className={`${
            openMenu
              ? "visible absolute top-5 right-5 transition-opacity opacity-100 ease-in-out duration-300"
              : "invisible absolute top-5 right-5 transition-opacity opacity-0 ease-in-out duration-100"
          }`}
        >
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            style={{ fill: "#fff", width: "26" }}
            viewBox="0 0 24 24"
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z"></path>
          </svg>
        </span>
        <li className="list-none">
          <Link
            to="/login"
            className={`${
              openMenu
                ? "text-4xl font-extrabold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-4xl font-extrabold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Log in
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="/signup"
            className={`${
              openMenu
                ? "text-4xl font-extrabold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-4xl font-extrabold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Sign up
          </Link>
        </li>
        <li
          className={`${
            openMenu
              ? "text-5xl font-extrabold pointer opacity-100 transition-opacity duration-200 ease-in-out"
              : "text-5xl font-extrabold pointer opacity-0 transition-opacity duration-200 ease-in-out"
          }`}
        >
          -
        </li>
        <li className="list-none">
          <Link
            to="#"
            className={`${
              openMenu
                ? "text-3xl font-bold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-3xl font-bold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Premium
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="#"
            className={`${
              openMenu
                ? "text-3xl font-bold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-3xl font-bold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Help
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="#"
            className={`${
              openMenu
                ? "text-3xl font-bold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-3xl font-bold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Download
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="#"
            className={`${
              openMenu
                ? "text-3xl font-bold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-3xl font-bold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Privacy
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="#"
            className={`${
              openMenu
                ? "text-3xl font-bold pointer opacity-100 transition-opacity duration-200 ease-in-out"
                : "text-3xl font-bold pointer opacity-0 transition-opacity duration-200 ease-in-out"
            }`}
          >
            Terms
          </Link>
        </li>
      </ul>
    </nav>
  );
}
