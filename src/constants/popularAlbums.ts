import { PopularAlbums } from "../types/index.d";
import { popularArtist } from "./popularArtists";

async function getSongsTotalTime(id: string): Promise<number> {
  const artist = popularArtist.find((item) => item.id === id);
  if (!artist || !artist.songs) return 0;

  let totalTime = 0;

  for (const song of artist.songs) {
    const audio = new Audio(song.path);
    await new Promise((resolve) => {
      audio.addEventListener("loadedmetadata", () => {
        const durationInMinutes = Math.floor(audio.duration / 60);
        totalTime += durationInMinutes;
        resolve(null);
      });
    });
  }

  return totalTime;
}

export const popularAlbums: PopularAlbums[] = [
  {
    id: "3",
    albumName: "Un verano sin ti",
    artistName: "Bad Bunny",
    photo: "/img/popular-albums/unveranosinti.jpeg",
    artistPhoto: "/img/popular-artists/badbunny.jpeg",
    year: 2022,
    songsQty: popularArtist.find((item) => item.id === "1")?.songs?.length ?? 0,
    songsTotalTime: getSongsTotalTime("1").then((totalTime) => totalTime),
    songs: [
      {
        id: "300",
        name: "Monaco",
        path: "/music/badbunny/monaco.mp3",
        cover: "/music/badbunny/monaco.jpeg",
      },
      {
        id: "301",
        name: "Moscow Mule",
        path: "/music/badbunny/mosco.mp3",
        cover: "/music/badbunny/mosco.jpeg",
      },
      {
        id: "302",
        name: "Titi me pregunto",
        path: "/music/badbunny/mosco.mp3",
        cover: "/music/badbunny/mosco.jpeg",
      },
    ],
  },
  {
    id: "2",
    albumName: "Manana sera bonito",
    artistName: "Karol G",
    photo: "/img/popular-albums/mananasera.jpeg",
    artistPhoto: "/img/popular-artists/karolg.jpeg",
    year: 2023,
    songsQty: popularArtist.find((item) => item.id === "2")?.songs?.length ?? 0,
    songsTotalTime: getSongsTotalTime("2").then((totalTime) => totalTime),
    songs: [
      {
        id: "200",
        name: "Provenza",
        path: "/music/karolg/provenza.mp3",
        cover: "/music/karolg/provenza.jpeg",
      },
      {
        id: "201",
        name: "Qlona",
        path: "/music/karolg/qlona.mp3",
        cover: "/music/karolg/qlona.jpeg",
      },
      {
        id: "202",
        name: "tqg",
        path: "/music/karolg/tqg.mp3",
        cover: "/music/karolg/tqg.jpeg",
      },
    ],
  },
  {
    id: "1",
    albumName: "Ferxxocalipsis",
    artistName: "Feid",
    photo: "/img/popular-albums/ferxxocalipsis.jpeg",
    artistPhoto: "/img/popular-artists/feid.jpeg",
    year: 2023,
    songsQty: popularArtist.find((item) => item.id === "3")?.songs?.length ?? 0,
    songsTotalTime: getSongsTotalTime("3").then((totalTime) => totalTime),
    songs: [
      {
        id: "100",
        name: "Luna",
        path: "/music/feid/luna.mp3",
        cover: "/music/feid/luna.jpeg",
      },
      {
        id: "101",
        name: "Yandel 150",
        path: "/music/feid/yandel150.mp3",
        cover: "/music/feid/yandel150.jpeg",
      },
      {
        id: "102",
        name: "Brickell",
        path: "/music/feid/brickell.mp3",
        cover: "/music/feid/brickell.jpeg",
      },
    ],
  },
  {
    id: "6",
    albumName: "Super Cumbias",
    artistName: "Los Angeles Azules",
    photo: "/img/popular-albums/angelesazules.jpeg",
    artistPhoto: "/img/popular-artists/losangelesazules.jpeg",
    year: 2022,
    songsQty: popularArtist.find((item) => item.id === "4")?.songs?.length ?? 0,
    songsTotalTime: getSongsTotalTime("4").then((totalTime) => totalTime),
    songs: [
      {
        id: "600",
        name: "Como te voy a olvidar",
        path: "/music/angelesazules/olvidar.mp3",
        cover: "/music/angelesazules/olvidar.jpeg",
      },
      {
        id: "601",
        name: "Entrega de amor",
        path: "/music/angelesazules/entrega.mp3",
        cover: "/music/angelesazules/entrega.jpeg",
      },
      {
        id: "602",
        name: "El liston de tu pelo",
        path: "/music/angelesazules/liston.mp3",
        cover: "/music/angelesazules/liston.jpeg",
      },
    ],
  },
  {
    id: "4",
    albumName: "El comienzo",
    artistName: "Grupo frontera",
    photo: "/img/popular-albums/elcomienzo.jpeg",
    artistPhoto: "/img/popular-artists/grupofrontera.jpeg",
    year: 2023,
    songsQty: popularArtist.find((item) => item.id === "5")?.songs?.length ?? 0,
    songsTotalTime: getSongsTotalTime("5").then((totalTime) => totalTime),
    songs: [
      {
        id: "400",
        name: "No se va",
        path: "/music/grupofrontera/vendame.mp3",
        cover: "/music/grupofrontera/vendame.jpeg",
      },
      {
        id: "401",
        name: "Un x100to",
        path: "/music/grupofrontera/unx100to.mp3",
        cover: "/music/grupofrontera/unx100to.jpeg",
      },
      {
        id: "402",
        name: "Vendame",
        path: "/music/grupofrontera/vendame.mp3",
        cover: "/music/grupofrontera/vendame.jpeg",
      },
    ],
  },
];
