import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://manjeet0796:manjeet0796@cluster0.irnuxnb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
const dbName = "MedicalDb"; //this will be bookFairDb
const collectionName = "PatientHistory"; //this will be users   in future

const displayAll = () => {
  return client
    .connect() // to see all data in collection
    .then(() => {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      console.log("============FOUND AND CONNECTED=============");

      return collection.find().toArray();
    })
    .then((documents) => {
      console.log(documents);
    })
    .catch((err) => {
      console.log(err, "error happened");
    })
    .finally(() => {
      return client.close();
    });
};

const user = {
  name: "raj",
  age: 33,
  gender: "M",
  medicalHistory: "No previous issues",
}; //this is details sample

const insertUser = (user) => {
  return client
    .connect()
    .then(() => {
      const db = client.db(dbName);
      const collection = db.collection(collectionName); // Hardcoded user data

      return collection.insertOne(user);
    })
    .then((result) => {
      console.log("User inserted successfully:", result);
    });
};

const getUsersInfo = async () => {
  await client.connect(); // Connect to the client
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  console.log("============FOUND AND CONNECTED=============");

  const documents = await collection.find().toArray(); // Retrieve all documents
  // client.close(); // Close the client connection
  return documents; // Return the documents
};

const celling = async () => {
  const usere = await getUsersInfo();
  // return usere
  console.log(usere);
};

// celling();

export { insertUser, displayAll, getUsersInfo, celling };

// insertUser(user);
// displayAll();
