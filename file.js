const { log } = require("console")
const fs = require("fs")
//reading files
// fs.readFile('./docs/blog1.txt' , (err,data)=>{ //readFiles is asynchronous thus it doesn't block the code
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log("Hello")

//Writing files

// fs.writeFile('./docs/blog1.txt' , "Hello, world" , ()=>{
//     console.log("The file was written")
// })

// fs.writeFile('./docs/blog2.txt' , "Hello, again" , ()=>{
//     console.log("The file was written")
// })

//Directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets' , (err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder created")
    })
} else{
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })
}

//delete files

if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink('./docs/deleteme.txt' ,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}else{
    fs.writeFile("./docs/deleteme.txt", "Created file" ,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file created")
    })
}