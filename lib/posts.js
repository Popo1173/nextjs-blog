import fs from 'fs'//パッケージ
import path from 'path'//パッケージ
import matter from 'gray-matter'

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