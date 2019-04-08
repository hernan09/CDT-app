// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';

class TodoExample extends React.Component {
  constructor(props) {
    super(props);
    this.groupProps = {
      enter: true,
      exit: true,
    };
    this.state = {
      todo: '',
      todos: [
        'tarea 1',
        'tarea 2',
        'tarea 3',
      ].map((text, id) => ({ id, text })),
    };
    this.state.id = this.state.todos.length;
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(event) {
    event.preventDefault();
    this.setState({
      id: this.state.id + 1,
      todos: [
        ...this.state.todos,
        { id: this.state.id, text: this.state.todo || '-' }
      ],
      todo: '',
    });
  }

  remove(event) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== +event.currentTarget.getAttribute('data-id'))
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.add} autoComplete="off">
        <div className="col-12 mb-2">
          <TransitionGroup {...this.groupProps}>
            {this.state.todos.map(item => (
              <Fade key={item.id} collapse bottom>
                <div className="card">
                  <div style={{ color: 'black' }} className="card-body justify-content-between">
                    {item.text}
                    <button style={{ marginLeft: '20%' }}
                      data-id={item.id}
                      onClick={this.remove}
                      type="button"
                      className="btn btn-warning"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
          </TransitionGroup>
        </div>
        <div className="col-10">
          <div className="input-group mt-4 mb-1">
            <input
              type="text"
              className="form-control"
              id='todoField'
              placeholder='Todo item'
              name='todo'
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                onClick={this.add}
                className="btn btn-outline-success"
                type="button"
              >
                Add Item
              </button>
            </div>
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Item Count: {this.state.todos.length}
          </small>
        </div>
      </form>
    );
  }
}

export default TodoExample;
