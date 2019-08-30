import { Request, Response } from 'express'
import Queue from '../services/Queue'

class QueueController {
  public addToLine (req: Request, res: Response): Response {
    const { id } = req.body
    const queue = Queue
    const resp = queue.enqueue(id)

    return res.send(resp)
  }

  public findPosition (req: Request, res: Response): Response {
    const { email } = req.body

    const queue = Queue

    const user = queue.printEmail(email)

    return res.send({ user })
  }

  public showLine (req: Request, res: Response): Response {
    const queue = Queue
    const users = queue.print()

    return res.send({ users })
  }

  public filterLine (req: Request, res: Response): Response {
    return res.send()
  }

  public popLine (req: Request, res: Response): Response {
    const queue = Queue
    const user = queue.dequeue()
    return res.send(user)
  }
}

export default new QueueController()
