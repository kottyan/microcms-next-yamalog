import { api } from '@/libs/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.query.slug) {
    // TODO 404ページをレンダリングする
    return res.status(404).end()
  }
  const { data } = await api.get(`blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`)
  if(!data) {
    // TODO エラーページをレンダリングする
    return res.status(401).json({ message: 'Invalid id' })
  }
  res.setPreviewData({
    slug: data.id,
    draftKey: req.query.draftKey
  })
  // res.redirect(`/blog/${data.slug}`)
  res.writeHead(307, { Location: `/blog/${data.id}` });
  res.end('Preview mode enabled');
}
