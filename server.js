import express from 'express'
import bodyParser from 'body-parser'
import { graphql } from 'graphql'
import graphqlHTTP from 'express-graphql'
import { graphqlExpress } from 'graphql-server-express'
import schema from './gql/Schema'

const app = new express()
console.log(schema)

app.use('/graphql', bodyParser.json(),
    graphqlHTTP(req => ({
        schema,
        graphiql: true
    }))
)

app.listen(3000, () => {
    console.log('Express server is Running on port 3000')
})
