const {ApolloServer, gql}=require('apollo-server')


const data =[{
    name:'nike',
    description:'no des',
    quantity:8,
    price:8999,
    onSale:true
},{
    name:'addidas',
    description:'no des',
    quantity:8,
    price:8999,
    onSale:true
},{
    name:'puma',
    description:'no des',
    quantity:8,
    price:8999,
    onSale:true
}]
const typeDefs =gql`

type Query{
    hello:String
    numberOfAnimals:Int
    yellow:[String!]!  #if we dont null
    products:[Product],
    product(name:String!):Product
}

type Product {
    name:String!
    description:String!
    quantity:Int
    price:Float
    onSale:Boolean
}


`





const resolvers={
    Query:{
        hello:()=>{
            return 'world!'
        },
        numberOfAnimals:()=>{
            return 30
        },
        yellow:()=>{
            return ['11','null','shsh']
        },
        products:()=>{
            return data
        },
        product:(parent,args,context)=>{


            return data.filter(item=>item.name ===args.name)[0]
        }
    }
}
const server =new ApolloServer({typeDefs,resolvers

})


server.listen().then(({url})=>{
    console.log('seven'+url);
})