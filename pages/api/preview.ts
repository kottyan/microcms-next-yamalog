import { api } from '@/libs/api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.query.id) {
    // TODO 404ページをレンダリングする
    return res.status(404).end()
  }
  const { data } = await api.get(`blog/${req.query.id}?fields=id&draftKey=${req.query.draftKey}`)
  if(!data) {
    // TODO エラーページをレンダリングする
    return res.status(401).json({ message: 'Invalid id' })
  }
  res.setPreviewData({
    id: data.id,
    draftKey: req.query.draftKey
  })
  res.redirect(`/blog/${data.id}`)
}
