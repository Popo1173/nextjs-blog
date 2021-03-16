# nextjs-blog
公式ドキュメント:https://nextjs.org/learn/basics/create-nextjs-app

## 特徴
- 直感的なページベースのルーティングシステム（動的ルートをサポート）
- 事前レンダリング、静的生成（SSG）とサーバー側レンダリング（SSR）の両方がページごとにサポートされています
- ページの読み込みを高速化するための自動コード分割
- 最適化されたプリフェッチを使用したクライアント側ルーティング
- 組み込みのCSSとSassのサポート、および任意のCSS-in-JSライブラリのサポート
- 高速更新をサポートする開発環境
- サーバーレス関数を使用してAPIエンドポイントを構築するためのAPIルート
- 完全に拡張可能


# セットアップ
公式ドキュメントで学習するにあたりさんぷるファイルを利用している　→ https://github.com/vercel/next-learn-starter/tree/master/learn-starter<br>
```
//PJのクリエイト
npx create-next-app Your-PjName
//PJ実行
npm run dev
```

# ページ編集
inde.jsがエントリーポイントになる


# ページ編集
pagesディレクトリの下にJSファイルを作成するだけで、ファイルへのパスがURLパスになります。  
PJディレクトリ
└pages


# リンクコンポーネント
JSを利用して画面遷移することで、ブラウザがページ全体をロードせず、必要なDOMだけが描き変わる<br>
各ページはそのページに必要なものだけをロードします。<br>

- index.js にlinkコンポーネントをインポートする
- Linkコンポーネントは<a>タグの使用に似ているが、<Link href="…">して<a>内部に配置する<br>
 
```
import Link from 'next/link'
//リンクコード
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>

```


# アセット、メタデータ、CSS

