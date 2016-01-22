var React = require('react');
var ReactDOM = require('react-dom');
var clamp = require('clamp-js');
var PropTypes = React.PropTypes;


function Dotdotdot() {
  /**
   * multuline text-overflow: ellipsis
   */
}

Dotdotdot.prototype = Object.create(React.Component.prototype);
Dotdotdot.prototype.componentDidMount = function() {
  console.log('componentDidMount')
  if (this.props.clamp) {
    this.dotdotdot(ReactDOM.findDOMNode(this.refs.container));
  }
};

Dotdotdot.prototype.dotdotdot = function(container) {
  if (container.length) {
    throw new Error('Please provide exacly one child to dotdotdot');
  }

  clamp(container, {
    clamp: this.props.clamp,
    truncationChar: this.props.truncationChar
  });
};

Dotdotdot.prototype.render = function() {
  return React.createElement(
    "div",
    { ref: "container" },
    this.props.children
  );
};

// Statics:
Dotdotdot.propTypes = {
  children: PropTypes.node,
  clamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired,
  truncationChar: PropTypes.string
};

Dotdotdot.defaultProps = {
  truncationChar: '\u2026'
};

module.exports = Dotdotdot;