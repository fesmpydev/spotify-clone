import { FullScreenMiniPlayerProps } from "../../types";

import useMiniPlayer from "../../hooks/useMiniPlayer";

export default function FullScreenMiniPlayer({
  currentSong,
  songDetails,
}: FullScreenMiniPlayerProps) {
  const { handleFullScreenMiniPlayer } = useMiniPlayer();
  return (
    <section className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black z-30 transition-all duration-500 ease-linear">
      <article className="w-[90%] m-auto flex items-center justify-between pt-5">
        <span onClick={handleFullScreenMiniPlayer}>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", width: "26px" }}
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M2.793 8.043a1 1 0 0 1 1.414 0L12 15.836l7.793-7.793a1 1 0 1 1 1.414 1.414L12 18.664 2.793 9.457a1 1 0 0 1 0-1.414z"></path>
          </svg>
        </span>
        <span></span>
        <span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", width: "26px" }}
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
          </svg>
        </span>
      </article>

      <article className="w-[70%] m-auto mt-14">
        <img
          src={songDetails.cover}
          alt={songDetails.name}
          className="w-full object-contain h-full"
        />
      </article>

      <article className="w-[90%] m-auto mt-14 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-extrabold text-4xl">
            {songDetails.name}
          </h2>
          <p className="text-white font-medium text-2xl capitalize">
            artist Name
          </p>
        </div>
        <span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", width: "26px" }}
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
          </svg>
        </span>
      </article>

      <article className="w-[90%] m-auto mt-14 flex flex-col">
        <input type="range" name="" id="" />
        <div className="flex items-center justify-between">
          <span>0:00</span>
          <span>3:00</span>
        </div>
      </article>

      <article className="w-[90%] m-auto mt-14 flex items-center justify-between">
        <span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", width: "26px" }}
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M18.788 3.702a1 1 0 0 1 1.414-1.414L23.914 6l-3.712 3.712a1 1 0 1 1-1.414-1.414L20.086 7h-1.518a5 5 0 0 0-3.826 1.78l-7.346 8.73a7 7 0 0 1-5.356 2.494H1v-2h1.04a5 5 0 0 0 3.826-1.781l7.345-8.73A7 7 0 0 1 18.569 5h1.518l-1.298-1.298z"></path>
            <path d="M18.788 14.289a1 1 0 0 0 0 1.414L20.086 17h-1.518a5 5 0 0 1-3.826-1.78l-1.403-1.668-1.306 1.554 1.178 1.4A7 7 0 0 0 18.568 19h1.518l-1.298 1.298a1 1 0 1 0 1.414 1.414L23.914 18l-3.712-3.713a1 1 0 0 0-1.414 0zM7.396 6.49l2.023 2.404-1.307 1.553-2.246-2.67a5 5 0 0 0-3.826-1.78H1v-2h1.04A7 7 0 0 1 7.396 6.49z"></path>
          </svg>
        </span>

        <div className="flex items-center gap-10">
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", width: "26px" }}
              className="Svg-sc-ytk21e-0 cqasRA"
            >
              <path d="M6.3 3a.7.7 0 0 1 .7.7v6.805l11.95-6.899a.7.7 0 0 1 1.05.606v15.576a.7.7 0 0 1-1.05.606L7 13.495V20.3a.7.7 0 0 1-.7.7H4.7a.7.7 0 0 1-.7-.7V3.7a.7.7 0 0 1 .7-.7h1.6z"></path>
            </svg>
          </span>
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", width: "26px" }}
              className="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </span>
          <span>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              style={{ fill: "#fff", width: "26px" }}
              className="Svg-sc-ytk21e-0 cqasRA"
            >
              <path d="M17.7 3a.7.7 0 0 0-.7.7v6.805L5.05 3.606A.7.7 0 0 0 4 4.212v15.576a.7.7 0 0 0 1.05.606L17 13.495V20.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
            </svg>
          </span>
        </div>

        <span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            style={{ fill: "#fff", width: "26px" }}
            viewBox="0 0 24 24"
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path d="M6 2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h1v-2H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4.798l1.298-1.298a1 1 0 1 0-1.414-1.414L9.373 19l3.713 3.712a1 1 0 0 0 1.414-1.414L13.202 20H18a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H6z"></path>
          </svg>
        </span>
      </article>

      <article className="w-[90%] m-auto flex items-center justify-between mt-14">
        <span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            style={{ fill: "#fff", width: "26px" }}
            className="Svg-sc-ytk21e-0 dYnaPI"
          >
            <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
            <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
          </svg>
        </span>
        <span>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            style={{ fill: "#fff", width: "26px" }}
            className="Svg-sc-ytk21e-0 dYnaPI"
          >
            <path d="M12.875 2a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25zM10.25 3.125a2.625 2.625 0 1 1 .754 1.841L5.75 8l5.254 3.034a2.625 2.625 0 1 1-.704 1.326l-5-2.889a2.625 2.625 0 1 1 0-2.943l5-2.888a2.634 2.634 0 0 1-.051-.516zm-7.125 3.75a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25zm9.75 4.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25z"></path>
          </svg>
        </span>
      </article>
    </section>
  );
}
