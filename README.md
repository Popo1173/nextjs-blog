# nextjs-blog



##  
pages/index.js is associated with the / route.<br>
pages/posts/first-post.js is associated with the /posts/first-post route.<br>

## リンクコンポーネント
import Link from 'next/link'

## Client-Side Navigation
- Jsで画面を切り替える仕組み
- URLをきりかえてもページの再読み込みが不要
- プラウザのページ遷移よりも高速
- クライアントの状態を保って遷移

## 画像/css の管理について
public内で画像を管理していく
publicをルートとしたルートパスを記載していく
robots.txtやpwaの時はjsonも入れる


## Metadata
import Head from 'next/head' //headコンポーネント
ページ事に設定できる
document.jsで細かい設定がある
https://nextjs.org/docs/advanced-features/custom-document

## css
upport for styled-jsx が初期で用意されている
Layout Componentを作成する。全てのコンポーネントをラップするコンポーネント
-　Create a top-level directory　で作成する
-　layout.module.css　を作成する
-　create a file called pages/_app.js
 - _app.jsは特殊なファイルでRouteコンポーネントをラップする
 - 全ページ共通して実行させたいファイルを読み込む
 - 全ページ共通して実行させたい処理を実行する
 - 全ページ共通のレイアウトを組み込む

Component,pageProps を受け取る
ComponentをJSXで返して、pagePropsを返却する
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


## まとめ
layoutコンポーネントで全体をラップする
CSS Moduleを読み込んで適用
CSS Moduleのクラス名は自動でユニークな名前に変換される








