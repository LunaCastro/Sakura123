import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Filme from 'App/Models/Filme'
import FilmeValidator from  'App/Validators/FilmeValidator'

export default class FilmesController {
    public async index({ }: HttpContextContract) {
      const topic = await Filme.all()
      return topic
    }
  
    public async store({ request }: HttpContextContract) {
      const data = await request.validate(FilmeValidator)
      const topic = await Filme.create({ ...data })
      return topic
    }
  
    public async show({ params, response }: HttpContextContract) {
      try {
        const topic = await Filme.findOrFail(params.id)
        return topic
      } catch (error) {
        response.status(400).send("Título não encontrado!!!")
      }
    }
  
    public async update({ request, params, response }: HttpContextContract) {
      const {nome_filme} = await request.validate(FilmeValidator)
      try {
        const topic = await Filme.findOrFail(params.id)
        topic.nome_filme = nome_filme
        await topic.save()
        return topic
  
      } catch (error) {
        response.status(400).send("Tópico não encontrado!!!")
      }
    }
  
    public async destroy({ params, response }: HttpContextContract) {
      try {
        const topic = await Filme.findOrFail(params.id)
        await topic.delete()
        return topic
      } catch (error) {
        response.status(400).send("Título não encontrado!!!")
      }
    }
  }