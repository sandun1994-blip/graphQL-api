const {ApolloServer, gql}=require('apollo-server')


const data =[{
    id:'nike',
    name:' cat nike',
    categoryId:'nike',
    description:'no des',
    quantity:8,
    price:8999,
    onSale:true
},{
    id:'addidas',
    name:'addidas',
    categoryId:'addidas',
    description:'no des',
    quantity:8,
    price:8999,
    onSale:true
},{
    id:'puma',
    name:'puma',
    categoryId:'puma',
    description:'no des',
    quantity:8,
    price:8999,
    onSale:true
}]

const categories =[{
    id:'nike',
    name:'nike',
    
},{
    id:'addidas',
    name:'addidas',
    
},{
    id:'puma',
    name:'puma',
    
}
]



const typeDefs =gql`

type Query{
    hello:String
    numberOfAnimals:Int
    yellow:[String!]!  #if we dont null
    products:[Product],
    product(id:ID!):Product
    categories:[Category!]!,
    category(id:ID!):Category
}

type Product {
    id:ID!
    name:String!
    description:String!
    quantity:Int
    price:Float
    onSale:Boolean
    category:Category
}
type Category{
    id:ID!
    name:String!
    products:[Product!]!
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


            return data.find(item=>item.id ===args.id)
        },
        categories:(parent,args,context)=>categories,
        category:(parent,args,context)=>{
            const{id}=args
            
            return categories.find(c=>c.id===id)

        }
    },
    Category:{
        products:(parent,args,context)=>{

const categoryId =parent.id
return data.filter(product=>product.categoryId===categoryId)

        }
    },
    Product:{
        category:(parent,args,context)=>{
            console.log(parent.id);
const productId =parent.id
return categories.find(cat=>cat.id ===productId)

        }
    }
}
const server =new ApolloServer({typeDefs,resolvers

})


server.listen().then(({url})=>{
    console.log('seven'+url);
})