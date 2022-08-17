
# CRUD de Usuário

Projeto para criação, edição e deleção de usuários utilizando as tecnologias:

• nodeJS + Express

• PostgreSQL

• TypeScript

• TypeORM

• UUID & BCRYPT
# Documentação da API

## Criação de Usuário

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do usuário|
| `email`      | `string` | **Obrigatório**. O email do usuário|
| `age`      | `number` | **Obrigatório**. A idade do usuário|
| `password`      | `string` | **Obrigatório**. A senha do usuário |

## Retorna todos os usuários

```http
  GET /users
```
#### Exemplo de Retorno:
```json
[
	{
		"id": "13d7179c-d266-4f0a-b82d-db82cc7875a9",
		"name": "Saulo",
		"email": "saulo@saulo.com",
		"password": "$2b$10$UAh44xsKFAoF9xDh5AwTdOu2Z3nJC1kK3glNoy8.rBPJ.ZiTg9Y3q",
		"age": 26,
		"created_at": "2022-08-17T12:33:03.155Z",
		"updated_at": "2022-08-17T14:32:12.924Z"
	},
	{
		"id": "77d9acc8-2e6b-4f25-8b09-1e8e8d5e144a",
		"name": "Saulo2",
		"email": "saulo@saulo.com.br",
		"password": "$2b$10$2PcLO0de.qfexxtiPuHk2u4h.6aHBZRs2sm00sIvwrUX2U7xkskTu",
		"age": 26,
		"created_at": "2022-08-17T14:45:51.198Z",
		"updated_at": "2022-08-17T14:45:51.198Z"
	}
]
```

## Retorna um usuário baseado no ID

```http
  GET /users/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário que você quer |

#### Exemplo de Retorno - Sucesso (200):
```json
	{
		"id": "13d7179c-d266-4f0a-b82d-db82cc7875a9",
		"name": "Saulo",
		"email": "saulo@saulo.com",
		"password": "$2b$10$UAh44xsKFAoF9xDh5AwTdOu2Z3nJC1kK3glNoy8.rBPJ.ZiTg9Y3q",
		"age": 26,
		"created_at": "2022-08-17T12:33:03.155Z",
		"updated_at": "2022-08-17T14:32:12.924Z"
	}
```
#### Exemplo de Retorno - Erro (404):
```json
	{
        "message": "Usuário não existe."
	}
```


## Atualiza um usuário baseado no ID

```http
  PATCH /users/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário que você quer editar |
| `name`      | `string` | **Opcional**. O nome do usuário |
| `email`      | `string` | **Opcional**. O email do usuário|
| `password`      | `string` | **Opcional**. A senha do usuário |
| `age`      | `number` | **Opcional**. A idade do usuário |

#### Exemplo de Retorno - Sucesso (200):
```json
	{
        "message": "Usuário atualizado."
	}
```
#### Exemplo de Retorno - Erro (404):
```json
	{
        "message": "Usuário não existe."
	}
```

## Deleta um usuário baseado no ID

```http
  DELTE /users/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário que você quer editar |


#### Exemplo de Retorno - Sucesso (200):
```json
	{
        "message": "Usuário deletado."
	}
```
#### Exemplo de Retorno - Erro (404):
```json
	{
        "message": "Usuário não existe."
	}
```