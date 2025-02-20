const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/Rest')
    .then(() => console.log('DB connected'))
    .catch(()=>{console.log('DB not connected !')})



const Rest =  require('./model/db')
app.use(express.urlencoded({extended:true}));


// show 

app.get('/restaurants', async (req,res)=>{
    const rests = await Rest.find();
    res.render('rests',{rests});
})

// create 

app.get('/restaurant/new' ,(req,res)=>{
    res.render('new');
})

app.post('/restaurants', async (req,res)=>{
    const {rid, rname , ct, location, nOfT , hasOS , ohours , cn} = req.body;
    await Rest.create({rid, rname , ct, location, nOfT , hasOS , ohours , cn});
    res.redirect('restaurants');
})

// show 

app.get('/restaurants/:id', async (req,res)=>{
    const {id} = req.params;
    const rest= await Rest.findById(id);
    res.render('show',{rest});
})

// edit

app.get('/restaurants/:id/edit', async (req,res)=>{
    const {id} = req.params;
    const old = await Rest.findById(id);
    res.render('edit',{old});
})

app.post('/restaurants/:id' , async (req,res)=>{
    const {id} = req.params;
    const  {rid, rname , ct, location, nOfT , hasOS , ohours , cn}= req.body;
    await Rest.updateOne({_id:id},  {rid, rname , ct, location, nOfT , hasOS , ohours , cn} )
    res.redirect('/banks');
})


// delete
app.get('/restaurants/:id/delete', async (req,res)=>{
    const {id} = req.params;
    await Rest.deleteOne({_id:id});
    res.redirect('/restaurants');
})

// server
app.listen(4000, () => {
    console.log('server is started !')
})
