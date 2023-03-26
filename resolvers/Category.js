const { data } = require("../db")

exports.Category={
    products:(parent,args,context)=>{

const categoryId =parent.id
return data.filter(product=>product.categoryId===categoryId)

    }
}
