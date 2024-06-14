import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <input type="button" name="increment" value="+" onClick={this.props.add} />
        <input type="button" name="decrement" value="-" onClick={this.props.idd} />
      </div>
    );
  }
}

export default Header;

