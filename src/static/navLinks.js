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
      { label: "discover", icons: <Vibration /> },
      { label: "genres", icons: <LayersOutlined /> },
      { label: "top charts", icons: <LeakAdd /> },
      { label: "collabs", icons: <PeopleOutlined /> },
      { label: "free music", icons: <Headphones /> },
      { label: "stations", icons: <Podcasts /> },
    ],
  },
  {
    menuLabel: "your music",
    children: [
      { label: "favourites", icons: <FavoriteBorder /> },
      { label: "history", icons: <Restore /> },
    ],
  },
  {
    menuLabel: "your playlists",
    children: [
      { label: "public playlist", icons: <QueueMusic /> },
      { label: "purchased", icons: <MusicNote /> },
      { label: "my first playlist", icons: <PlaylistAdd /> },
    ],
  },
];
