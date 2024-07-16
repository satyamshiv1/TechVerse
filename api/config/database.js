import mongoose from 'mongoose';

const dbConnect = () =>{
    mongoose.connect("mongodb+srv://satyamsingh6614:satyam@cluster1.ki5sayp.mongodb.net/satyamBlog")
    .then(() => {console.log("DB connection successfully")})
    .catch((error) => {
        console.log("DB connection me error hai")
        console.error(error);
        process.exit(1);
    })
}

export default dbConnect