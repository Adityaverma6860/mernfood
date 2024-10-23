const mongoose = require('mongoose');
const mongoURI ='mongodb://Aditya_6860:Aditya6860@ac-vgu2s7a-shard-00-00.xvquyxq.mongodb.net:27017,ac-vgu2s7a-shard-00-01.xvquyxq.mongodb.net:27017,ac-vgu2s7a-shard-00-02.xvquyxq.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-10uymd-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async() =>{
  await mongoose.connect(mongoURI,{useNewURlParser: true },async(err,result)=>{
    if(err) console.log("---",err)
    else{
        console.log("connected successfully");
        const fetched_data = await mongoose.connection.db.collection("food_item");
        fetched_data.find({}).toArray( async function( err, data){
           const foodCategory = await mongoose.connection.db.collection("foodCategory");    
           foodCategory.find({}).toArray(function (err,catData){
            
           if(err) console.log(err);
            else{
                global.food_item = data;
                global.foodCategory = catData;
            }
        }) 
           if(err) console.log(err);
             else{
                 global.food_item = data;
                
            } 
            
        })
    }
});
}
module.exports = mongoDB;


