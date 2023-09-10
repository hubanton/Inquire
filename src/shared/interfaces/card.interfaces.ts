export type Tag = string;

export interface Card {
  id: number;
  title: string;
  summary: string;
  tags: Array<Tag>;
}
