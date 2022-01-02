/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        
        /*
        
        METHOD 1
        
        let items = this.state.todos
        let item = this.state.todos[id - 1]
        item.completed = !item.completed
        items[id - 1] = item
        this.setState({items})
        
        */
        
        
        /*
        
        METHOD 2
        
        let items = this.state.todos.map(item => {
            if (item.id == id) {item.completed = !item.completed}
        }) 
        
        this.setState({items})
        
        */
        
        // METHOD 3
        // Fuck this is the most confusing syntax WTF
        // With .map, have to "return item" for each time for the new Array
        // Then have to return newState.todos to the this.setState function
        // Fucking double returns
        
        this.setState(prevState => {
            // Let us use the previous state as a parameter
            
            // .map doesn't work if you don't return a value for each callback?
            const newToDo = prevState.todos.map(item => {
                if(item.id == id) {item.completed = !item.completed}
                return item
            })
                
            // return the new state
            return {
                todos: newToDo     
            }
            
        })

        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    }
    
    console() {
        console.log("Changed!")
    }
    
    render() {
              
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
            handleChange = {this.handleChange}
            // this.console
            />)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App