import React from "react";
import { Link } from "react-router-dom";

const TodoItem = props => {
  const { i } = props;
  //this.editTodo = this.editTodo.bind(this);

  const editTodo = event => {
    event.preventDefault();
    let todo = props.todo;
    if (
      event.target[0].value.length !== 0 ||
      event.target[1].value.length !== 0
    ) {
      props.todo.title = event.target[0].value;
      props.todo.content = event.target[1].value;
      props.editTodo(todo);
    }
  };

  return (
    <div style={styles.todoItem}>
      <span style={styles.rowNumber}>{props.lineNumber}</span>
      <span
        style={styles.text}
        className={!props.todo.complete ? "" : "complete"}
      >
        {props.todo.title}
      </span>
      <button onClick={props.deleteTodo}>x</button>

      <Link
        to={{
          pathname: `/editTodo/${props.todo.id}`,
          title: props.todo.title,
          content: props.todo.content,
          editTodo: event => editTodo(event)
        }}
      >
        <button> edit todo</button>
      </Link>

      <input
        style={styles.complete}
        onChange={event => props.toggleTodoComplete(event, i)}
        type="checkbox"
        complete={props.complete}
      />
    </div>
  );
};

const styles = {
  todoItem: {
    position: "relative",
    borderBottom: "2px solid aquamarine",
    backgroundColor: "azure",
    color: "#222",
    padding: 10
  },
  rowNumber: {
    color: "darkcyan",
    marginRight: 20
  },
  text: {
    fontWeight: "bold",
    padding: 10
  },
  complete: {
    padding: 10
  }
};

export default TodoItem;