## アセット
最上位ディレクトリの下で、画像などの静的アセットを提供できる。<br>
この`public`ディレクトリは`robots.txt`、Googleサイト検証やその他の静的アセットにも役立ちます。  
詳細については、[静的ファイルサービングのドキュメント](https://nextjs.org/docs/basic-features/static-file-serving)を確認してください。  

### 画像
- ユーザーの要求に応じてオンデマンドでイメージを最適化します。
- [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image)が利用できる  
- 画像は、ビューポートにスクロールされると読み込まれます。
- [自動画像最適化の詳細](https://nextjs.org/docs/basic-features/image-optimization)
PJディレクトリ  
└public  
 └ images //

```
import Image from 'next/image'

//画像ソース
const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

```

## メタデータ
```
//モジュールHeadからコンポーネントをインポート
import Head from 'next/head'

export default function ComponentName() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
```

## CSS
styled-jsxというライブラリを使用しています。(Next.jsにはstyled-jsxのサポートが組み込まれています)  
Reactコンポーネント内でCSSを記述でき、CSSスタイルのスコープが設定されます（他のコンポーネントは影響を受けません）。
```
<style jsx>{`
  …
`}</style>
```
Next.jsには、CSSとSassのサポートが組み込まれており.css、.scssファイルをインポートできます。

## ★レイアウトコンポーネント★
すべてのページで共有されるレイアウトコンポーネント  
内部にcomponents、layout.js次の内容で呼び出されるファイルを作成します。
```
export default function Layout({ children }) {
  return <div>{children}</div>
}
```
他コンポーネントでレイアウトコンポーネントをインポートして利用する
```
import Layout from '../../components/layout'
```

### layoutコンポーネントでCSSを利用する
`重要：<br>
CSSモジュールを使用するには、CSSファイル名の末尾が「.module.css」である必要があります。
同ディレクトリ内に「.module.css」を配置して利用する
`
```
//layout.module.css　インポート
import styles from './layout.module.css'

export default function Layout({ children }) {
  //スタイルを当てる場合はclassName={style.CSSクラス名}となる
  return <div className={styles.container}>{children}</div>
}
```
- CSSモジュールを利用することで、自動的に一意のクラス名を生成します。  
- CSSモジュールを使用している限り、クラス名の衝突について心配する必要はありません。
- ページごとに最小限のCSSがロードされます。これにより、バンドルサイズが小さくなります。
```<div class="layout_component_2tv34"}>{children}</div>```





##  
pages/index.js is associated with the / route.<br>
pages/posts/first-post.js is associated with the /posts/first-post route.<br>

# リンクコンポーネント
import Link from 'next/link'

# Client-Side Navigation
- Jsで画面を切り替える仕組み
- URLをきりかえてもページの再読み込みが不要
- プラウザのページ遷移よりも高速
- クライアントの状態を保って遷移

# 画像/css の管理について
- public内で画像を管理していく
- publicをルートとしたルートパスを記載していく
- robots.txtやpwaの時はjsonも入れる


# Metadata
- import Head from 'next/head' //headコンポーネント
- <Head>コンポーネントは<head>タグに変換される
- ページ事に設定できるのでSEO的にGood
- document.jsで細かい設定がある
- - https://nextjs.org/docs/advanced-features/custom-document

# imageファイルはpublic直下で管理する
- publicを内の画像を参照する
- publicをルートしてルートパスで記述する

# css
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
- 各機能事で利用する「utils.module.css」を作成する
  - 
Component,pageProps を受け取る
ComponentをJSXで返して、pagePropsを返却する
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

# まとめ
layoutコンポーネントで全体をラップする<br>
CSS Moduleを読み込んで適用<br>
CSS Moduleのクラス名は自動でユニークな名前に変換される<br>


# Pre-rendering
- 全ページprerenderする
- SSRされる
- prerender = 事前にHTMLを生成すること
- ブラウザの負荷を下げて表示を高速化
- 検索エンジンのクローラーにコンテンツを見せることができる

・Static Generation 
- buildした時にHTMLが生成される
- CDNでキャッシュされてる
- NEXTJSはこれを推奨されている
- 更新頻度が低い（ユーザー：コンテンツ　＝　１：N）　ブログ、EC、サイトなど

・Server-side Rendering
- Userがリクエスト投げた時にHTMLが生成される
- npm run dev　はSSRでレンダリングされている
- 更新頻度が高い（ユーザー：コンテンツ　＝　N：N）　SNS、チャット

画面によって、「Static Generation」と「Server-side Rendering」を使い分けることができる

## 外部データがない時
ビルド時にHTMLをレンダリング

## getStaticProps()外部データがある時
1.ビルド時にDBや外部APIからデータを取得
2.取得したデータを使ってHTMLをレンダリングする
https://nextjs.org/learn/basics/data-fetching/with-data

### getSortedPostsData()
外部データを取得する

### getStaticProps()　Static Generationで利用する
外部データを出力する（Static Generation ）

### getSortedPostsData()でデータを取得して、getStaticProps()で呼び出す。
- 外部データを取得する
- async/awaitを使って非同期処理を制御できる(export async function getStaticProps() {})
- 本番環境ではビルド時に実行される関数
- pageコンポーネントでのみ利用可能
https://nextjs.org/learn/basics/data-fetching/blog-data
- root直下にフォルダを用意しその中のデータも持ってくることができる

npm install gray-matterで、.mdデータのtitle,dataを出力し、idをURL化してくれる
getStaticPropsは、hotリロードされないのでリロードボタンを押下する必要がある

buildした時は、getStaticProps関数で、getSortedPostsData()でデータを取得する
```
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
```
## Data Fetching
### 外部APIまたはクエリデータベースを取得する
他のソースからデータをフェッチすることはできます
```
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch()でデータを取得して、awaitして取得完了したらresに入る
  const res = await fetch('..')
  // データをjsonで返す
  return res.json()
}
```

### getServerSideProps()　SSRの時に利用する
- リクエスト事に実行される関数
- ServerSideRenderingのために使う
- 外部データを取得するために使う
- async/awaitを使って非同期処理を実行できる
- pageコンポーネントでのみ使用可能
```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

### SWR
クライアントサイドレンダリングのhooks 
- Next.jsで用意されているSWRというhooks
- クライアントサイトでデータを取得するなら使用を推奨
- 取得したデータを{key:value}の形でキャッシュできる
- Real-timeでデータ更新(データの再fetch)
- JAMstack指向
https://swr.vercel.app/

## ダイナミックルーティング
ー　DynamicRoutes用ファイルを作成する
ー　ファイル名から動的なURLを作成する
ー　getStaticPathsで静的なファイルを生成する
ー　リンクする

DynamicRoutes用ファイルを作成する
ファイル名に[]を使う
└　pages/posts/[id].js
　└　https://..../pages/posts/pre-rendering
 
 {id: pre-rendering} からidをページ名にしていく
pages/posts/[id].jsを作成する


ファイル名から動的なURLを作成する
lib/posts.jsにgetStaticPaths()を追記する
プロパティには必ず「params」が必要となり、valueがオブジェクト
```
//ファイル名からIDを取得する関数
export function getAllPostIds() {
  //root のpostsディクレトリパスとファイルを取得
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  　　//配列にオブジェクトがある
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  //mapでファイル名を回す
  return fileNames.map(fileName => {
    return {
      //key params valueオブジェクト
      //.mdを削除
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
}
``` 

getStaticPathsで静的なファイルを生成する
pages/posts/[id].jsに「import { getAllPostIds } from '../../lib/posts'」をインポート
``` 
import { getAllPostIds } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,//配列にオブジェクトが入ってくる
    fallback: false　//指定がないものは404を返す（true なら事前作成したファイルを返す）
  }
}
↓pathsに入ってくるオブジェクト
[
 {params: {id: 'ssg-ssr'}},
 {params: {id: 'pre-rendering'}},
]


``` 
getAllPostIds()でファイル名からIDを取得する
```
export function getAllPostIds() {
}
```



## .mdファイルをHTML変換するあれこれを追記必要
## await とか6-1or2の動画



## 日付のフォーマット
日付をフォーマットするには、date-fnsライブラリを使用します。まず、インストールします。
`npm install date-fns`

コンポーネント直下にdate.jsコンポーントを作成する  
```
import { parseISO, format } from 'date-fns'
//分割代入させる
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
```

[id].jsに  dateコンポーネントを入れる
`import Date from '../../components/date'`
`<Date dateString={postData.date} />`として配置する
 結果：　2020-01-01 ⇨　January 1, 2020　になる


## 外部APIまたはクエリデータベースを取得する
```
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  const posts = await res.json()
  return posts.map(post => {
    return {
      params: {
        id: post.id
      }
    }
  })
}
```

getStaticPathsは、buildした時にデータを取得するが、開発環境ではbildしないため、SSと同じ動きになる　　

fallbackでfalse、404ページを返す。　　
fallbackでtureであれば、指定の画面を返すことができる。オプションが選べる。　　
```
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false　//ここ
    }
  }
