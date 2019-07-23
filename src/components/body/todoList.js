import React from "react";
import TodoItem from "../body/todoItem";

const TodoList = props => {
  // let todoList = props.listOfTodos.map(todo => {
  //   return <TodoItem key={todo.id} todo={todo} />;
  // });

  return (
    <div>
      {/* <div>{todoList}</div> */}
      <ul>
        {props.listOfTodos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              lineNumber={i + 1}
              toggleTodoComplete={props.toggleTodoComplete}
              deleteTodo={() => props.deleteTodo(todo.id)}
              editTodo={props.editTodo}
              i={i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
