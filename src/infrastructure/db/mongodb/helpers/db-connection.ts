import { MongoClient, type Collection } from 'mongodb'

class DbConnection {
  private url?: string
  private client?: MongoClient

  async connect(url: string): Promise<void> {
    if (!url) throw new Error('URL not found for DB')
    this.url = url
    this.client = new MongoClient(this.url)
    await this.client.connect()
  }

  async disconnect(): Promise<void> {
    await this.client?.close()
    this.client = undefined
  }

  async getCollection(name: string): Promise<Collection> {
    const db = this.client?.db()
    if (!db) {
      throw new Error('Mongodb client is not connected')
    }
    return db.collection(name)
  }
}

export default new DbConnection()
