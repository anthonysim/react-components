var GroceryList = () => {
  let items = ['milk', 'cheese'];
  let groceries = items.map((item, i) => <GroceryListItem key={i} grocery={item} />)

  return (
      <ul>
        {groceries}
      </ul>
  );
}

class GroceryListItem extends React.Component {
  constructor() {
    super()
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

    return (
        <li
          style={{fontWeight: this.state.hover ? 'bold' : 'normal'}}
          onMouseOver={boldHandler}
          onMouseOut={normalHandler}
        >
          {this.props.grocery}
        </li>
    )
  }
}


ReactDOM.render(<GroceryList />, document.getElementById('app'))