```

## Catch-all Routes
動的ルートはファイル名の[]内に（...）を追加することで、すべてのパスをキャッチするように拡張できます.  
[...id].js
階層が深くできる
pages/posts/[...id].js matches /posts/a, but also /posts/a/b, /posts/a/b/c and so on.


getAllPostIds（）でファイル名を配列にする
```
//getStaticPaths、次のidようにキーの値として配列を返す必要があります。
return [
  {
    params: {
      // Statically Generates /posts/a/b/c
      //配列で階層構造する
      id: ['a', 'b', 'c']
    }
  }
  //...
]
```
[id].js →　[...id].jsにする　　
getStaticProps（）で、
```
//params.id.join('/')で連結させる
const postData = await getPostData(params.id.join('/'))
```

## APIを作成してみる
node.jsを使って作成する endポイントをつくれる
サーバーレスファンクション(firebase, AWS Lambdas)
```
//引数req, resに関数を書いていく
export default function handler(req, res) {
  // ...
}
```
reqはhttp.IncomingMessageのインスタンスであり、それに加えて、ここで確認できるいくつかのビルド済みミドルウェアです　　
resはhttp.ServerResponseのインスタンスであり、さらにここに表示されるいくつかのヘルパー関数があります。

### べからず
getStaticProps、getStaticPathsからAPIルートを描かない
└これはサーバー側で動いているため

### 動的APIルーティング
pages/api/post/[pid].jsを作成する
```
export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```
