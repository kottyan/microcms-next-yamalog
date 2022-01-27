import { NextApiRequest, NextApiResponse } from 'next'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({
    message: 'プレビューです！',
    timestamp: new Date().toISOString()
  })
  res.redirect('/previewTest/1')
}
