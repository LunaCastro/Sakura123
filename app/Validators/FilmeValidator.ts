import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    
    avaliacao: schema.string({}, [
      rules.required()
    ]),

    nome_filme: schema.string({}, [
      rules.required()
    ]),
    nome_tipo: schema.string({}, [
      rules.required(),
     
    ]),
    data: schema.string({}, [
      rules.required(),
      
    ])
  })
  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório par se registrar!!",
    'nome_filme.minleght': "Filme Inválido!",
    'nome_tipo.unique': "Tipo inválido! Não possui nenhum Título com esse gênero...",
    'data.unique': "Data inválida! Não existe Títulos com essa data!"
  }
}
