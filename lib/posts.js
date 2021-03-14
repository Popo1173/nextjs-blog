import fs from 'fs'//パッケージ
import path from 'path'//パッケージ
import matter from 'gray-matter'

//レンダリングマークダウン インポート
import remark from 'remark'
import html from 'remark-html'

// Postsディレクトリを読み込む
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // fsパッケージを使って、Postsディレクトリを読み込む
  const fileNames = fs.readdirSync(postsDirectory)　//postsディレクトリ読み込み
  
  //.mapでループさせる
  const allPostsData = fileNames.map(fileName => {
    // 「.md」を削除してファイル名をそのままidにする
    const id = fileName.replace(/\.md$/, '')　
    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName)
    //UTF-8で読み込む
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 投稿メタデータセクションを解析します
    const matterResult = matter(fileContents)

    // IDと紐づける
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

//ファイル名からIDを取得する関数
export function getAllPostIds() {
  //root のpostsディクレトリパスとファイルを取得
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
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

// //getPostData関数でIDを引数にもらう
// export function getPostData(id) {
//   //path.joinはpostsDirectoryまでのパスとIDに基づいたファイルを結合
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   //.mdファイルの中身をutf-8で変数fileContentsに格納
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // メタデータを読みこんで解析して変数matterResultに格納
//   const matterResult = matter(fileContents)

//   // Combine the data with the id
//   return {
//     id,
//     ...matterResult.data
//   }
// }

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}