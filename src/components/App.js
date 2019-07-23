import React from "react";
import "./App.css";
import idGenerator from "react-id-generator";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Routes from "../components/layout/routes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      // title: "",
      // content: "",
      complete: false,
      listOfTodos: [],
      todoToShow: "all",
      toggleAllComplete: true
    };

    this.submitForm = this.submitForm.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    let todoList = this.state.listOfTodos;
    let id = this.state.id;
    let complete = this.state.complete;
    let todoToShow = this.state.todoToShow;

    if (
      event.target[0].value.length !== 0 ||
      event.target[1].value.length !== 0
    ) {
      todoList.push({
        title: event.target[0].value,
        content: event.target[1].value,
        id: idGenerator(),
        complete: this.state.complete,
        todoToShow: this.state.todoToShow
      });

      this.setState({
        listOfTodos: todoList,
        id: id,
        complete: complete,
        todoToShow: todoToShow
      });
    }
  }

  editTodo(todoToBeEdited) {
    let todos = this.state.listOfTodos;
    todos = todos.map(todo => {
      if (todo.id === todoToBeEdited.id) {
        todo.title = todoToBeEdited.title;
      }
      return todo;
    });

    this.setState({
      listOfTodos: todos
    });
  }

  toggleTodoComplete(event, i) {
    const listOfTodos = [...this.state.listOfTodos]; //copy the array
    listOfTodos[i] = {
      ...listOfTodos[i],
      complete: event.target.checked // update complete property on copied todo
    }; //copy the todo
    //console.log(listOfTodos);
    this.setState({
      listOfTodos
    });
  }

  toggleTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  removeAllCompleteTodos = () => {
    this.setState({
      listOfTodos: this.state.listOfTodos.filter(todo => !todo.complete)
    });
  };

  toggleTodosAllComplete = () => {
    this.setState({
      listOfTodos: this.state.listOfTodos.map(todo => ({
        ...todo,
        complete: this.state.toggleAllComplete
      })),
      toggleAllComplete: !this.state.toggleAllComplete
    });
  };

  deleteTodo = id => {
    this.setState({
      listOfTodos: this.state.listOfTodos.filter(todo => todo.id !== id)
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.listOfTodos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.listOfTodos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "only complete") {
      todos = this.state.listOfTodos.filter(todo => todo.complete);
    }

    //console.log(this.state.listOfTodos);
    return (
      <div className="App">
        <Header />
        <Routes
          className="route"
          listOfTodos={todos}
          title={this.props.title}
          content={this.props.content}
          id={this.props.id}
          submitForm={this.submitForm}
          editTodo={this.editTodo}
          toggleTodoComplete={this.toggleTodoComplete.bind(this)}
          toggleTodoToShow={this.toggleTodoToShow.bind(this)}
          removeAllCompleteTodos={this.removeAllCompleteTodos.bind(this)}
          toggleTodosAllComplete={this.toggleTodosAllComplete.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
