/**
 * Created by xu on 2014/7/24.
 */
var express = require("express");
var path = require("path");

var mongoose = require("mongoose");
/*
mongoose.connect("mongodb://127.0.0.1/myself",function(err){
    if(err){
        console.log("数据库连接失败！\n"+err);
        process.exit(1);
    }
});

var Schema=mongoose.Schema;
var ObjectId= Schema.ObjectId;
var Book = new Schema({
    name:{type:String},
    owner:{type:ObjectId},
    describe:{type:String}
});
mongoose.model("book",Book);
var Book = mongoose.model("book");

var book1 = new Book({name:"深入浅出nodejs",describe:"好书"});
book1.save();
*/
var app = express(function(){

});

app.use('/public',express.static(path.join(__dirname,'public')));
//console.log(app.locals);
app.set("views",path.join(__dirname,"view"));
app.set("view engine","html");//这是设置默认引擎扩展名的，也就是说如果不写扩展名，默认添加的扩展名
app.engine("html",require("ejs").renderFile);//这才是真正的设置模板引擎


app.get("/", function (req, res) {
   res.sendfile("view/myresume.html");
}).listen(3000);
app.get("/renderCallback",function(req,res){
    res.render("hello", function (err, html) {//写了回调就不会直接返回html了，给了自己操作html的空间
        console.log(html);
        res.send(html);
    });
});
app.get("/readbook", function (req, res) {
    res.render("hello");
});
//设置相同的路由，后面都不会覆盖前面的
app.get("/readbook", function (req, res) {
    Book.find({name:"深入浅出nodejs"},["name","describe"],function(err,docs){
        var books={books:docs};
        console.log(books);
        res.render("bookDbTest",books);
    });
});