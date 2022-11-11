import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Filmes extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public data: string 
 
 @column ()
 public nome_filme: string

 @column ()
 public nome_tipo: string  

 @column ()
 public avaliação_do_filme: string

 @column.dateTime ({autoCreate: true})
 public createdAt: DateTime

 @column.dateTime ({autoCreate: true, autoUpdate:true})
 public user: DateTime






} 
