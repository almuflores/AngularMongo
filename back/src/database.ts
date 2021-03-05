import { connect } from 'mongoose'

export async function startConnection() {
    //la base de datos se llama mean-gallery
    const db = await connect('mongodb://localhost/mean-gallery',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
