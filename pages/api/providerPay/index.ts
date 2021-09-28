import { NextApiRequest, NextApiResponse } from 'next'
import { ProvidersDataAlles } from '../../../utils/providers-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(ProvidersDataAlles)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(ProvidersDataAlles)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
