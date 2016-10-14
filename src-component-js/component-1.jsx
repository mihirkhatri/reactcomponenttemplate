class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows : this.props.rows,
      cols : this.props.cols
    }
  }

  render() {
    return (
      <div className={this.props.css}>
        <h1>This Board has</h1>
        <label>Rows : {this.state.rows}</label>
        <label>Cols : {this.state.cols}</label>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <div className={this.props.css}>
        This is component 2
      </div>
    );
  }
}