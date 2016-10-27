export class ChampionInfoClass {
  id: number;
  key: string;
  name: string;
  title: string;
  info: {
    attack: number;
    defense: number;
    difficulty: number;
    magic: number;
  }
}