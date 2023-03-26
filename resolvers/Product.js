const { categories } = require("../db");


exports.Product={
    category:(parent,args,context)=>{
        console.log(parent.id);
const productId =parent.id
return categories.find(cat=>cat.id ===productId)

    }
}