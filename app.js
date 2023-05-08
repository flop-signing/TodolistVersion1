const express=require('express');
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js')
const app=express();


let items=['Buy Food','Cook Food','Eat Food'];
let workItems=[];
app.set('view engine','ejs')  // we tell our app to use EJS by using this line of code.

// create a folder which name is views and put all ejs file inside the views folder because we use view engine

// anything is valid html is also valid for EJS.So, there is no complexity.

// res.send is used to send only one piece of data but if there is needed to send multiple piece of data at a time then what should we do? Then we use res.write() method and we use res.write() multiple time.


app.use(bodyParser.urlencoded({extended:true}))   /// we told our app to use body-parser
app.use(express.static("public"))  // tell javascript to serve this static folder.


app.get('/',function(req,res)
{
    // res.render('list',{foo:'FOO'}) //render a particular page which is list.ejs page  
    

    // Format the Date and Time.

    // let today=new Date();
    // let options={
    //     weekday: 'long',
    //     day:'numeric',
    //     month:'long'

    // }

    // let day=today.toLocaleDateString("en-US",options)    //formatted the date according to the options

    let day=date.getDay();   ///export date/day form date.js by using node module.

    res.render('list',{listTitle:day,newListItems:items})
})

app.post('/',function(req,res)
{
   let item= req.body.newItem;



    // in the post request button the name of button is 'list' and the option 'value' which is comes from list title dynamically and in here if condition we grab that value to check wheather it is work list or home list or other.And after that we add this task to specific list and redirect that page.

   if(req.body.list==='Work')
   {
        workItems.push(item);
        res.redirect('/work');
   }
   else
   {
        items.push(item);
        res.redirect('/');    //redirect the home route 
   }
  

  
})


app.get('/work',function(req,res)
{
    res.render("list",{listTitle:"Work List",newListItems:workItems});
})

// app.post('/work',function(req,res)
// {
//     let item=req.body.newItem;
//     workItems.push(item);
//     res.redirect('/work');
// })



app.listen (3000,function(req,res)
{
    console.log('The server has started on port 3000');
})












// Express is not served up all the file in a project.Rather than it only serves up main access point.and also serves up views folder.And everything else it chooses to ignore.And for that reason,we need to create a folder called 'public'.Inside 'public' put css folder,javascript folder,images folder and we can tell express to serve up this public folder as a static resource.