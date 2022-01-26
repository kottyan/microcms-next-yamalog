import { api } from '@/libs/api'
import { GetStaticProps } from 'next'
import {
  List,
  ListItem
} from '@mui/material'
import BaseLink from '@/components/common/BaseLink'

export default function Home({ blog }) {
  return (
    <List>
      {blog.map((blog) => (
        <ListItem key={blog.id} divider={true} sx={{padding: '16px'}}>
          <BaseLink href={`/blog/${blog.id}`} text={blog.title} />
        </ListItem>
      ))}
    </List>
  )
}

// ビルド時にサーバー側でデータを取得する
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('blog')

  return {
    props: {
      blog: data.contents,
    },
  }
}
