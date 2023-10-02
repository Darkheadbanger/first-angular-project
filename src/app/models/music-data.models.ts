export interface Member {
  name: string;
  id: number;
}

// interface Group {
//   name: string;
//   member: Member[];
// }

export interface MusicData {
  name: string;
  id: string;
  member: Member[];
}
