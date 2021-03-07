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
<Head>コンポーネントは<head>タグに変換される
ページ事に設定できるのでSEO的にGood
document.jsで細かい設定がある
https://nextjs.org/docs/advanced-features/custom-document

## imageファイルはpublic直下で管理する
- publicを内の画像を参照する
- publicをルートしてルートパスで記述する

## css
upport for styled-jsx が初期で用意されている<br>
Layout Componentを作成する。全てのコンポーネントをラップするコンポーネント
-　Create a top-level 「components」directoryを作成する
-　layout.module.css　を作成する（必ず拡張子は.module.cssとする）
-　create a file called pages/_app.js(全てのコンポーネントでCSSを読み込む)
 - _app.jsは特殊なファイルでRouteコンポーネントをラップする
 - 全ページ共通して実行させたいファイルを読み込む
 - 全ページ共通して実行させたい処理を実行する
 - 全ページ共通のレイアウトを組み込む
- gloalCSSは必ず_app.jsから読み込む
　- top-levelに「styles」directoryを作成して、gloabal.cssを作成する
 - _app.jsにインポートする
 
Component,pageProps を受け取る
ComponentをJSXで返して、pagePropsを返却する
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


## まとめ
layoutコンポーネントで全体をラップする
CSS Moduleを読み込んで適用
CSS Moduleのクラス名は自動でユニークな名前に変換される








