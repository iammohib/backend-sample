import mongoose from "mongoose";

/**
 * mongoose.set("strictQuery", false); sets Mongoose's query strictness to false.
 * This means that Mongoose will not return an error if you try to query for a
 * non-existent field. Instead, it will simply return an empty result.
 * With strict query set to true, Mongoose will return an error if you try to
 * query for a non-existent field.
 */

mongoose.set("strictQuery", false);

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log("Connected to Db:", conn.connection.host);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
};

export default connectToDb;
