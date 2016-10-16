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
        <h1>This is board component</h1>
        <div>Number of Rows : {this.state.rows}</div>
        <div>Number of Cols : {this.state.cols}</div>
      </div>
    );
  }
}


class Square extends React.Component {
  render() {
    return (
      <div className={this.props.css}>
        This is Square component
      </div>
    );
  }
}