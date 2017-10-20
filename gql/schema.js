import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from 'graphql'

const author = new GraphQLObjectType({
    name: 'author',
    description: 'the author',
    fields: () => ({
        name: {
          type: (GraphQLString),
          description: 'the author\'s name or handle'
        },
        quote: {
            type: (GraphQLString),
            description: 'the author\' fav quote'
        },
        posts: {
            type: new GraphQLList(post),
            description: 'the content',
        },
        isActive: {
            type: (GraphQLBoolean),
            description: 'if the user is still active'
        }
    })
})

const post = new GraphQLObjectType({
    name: 'post',
    description: 'each individual post',
    fields: () => ({
        author: {
          type: author,
          description: ''
        },
        title: {
            type: (GraphQLString),
            description: 'post title'
        },
        content: {
            type: (GraphQLString),
            description: 'the content'
        },
        timeStamp: {
            type: (GraphQLString),
            description: 'date time the post was created'
        },
        location: {
            type: (GraphQLString),
            description: 'coordinates of where the user was'
        }
    })
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            authors: {
               type: new GraphQLList(author),
               resolve: (root, args) => {
                   console.log(
                       'root:',
                       root,
                       'args:',
                       args
                   )
                   return null
              }
            },
            posts: {
                type: new GraphQLList(post),
                resolve: (root, args) => {
                    console.log(
                        'root:',
                        root,
                        'args:',
                        args
                    )
                    return null
                }
            }
        }
    })
})

export default schema
