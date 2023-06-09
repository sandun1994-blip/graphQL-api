const { gql } = require("apollo-server");

exports.typeDefs =gql`

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
    reviews:[Review]!
}
type Category{
    id:ID!
    name:String!
    products:[Product!]!
}


type Review{
    id:ID!
    title:String
    product:Product
}
`