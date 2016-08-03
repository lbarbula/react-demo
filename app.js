let Hello = React.createClass({
  getInitialState: function () {
    return {who: 'world'}
  },
  handler: function (event) {
    let nextState = {who: event.target.value}
    this.setState(nextState)
  },

  render: function () {
    let message;
    if (this.state.who === 'pasta') {
      message = 'I love pasta'
    } else if(this.state.who.trim() === '') {
      message ="Hello?"
    } else {
      message = 'Hello ' + this.state.who
    }
    return React.createElement('div', null,
     React.createElement('h1', null, message),
     React.createElement('input', {
       onChange: this.handler,
       type: 'text',
       value: this.state.who
     })
   )
  }
})
ReactDOM.render(
  React.createElement(Hello),
  document.getElementById('hello')
)
