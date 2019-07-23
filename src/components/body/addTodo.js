import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    this.props.submitForm(event);
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
      <div className="body">
        <form onSubmit={this.submitForm}>
          <div>
            <div>
              <label>title of todo</label>
            </div>
            <div>
              <input
                name="title"
                value={this.state.title}
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
                value={this.state.content}
                onChange={event => this.contentChange(event)}
              />
            </div>
          </div>
          <div>
            <button type="submit">add todo</button>
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

export default AddTodo;
