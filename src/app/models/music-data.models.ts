export interface Artist {
  name?: string;
  //   mbid?: string;
  //   match?: string;
  //   utl?: string;
  //   id?: number;
}

interface SiimiliarArtist {
  artist: Artist[];
}

export interface MusicData {
  siimiliarArtist: SiimiliarArtist;
}
