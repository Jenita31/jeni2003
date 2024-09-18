const express = require('express');
    const bodyParser = require('body-parser'); 
    const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/todoDB',{ useNewUrlParser: true, useUnifiedTopology: true } );
const todoSchema = new mongoose. Schema({ task: String });
app.get('/',(req,res)=>
{
    Todo.find({},(err,todos)=>
    {
    if(!err)
    {
        res.render('index',{todoList:todos});
    }
});
});
app.post('/', (req, res) => {
    const newTodo = new Todo({
    task: req.body.task });
    new Todo.save(err => {
    if (!err) {
    res.redirect('/');
    }
    });
});
app.post('/delete', (req, res) => {
    const todold = req.body.checkbox;
    Todo.findByIdAndRemove(todold, err => {
    if (!err) {
    console.log('Successfully deleted');
    res.redirect('/');
    }
    });
});
app.listen(3000,()=>{
    console.log('Server started on port 27017');
});