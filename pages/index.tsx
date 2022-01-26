import { api } from '@/libs/api'
import { GetStaticProps } from 'next'
import {
  List,
  ListItem
} from '@mui/material'
import BaseLink from '@/components/common/BaseLink'

interface Blog {
  id: string,
  title: string,
  body: string,
  publishedAt: Date
}

interface PageProps {
  blogList: Blog[]
}

export default function Home({ blogList }: PageProps) {
  return (
    <List>
      {blogList.map((blog) => (
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
      blogList: data.contents,
    },
  }
}
