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

  public dequeue (): string {
    return this.items.shift()
  }

  public front (): string {
    return this.items[0]
  }

  public isEmpty (): boolean {
    return this.items.length === 0
  }

  public size (): number {
    return this.items.length
  }

  public printEmail (email: string): any {
    return this.items.indexOf(email)
  }

  public print (): string {
    return this.items.toString()
  }

  public printGenre (genre: string): any {
    return this.items.map(e => e === genre)
  }
}

export default new Queue()
