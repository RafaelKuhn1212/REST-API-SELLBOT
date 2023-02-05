const string = 'mongodb+srv://rafarafa1212:1Lcsx35UoU30lWoc@cluster0.zzrehbw.mongodb.net/?retryWrites=true&w=majority'
import * as mongoDB from "mongodb";

export default async function connectToDatabase(dbName:string): Promise<mongoDB.Db | Error>{

return new Promise(async (resolve, reject) => {
try {

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(string)
    await client.connect();
    const db: mongoDB.Db = client.db(dbName);
    resolve(db);
    
} catch (error) {
    reject(new Error('Error Connecting to database'));
}

})


}
