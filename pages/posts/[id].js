//meta をインポート
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>          
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        {/* divの中に postData　をHTMLとして展開する*/}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    )
  }

//getStaticPathsで動的に出す.mdの中身を返すため、静的なファイルを用意
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

//データの中身を取得する関数
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
          //オブジェクト
        postData
      }
    }
  }