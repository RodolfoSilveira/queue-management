class Queue {
  private items = []

  public enqueueUser (element: any): any {
    this.items.push(element)

    return this.items.map((e: any): any => e)
  }

  public enqueue (element: any): any {
    this.items.push(element)

    return this.items.map((e: any, i:number): number => i)
  }

  public dequeue (): any {
    return this.items.shift()
  }

  public front (): any {
    return this.items[0]
  }

  public isEmpty (): any {
    return this.items.length === 0
  }

  public size (): any {
    return this.items.length
  }

  public printEmail (email: string): any {
    return this.items.findIndex(e => e.email === email)
  }

  public print (): any {
    return this.items.toString()
  }
}

export default new Queue()
