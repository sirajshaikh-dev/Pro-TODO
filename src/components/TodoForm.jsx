import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
    const [todo,setTodo] =useState('')    
    const {addTodo}= useTodo()
 
    const add= (e)=>{
        e.preventDefault()
        if (!todo) return
        // addTodo({id:prev.length+1,todo:todo,completed:false})
        //The abv addTodo() can be written as;
        addTodo({todo,completed:false})
        // id already de chuke he, app.jsx k addTodo me and 
        // new syntax me field:value same h to todo:todo ko 
        //  todo b likh skte h 
        setTodo('')
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
           />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
