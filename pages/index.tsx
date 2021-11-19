import Link from "next/link"
import { client } from "../libs/client"
import { GetStaticProps } from 'next'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function Home({ blog }) {
  return (
    <div>
      <header>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {"Material-UI"}
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

// ビルド時にサーバー側でデータを取得する
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })

  return {
    props: {
      blog: data.contents,
    },
  }
}
