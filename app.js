var GroceryList = () => {
  let items = ['milk', 'cheese'];
  let groceries = items.map((item, i) => <GroceryListItem key={i}>{item}</GroceryListItem>)

  return (
    <div>
      {groceries}
    </div>
  );
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }


  render() {
    const boldHandler = () => {
      this.setState({
        hover: true
    })
  }

  const normalHandler = () => {
    this.setState({
      hover: false
  })
}

    let style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      <div>
        <ul>
        <li
          style={style}
          onMouseOver={boldHandler}
          onMouseOut={normalHandler}
        >
          {this.props.children}
        </li>
        </ul>
      </div>
    )
  }
}


ReactDOM.render(<GroceryList />, document.getElementById('app'))


