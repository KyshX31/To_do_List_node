// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Import MongoClient from mongodb package
import { MongoClient } from "mongodb";

// Get the connection string from environment variables
const uri = process.env.MONGO_CONN_STR;
console.log("MongoDB Connection String ❤️❤️❤️❤️:", uri);

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the database
async function connectToDatabase() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
  // finally {
  //   // Close the connection
  //   await client.close();
  // }
}

// Call the function to connect to the database
connectToDatabase();
