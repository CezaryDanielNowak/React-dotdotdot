var React = require('react');
var ReactDOM = require('react-dom');
var clamp = require('./clamp.js');
var PropTypes = React.PropTypes;
/**
 * multuline text-overflow: ellipsis
 */
function Dotdotdot() {
  if(!(this instanceof Dotdotdot)) {
    throw new TypeError("Cannot call a class as a function");
  }
  this.update = this.update.bind(this);
}

Dotdotdot.prototype = Object.create(React.Component.prototype);
Dotdotdot.prototype.componentDidMount = function() {
  this.dotdotdot(ReactDOM.findDOMNode(this.refs.container));
  window.addEventListener('resize', this.update, false);
};
Dotdotdot.prototype.componentWillUnmount = function() {
  window.removeEventListener('resize', this.update, false);
};
Dotdotdot.prototype.componentDidUpdate = function() {
  this.dotdotdot(ReactDOM.findDOMNode(this.refs.container));
};

Dotdotdot.prototype.dotdotdot = function(container) {
  if (this.props.clamp) {
    if (container.length) {
      throw new Error('Please provide exacly one child to dotdotdot');
    }

    clamp(container, {
      clamp: this.props.clamp,
      truncationChar: this.props.truncationChar
    });
  }
};
Dotdotdot.prototype.update = function() {
    this.forceUpdate();
};

Dotdotdot.prototype.render = function() {
  return React.createElement(
    "div",
    { ref: "container", className: this.props.className },
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
  truncationChar: PropTypes.string,
  className: PropTypes.string
};

Dotdotdot.defaultProps = {
  truncationChar: '\u2026'
};

module.exports = Dotdotdot;
