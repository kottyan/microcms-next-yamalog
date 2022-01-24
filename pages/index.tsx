import Link from 'next/link'
import { client } from '../libs/client'
import { GetStaticProps } from 'next'
import {
  List,
  ListItem
} from '@mui/material'

export default function Home({ blog }) {
  return (
    <List>
      {blog.map((blog) => (
        <ListItem key={blog.id} divider={true} sx={{padding: '16px'}}>
          <Link href={`/blog/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

// ビルド時にサーバー側でデータを取得する
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
