export interface Character {
  key: string; // 例: 'char1', 'char2'
  defaultName: string; // 例: '主人公', '相棒'
}

export interface Novel {
  id: string;
  title: string;
  author: string;
  description: string;
}

// 全ての小説で共通の登場人物
export const commonCharacters: Character[] = [
  { key: 'char1', defaultName: '主人公' },
  { key: 'char2', defaultName: '相棒' },
];

export const novels: Novel[] = [
  {
    id: '1',
    title: '忘れられた森の歌',
    author: '月影 雫',
    description: '古の森に隠された、失われた歌の謎を追う少女の物語。魔法と友情が織りなす冒険。',
  },
  {
    id: '2',
    title: '時の砂時計',
    author: '星野 瞬',
    description: '時間を操る不思議な砂時計を巡る、少年と少女のSFファンタジー。過去と未来が交錯する。',
  },
];
