const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://foodbay:XWnhlm3fSkWxJHS0@cluster0.pgm5pu4.mongodb.net/foodbaymern?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

const connectToDatabase = async() => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, res) => {
        if (err) {
            console.log("---", err);
        }
        else {
            console.log("DB is connected.");

            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( (err,data)=>{
                if(err) console.log(err);
                else {
                    global.foodItems = data;
                };
            })

            const category_data = await mongoose.connection.db.collection("food_category");
            category_data.find({}).toArray( (err,categoryData)=>{
                if(err) console.log(err);
                else {
                    global.foodCategory = categoryData;
                };
            })
        }
    });
};

module.exports = connectToDatabase;
