import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../body/home";
import AddTodo from "../body/addTodo";
import EditTodo from "../body/editTodo";
import PageNotFound from "../body/pageNotFound";

class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Home
                  listOfTodos={this.props.listOfTodos}
                  todoToShow={this.props.todoToShow}
                  id={this.props.id}
                  toggleTodoComplete={this.props.toggleTodoComplete}
                  toggleTodoToShow={this.props.toggleTodoToShow}
                  removeAllCompleteTodos={this.props.removeAllCompleteTodos}
                  toggleTodosAllComplete={this.props.toggleTodosAllComplete}
                  deleteTodo={this.props.deleteTodo}
                  editTodo={this.props.editTodo}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/addTodo"
            render={props => {
              return <AddTodo submitForm={this.props.submitForm} {...props} />;
            }}
          />
          <Route path="/editTodo/:id" component={EditTodo} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
