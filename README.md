# Lexicon Back-End
<div style="display: flex; justify-content: center; padding: 16px 0;">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</div>

API para o [Lexicon](https://github.com/dayannebugarim/lexicon), um jogo de adivinhação de palavras baseado em outros jogos do gênero, como o Wordle e Termo. 🙃

Foi utilizada a [lista de todas as palavras do português brasileiro](https://www.ime.usp.br/~pf/dicios/) disponibilizada publicamente pelo IME-USP para compor a base de dados dessa aplicação.

## Documentação da API
Todos os endpoints retornam um *JSON* com os dados no seguinte formato:
```
{
    _id: string (ObjectId),
    position: string,
    word: string,
    length: string,
}
```

#### Retorna uma palavra aleatória.
```http
    GET /word/random
```

#### Retorna uma palavra aleatória com número de caracteres específico.

```http
    GET /word/:length/random
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `length`      | `string` | **Obrigatório**. Quantidade de caracteres que a palavra deve possuir. |

#### Retorna a palavra que está em uma posição específica da lista.

```http
    GET /word/position/:position
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `position`      | `string` | **Obrigatório**. Posição de 1 a N. |

## Rodando localmente

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Crie o arquivo `.env` na raiz do projeto para armazenar as variáveis de ambiente:

`PORT`

`MONGODB_URL`

`MONGODB_USERNAME`

`MONGODB_PASSWORD`

`MONGODB_DATABASE`

`MONGODB_COLLECTION`

`FILE_PATH` (necessário para inserir os dados no banco, caminho do arquivo .txt)

## Iserção das palavras no banco
Utilize a função `wordsInsertion` que está no diretório `/utils`.