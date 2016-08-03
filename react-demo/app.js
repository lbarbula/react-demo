let Hello = React.createClass({
  getInitialState: function () {
    return {
      content: ''
    }
  },

  handler: function (event) {
    let nextState = {content: event.target.value}
    this.setState(nextState)
  },

  render: function () {
    let message;
    if (this.state.content.trim() === '') {
      message = 'Hello?'
    } else if (this.state.content === 'will') {
      message = 'wake up'
    } else if (this.state.content === 'pasta') {
      message = 'I love pasta'
    } else {
      message = 'Hello ' + this.state.content
    }
    return React.createElement('div', null,
    React.createElement('h1', null, message),
    React.createElement('span', null,
    React.createElement('input', {
      onChange: this.handler,
      type: 'text',
      value: this.state.content
        })
      )
    )
  }
})
  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  )
