import React from "react";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };

    this.editTodo = this.editTodo.bind(this);
  }

  editTodo(event) {
    this.props.location.editTodo(event);
    this.props.history.push("/");
  }

  titleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  contentChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  onClearForm(event) {
    event.preventDefault();
    this.setState({
      title: "",
      content: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.editTodo}>
          <div>
            <div>
              <label>title of todo</label>
            </div>
            <div>
              <input
                name="title"
                defaultValue={this.props.location.title}
                onChange={event => this.titleChange(event)}
              />
            </div>
          </div>
          <div>
            <div>
              <label>content</label>
            </div>
            <div>
              <textarea
                name="content"
                defaultValue={this.props.location.content}
                onChange={event => this.contentChange(event)}
              />
            </div>
          </div>
          <div>
            <button type="submit">edit todo</button>
          </div>
          <div>
            <button onClick={event => this.onClearForm(event)}>
              clear form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditTodo;
