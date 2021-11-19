import { client } from "../../libs/client"
import { queryToString } from "../../utils/common"
import styles from '../../styles/Home.module.scss'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// ビルド時にサーバー側でデータを取得する
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = queryToString(params.id)
  const data = await client.get({ endpoint: "blog", contentId: id})

  return {
    props: {
      blog: data,
    },
  }
}
