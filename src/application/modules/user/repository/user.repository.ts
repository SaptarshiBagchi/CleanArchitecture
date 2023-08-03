import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import { type Filter, type Collection, type Document } from 'mongodb'
import { type User } from '@domain/user'

interface UserDocument extends Document, User {}

export interface IUserRepository {
  find: (filterQuery: Filter<Document>) => Promise<UserDocument[]>
}

class UserRepository implements IUserRepository {
  collection: Collection<UserDocument>
  constructor() {
    this.collection = dbConnection.getCollection<UserDocument>('users')
  }

  find = async (filterQuery: Filter<Document>): Promise<UserDocument[]> => {
    const result = await this.collection.find(filterQuery).toArray()
    return result
  }
}

export default new UserRepository()
