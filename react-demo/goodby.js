let goodbye  = React.createClass({

  render: () => {
    return  React.createElement('h1', null, "Well see ya" )
  }
})

ReactDOM.render (
  React.createElement(goodbye),
  document.getElementById('goodbye')
)
