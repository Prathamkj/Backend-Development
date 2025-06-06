// starting with the node js
// so after Running command npm init
// package json file has created
// package json file contains all the details regarding yourr project
//  ------
// this we copied from our node js website // docs // filesystem // filesystem
// we use callback Api's 
// yaha par humne fs module ko laa liya
// -------------------------
// HERE WE ARE USING THE FS MODULE
// -------------------------
const fs = require('fs');
// Here we learn
// writefile , appendfile , copyfile , renamefile , deletefile

// 1. fs.writeFile()
// fs.writeFile(file, data[, options], callback)
// yaha fum file bana rhe hai
fs.writeFile("hey.txt" , "Hellow this is my first file", function(err){
    if(err) console.log(err);
    // if file is not created then it will show the error
    else console.log("File created");
})

// 2. fs.appendFile()
// fs.appendFile(path, data[, options], callback)
// yaha par hum file me data append kar rhe hai
fs.appendFile("hey.txt" , " This is my Appended Message" , function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file is appended")
    }
})

// 3. rename the file
// fs.rename
fs.rename("hey.txt", "hello.txt", function(err){
    if(err) console.log(err)
    else console.log("done")
})

// 4. copy file 
// fs.copy fileee
// name , destination , call back
// fs.copyFile(src,dest[,mode],callback)
//                          path of the file
fs.copyFile("hello.txt", "./copy/NewCopyfile.txt", function(err){
    if(err) console.log(err)
    else console.log("Copied file")
})
// to get the error =>  err.message
// ==================
// 5. delete/unlink the file
// unlinkk == delete
// fs.unlink("hello.txt", function(err){
//     if(err) console.log(err)
//     else console.log("removed")
// })

// 6. Remove Directory
// ye sirf blanck folder ko hi remove karega
// fs.rmdirpath[,options], callback)
// yaha par hum -- recursive ki value true karenge
// The reason you’ve included { recursive: true } is to ensure that the directory is removed along with all of its contents in it
fs.rmdir("./copy", {recursive: true},function(err){
    if(err) console.log(err)
    else console.log("removed")
})

// to remove the directory with the content so we use -- rm --