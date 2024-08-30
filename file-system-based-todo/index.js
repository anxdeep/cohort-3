const express = require("express")
const fs = require("fs")

const app = express()
const port = 3000
let id = 1

app.use(express.json())

app.get("/", function(req,res){
    fs.readFile("todos.txt", "utf-8", (err, data)=>{ // async function
        if(err){
            console.log(err) // log the error so we know what went wrong
            res.status(500).send("An error has occured while reading the file!")
            return // so the next piece of code isn't executed
        }
        res.send(data)
    })
})

app.post("/", (req,res)=>{
    const todo = req.body
    todo.id = id // adding an id so user can delete a todo using it
    // console.log(todo)
    fs.readFile("todos.txt", "utf-8", (err, data)=>{ // in readFile the data is read as a string so can't use .push() directly
        let todos = []
        if(err){
            console.log(err)
            return res.status(500).send("Error reading file")
        }
        if(data.length > 0){ // without it, get an error when file is empty and we try to parse an empty or invalid JSON
            todos = JSON.parse(data) // converts data from string to an array
        }
       
        // todos.push(JSON.parse(data)) // this pushes the parsed data as a single element to the todos array, use the above line of code instead
        // todos = todos.push(todo) // push returns the length of the new array so assigning it to todos will assign length not the content
        todos.push(todo)
        // console.log(todos)

        fs.writeFile("todos.txt", JSON.stringify(todos), (err) => { // writeFile expects a string but req.body is an object so use stringify
            // writeFile is inside the readFile function to avoid it being executed before readFile completes as they are async functions
            if(err){
                console.log(err)
                res.status(400).send("Error writing to file")
                return
            }
            res.status(200).send("Added todo!")
        })
        id++;   
    }) 
})

app.delete("/:todoId", (req,res)=>{
    const todoId = parseInt(req.params.todoId, 10)
    let todos = []
    fs.readFile("todos.txt", "utf-8", (err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error reading the file")
        }
        let todos = (JSON.parse(data))
        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == todoId){
                todos.splice(i,1)
                res.status(200).send("Successfully deleted")
            }else{
                res.send("Id not found")
            }
        }
    })
})

app.listen(port)