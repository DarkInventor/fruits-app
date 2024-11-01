import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiRes = await fetch('https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/')
    const data = await apiRes.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch fruits' })
  }
}