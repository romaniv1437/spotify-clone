export interface Playlist {
  uri: string;
  name: string;
  description: string;
  imageUrl: string;
  owner: Owner
}

export interface Owner {
  name: string;
  uri: string;
  username: string;
}
