const { categories } = require("../db")

exports.Query={
    hello:()=>{
        return 'world!'
    },
    numberOfAnimals:()=>{
        return 30
    },
    yellow:()=>{
        return ['11','null','shsh']
    },
    products:(parent,args,{data})=>{
        return data
    },
    product:(parent,args,{data})=>{


        return data.find(item=>item.id ===args.id)
    },
    categories:(parent,args,context)=>categories,
    category:(parent,args,context)=>{
        const{id}=args
        
        return categories.find(c=>c.id===id)

    }
}