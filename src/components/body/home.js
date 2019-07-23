import React from "react";
import TodoList from "../body/todoList";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <p>Todo app with route</p>
      <p>List of todos</p>
      <TodoList
        listOfTodos={props.listOfTodos}
        toggleTodoComplete={props.toggleTodoComplete}
        deleteTodo={props.deleteTodo}
        id={props.id}
        editTodo={props.editTodo}
      />
      <p>
        todos left: {props.listOfTodos.filter(todo => !todo.complete).length}
      </p>
      <Link
        to={{
          pathname: "/addtodo"
        }}
      >
        <button> add todo</button>
      </Link>

      <div>
        {/* {props.listOfTodos.map(todo => todo.todoToShow)} */}
        <button onClick={() => props.toggleTodoToShow("all")}>all</button>
        <button onClick={() => props.toggleTodoToShow("only complete")}>
          only complete
        </button>
        <button onClick={() => props.toggleTodoToShow("active")}>active</button>
      </div>

      {/*show remove all complete todos only if they are any complete todos*/}
      {props.listOfTodos.some(todo => todo.complete) ? (
        <div>
          <button onClick={() => props.removeAllCompleteTodos()}>
            remove complete todos
          </button>
        </div>
      ) : null}

      <div>
        <button onClick={() => props.toggleTodosAllComplete()}>
          toggle all complete
        </button>
      </div>
    </div>
  );
};

export default Home;
