# vc-notitle

Gemini CLI で小説サイトの雛形を作れるかどうかのテストプロジェクトです。実用に耐えるかどうかまではテストしていません。

## 主な使用技術

- React (Vite + TypeScript)
- Material-UI (MUI)

## 主な機能

- **モダンなフロントエンド**: React, Vite, TypeScript を使用。
- **美しい UI**: Material-UI (MUI) によるコンポーネントベースの UI 構築。
- **名前変換機能**: 小説内の特定の登場人物名を、読者が設定した名前にリアルタイムで変換。
  - 設定した名前はブラウザの `localStorage` に保存され、次回アクセス時も維持されます。
  - 登場人物は最大 2 名まで、全ての小説で共通の名前が適用されます。
- **ダークモード対応**: ユーザーの好みに合わせてライト/ダークモードを切り替え可能。
- **Netlify デプロイ対応**: `netlify.toml` を含むため、Netlify へのデプロイが容易です。
- **シンプルなコンテンツ管理**: 小説データはコードベース内で直接管理。

## 始め方

### 前提条件

- Node.js (LTS 推奨)
- npm または Yarn

### インストール

1.  このリポジトリをクローンまたはダウンロードします。
    ```bash
    git clone git@github.com:kaminashinemu/vc-notitle.git
    cd <プロジェクトディレクトリ>
    ```
2.  依存関係をインストールします。
    ```bash
    npm install
    # または yarn install
    ```

### 開発サーバーの起動

プロジェクトをローカルで実行するには、以下のコマンドを使用します。

```bash
npm run dev
# または yarn dev
```

ブラウザで `http://localhost:5173` (または表示される URL) にアクセスすると、サイトが表示されます。

## 小説の追加方法

小説は、メタデータと本文の2つの部分で構成されます。

1.  **小説のメタデータを追加**: `src/novels/mock.ts` を開きます。
    `novels` 配列に新しい小説オブジェクトを追加します。`content` プロパティは不要です。

    ```typescript
    export const novels: Novel[] = [
      // 既存の小説...
      {
        id: '新しい小説のユニークなID', // 例: '3', 'my-novel-title'
        title: '新しい小説のタイトル',
        author: '著者名',
        description: '小説の簡単な説明文。',
      },
    ];
    ```

2.  **小説の本文ファイルを作成**: `src/novels/` ディレクトリの下に、上記で設定した `id` と同じ名前の新しいディレクトリを作成します。
    例: `src/novels/新しい小説のユニークなID/

    そのディレクトリ内に `content.txt` という名前のファイルを作成し、小説の本文を記述します。

    ```
    # src/novels/新しい小説のユニークなID/content.txt
    ここに小説の本文を記述します。
    登場人物の名前を変換したい箇所には、`{{char1}}` または `{{char2}}` を使用してください。
    例: {{char1}}は森の中を歩いていた。{{char2}}が彼を追いかけた。
    ```

    本文中の登場人物名は、`{{char1}}` と `{{char2}}` のプレースホルダーを使用してください。
    これらのプレースホルダーは、読者が「名前変換」ページで設定した名前に自動的に置き換えられます。

## カスタマイズ

### 共通登場人物名の変更

`src/novels/mock.ts` の `commonCharacters` 配列を編集することで、デフォルトの登場人物名やキーを変更できます。

```typescript
export const commonCharacters: Character[] = [
  { key: 'char1', defaultName: '主人公' }, // 例: '主人公' を 'あなた' に変更
  { key: 'char2', defaultName: '相棒' }, // 例: '相棒' を '親友' に変更
];
```

### サイトタイトルの変更

`src/components/Header.tsx` ファイル内の `<Typography variant="h6">` タグのテキストを変更してください。

### README ページの内容変更

`src/pages/AdminPage.tsx` ファイルを編集することで、サイトの README ページの内容をカスタマイズできます。

## デプロイ (Netlify)

このプロジェクトは Netlify でのデプロイに最適化されています。

1.  GitHub, GitLab, Bitbucket などにリポジトリをプッシュします。
2.  Netlify にログインし、「Add new site」から「Import an existing project」を選択します。
3.  リポジトリを接続し、以下のビルド設定を確認します。
    - **Build command**: `npm run build` (または `yarn build`)
    - **Publish directory**: `dist`
4.  `netlify.toml` ファイルがプロジェクトルートに存在するため、Netlify は自動的にリダイレクトルールを適用し、SPA (Single Page Application) として正しく動作します。
