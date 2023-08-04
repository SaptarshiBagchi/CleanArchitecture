import { MongoClient, type Collection, type Document } from 'mongodb'
import env from '@main/config/env'

class DbConnection {
  private readonly url: string
  private client?: MongoClient

  constructor() {
    this.url = env.MONGO_URL
    void this.connect()
  }

  async connect(): Promise<void> {
    // if (!url) throw new Error('URL not found for DB')
    try {
      // console.log('Calling connect')
      // this.url = url
      this.client = new MongoClient(this.url)
      await this.client.connect()
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async disconnect(): Promise<void> {
    // console.log('Disconnecting')
    await this.client?.close()
    this.client = undefined
  }

  getCollection<T extends Document>(name: string): Collection<T> {
    // if (!this.client) this.connect(this.url)
    const db = this.client?.db()
    if (!db) {
      throw new Error('Mongodb client is not connected')
    }
    return db.collection<T>(name)
  }
}

export default new DbConnection()
