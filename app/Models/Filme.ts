import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Filmes extends BaseModel {
  @column({ isPrimary: true })
  public id: number

 @column ()
 public nome_filme: string

 @column ()
 public nome_tipo: string 

 @column()
 public data: string 






} 
