import { DefaultSession } from "next-auth";

interface MyUser {
  name?: string;
  email?: string;
  picture?: string;
  image?: string;
  accessToken?: string;
}

export interface MySession extends Omit<DefaultSession, "user"> {
  user?: MyUser;
}

interface Image {
  height: number | null;
  url: string | null;
  width: number | null;
}

export interface Album {
  id: string;
  name: string;
  artists: [Artist];
  images?: [Image];
  album_type?: string;
  release_date?: string;
  tracks?: {
    total: number;
    items: Track[];
  };
}

export interface Artist {
  id: string;
  name: string;
  images?: [Image];
  followers?: {
    total: number;
  };
  genres?: [string];
}

export interface Track {
  id: string;
  name: string;
  album: Album;
  artists: [Artist];
  duration_ms: number;
}

export interface PlaylistType {
  description?: string;
  id: string;
  followers?: {
    total?: number;
  };
  images?: [Image];
  name: string;
  owner?: {
    id: string;
    display_name?: string;
  };
  items?: [{ added_at: string; track: Track }];
  tracks?: {
    items?: [{ added_at: string; track: Track }];
  };
  type?: string;
  total?: number;
}

export interface SearchResults {
  albums?: {
    items: Album[];
  };
  artists?: {
    items: Artist[];
  };
  playlists?: {
    items: PlaylistType[];
  };
  tracks?: {
    items: Track[];
  };
}
