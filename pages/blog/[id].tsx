import { api } from '@/libs/api'
import {
  queryToString,
  getFormattedJpTime
} from '@/utils/common'
import {
  Container,
  Typography,
  Stack
} from '@mui/material'
import {
  Edit as EditIcon
} from '@mui/icons-material'
import { GetStaticProps, GetStaticPaths } from 'next'


export default function BlogId({ blog }) {
  return (
    <Container
      sx={{
        height: '100%',
        padding: '16px'
      }}
    >
      <Typography variant="h4">
        {blog.title}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
      >
        <EditIcon />
        <Typography noWrap>
          投稿日：{getFormattedJpTime(blog.publishedAt)}
        </Typography>
      </Stack>
      {/* TODO: できればMUIコンポーネントで実装する。 */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`
        }}
        style={{ padding: '16px' }}
      />
    </Container>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('blog')

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// ビルド時にサーバー側でデータを取得する
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = queryToString(params.id)
  const { data } = await api.get(`blog/${id}`)

  return {
    props: {
      blog: data,
    },
  }
}
