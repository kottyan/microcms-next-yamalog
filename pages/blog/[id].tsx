import { api } from '@/libs/api'
import {
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
import {
  GetStaticProps,
  GetStaticPaths
} from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PreviewParams = {
  id: string,
  draftKey: string
}

interface Blog {
  id: string,
  title: string,
  body: string,
  publishedAt: Date
}

interface PageProps {
  blog: Blog
}

interface PageParams extends ParsedUrlQuery {
  id: string
}

export default function BlogId({ blog }: PageProps) {
  const router = useRouter()

  if(router.isFallback) {
    return (
      <div>
        準備中・・・
      </div>
    )
  }
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
export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const { data } = await api.get('blog')

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
  return { paths, fallback: true }
}

// ビルド時にサーバー側でデータを取得する
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<PageProps, PageParams> = async (context) => {
  // Type Guard
  const isPreviewParams = (value: unknown): value is PreviewParams => {
    return (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value)[0] === 'id' &&
      Object.keys(value)[1] === 'draftKey'
    )
  }

  const isPreview = context.preview === true
  let path = ''
  if(isPreview) {
    const id = isPreviewParams(context.previewData) ? context.previewData.id : ''
    const draftKey = isPreviewParams(context.previewData) ? context.previewData.draftKey : ''
    // TODO 型エラーにならない方法考える
    // if(!id || !draftKey) return { notFound: true }
    path = `/blog/${id}?draftKey=${draftKey}`
  } else {
    const id = context.params?.id ?? ''
    path = `/blog/${id}`
  }
  const { data } = await api.get(path)

  return {
    props: {
      blog: data
    }
  }
}
