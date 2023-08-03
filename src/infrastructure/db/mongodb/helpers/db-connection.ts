import { MongoClient, type Collection, type Document } from 'mongodb'

class DbConnection {
  private url?: string
  private client?: MongoClient

  async connect(url: string): Promise<void> {
    if (!url) throw new Error('URL not found for DB')
    try {
      this.url = url
      this.client = new MongoClient(this.url)
      await this.client.connect()
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async disconnect(): Promise<void> {
    await this.client?.close()
    this.client = undefined
  }

  getCollection<T extends Document>(name: string): Collection<T> {
    const db = this.client?.db()
    if (!db) {
      throw new Error('Mongodb client is not connected')
    }
    return db.collection<T>(name)
  }
}

export default new DbConnection()
