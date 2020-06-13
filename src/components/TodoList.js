import React from "react";
import TodoForm from './TodoForm';
import Todo from "./Todo";

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true 
    };
    
    addTodo = todo => {
        this.setState(state => ({
          todos: [todo, ...state.todos]
        }));
    };

    toggleComplete = id => {
        this.setState(state => ({
          todos: state.todos.map(todo => {
            if (todo.id === id) {
              // suppose to update
              return {
                ...todo,
                complete: !todo.complete
              };
            } else {
              return todo;
            }
          })
        }));
      };

    updateTodoToShow = s => {
        this.setState({
          todoToShow: s
        });
      };

    handleDeleteTodo = id => {
        this.setState(state => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      };
    
    handleEdit = id => {
      };

    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
        todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
        todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
        todos = this.state.todos.filter(todo => todo.complete);
        }
        else if (this.state.todoToShow === "sortare") {
        todos = todos.sort();
        todos = this.state.todos;
        }
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete={() => this.handleDeleteTodo(todo.id)}
                        //onEdit={() => this.handleEdit(todo.id)}
                        todo={todo}
                    />
                ))}
                <div>
                To Do: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                <button onClick={() => this.updateTodoToShow("all")}>Toate</button>
                <button onClick={() => this.updateTodoToShow("active")}>De facut</button>
                <button onClick={() => this.updateTodoToShow("complete")}>Facute</button>
                </div>
                <button onClick={() => this.updateTodoToShow("sortare")}>Sorteaza(Nefunctional)</button>
            </div>

        );
    }
}