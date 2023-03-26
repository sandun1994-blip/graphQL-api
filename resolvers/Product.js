const { categories } = require("../db");


exports.Product={
    category:(parent,args,{reviews})=>{
      ;
const productId =parent.id
return categories.find(cat=>cat.id ===productId)

    },
    reviews:({id},args,{reviews})=>{

        return reviews.filter(rev=>rev.id===id)
    }
}