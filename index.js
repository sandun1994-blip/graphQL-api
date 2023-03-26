const {ApolloServer}=require('apollo-server')
const { data, categories, reviews } = require('./db')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { Query } = require('./resolvers/Query')
const { typeDefs } = require('./schema')


const resolvers={
    Query:Query,
    Category:Category,
    Product:Product
}
const server =new ApolloServer({typeDefs,resolvers,context:{
   data,
   categories,reviews
}

})


server.listen().then(({url})=>{
    console.log('seven'+url);
})