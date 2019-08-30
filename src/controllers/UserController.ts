import { Request, Response } from 'express'
import Queue from '../services/Queue'

const randomId = function (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class UserController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { name, email, genre } = req.body

    try {
      const data = { id: randomId(1, 1000), name, email, genre }

      const user = Queue.enqueueUser(JSON.stringify(data))

      return res.send({ user })
    } catch (err) {
      return res.status(400).send({ error: 'Registration Failed' })
    }
  }
}

export default new UserController()
