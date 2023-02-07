import {
  Vibration,
  LayersOutlined,
  Podcasts,
  Headphones,
  PeopleOutlined,
  LeakAdd,
  FavoriteBorder,
  Restore,
  QueueMusic,
  MusicNote,
  PlaylistAdd,
} from "@mui/icons-material";

export const generalNavLinks = [
  {
    menuLabel: "browse music",
    children: [
      { label: "discover", icons: <Vibration />, link: "/" },
      { label: "genres", icons: <LayersOutlined />, link: "genres" },
      { label: "top charts", icons: <LeakAdd />, link: "top_charts" },
      { label: "collabs", icons: <PeopleOutlined />, link: "collabs" },
      { label: "free music", icons: <Headphones />, link: "free_music" },
      { label: "stations", icons: <Podcasts />, link: "stations" },
    ],
  },
  {
    menuLabel: "your music",
    children: [
      { label: "favourites", icons: <FavoriteBorder />, link: "favourites" },
      { label: "history", icons: <Restore />, link: "history" },
    ],
  },
  {
    menuLabel: "your playlists",
    children: [
      {
        label: "public playlist",
        icons: <QueueMusic />,
        link: "public_playlist",
      },
      { label: "purchased", icons: <MusicNote />, link: "purchased" },
      {
        label: "my first playlist",
        icons: <PlaylistAdd />,
        link: "my_first_playlist",
      },
    ],
  },
];
