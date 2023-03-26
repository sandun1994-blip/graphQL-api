const { categories, data } = require("../db")

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
}