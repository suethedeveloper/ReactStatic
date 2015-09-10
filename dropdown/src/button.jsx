var React = require('react');


module.exports = React.createClass({
  // handleClick: function(){
  //   alert("button clicked");
  // },
  // handleChange: function(){
  //   alert("button changed");
  // },
  // handleKeyPress: function(){
  //   alert("button handleKeyPress");
  // },  
  render: function() {
    return (
      <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
        {this.props.title} 
        <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
      </button>
    )
  }
});

      // <input onChange={this.handleChange}></input>
      // <input onKeyPress={this.handleKeyPress}></input>