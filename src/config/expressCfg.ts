import express, { Express } from 'express';
import products from '../routes/products';
import admin from '../routes/admin';
export default function appconfig(app:Express){
    
    console.log(`Configurando o express...`)
    app.use(express.urlencoded()) //Configura o express para entender URL (formulários
    app.use(express.json()) //Configura o express para entender JSON
    app.use('/products',products) //Configura o express para entender a rota /products
    app.use('/admin',admin) //Configura o express para entender a rota /admin

}