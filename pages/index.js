import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

//サーバーサイドレンダリングの場合
// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData()
//   return {
//     //propsleyで「allPostsData」をオブジェクトに変換している
//     props: {
//       allPostsData
//     }
//   }
// }


//getStaticProps関数で、「getSortedPostsData()」を実行する
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    //propsleyで「allPostsData」をオブジェクトに変換している
    props: {
      allPostsData
    }
  }
}

//getSortedPostsData　を　「allPostsData」に入れて渡す
export default function Home({ allPostsData } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>あらいあらい</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* / allPostsData をmapに入れてオブジェクトを出力する　/ */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>      
    </Layout>
  )
}