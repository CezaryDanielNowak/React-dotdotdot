import React, {PropTypes, Component, findDOMNode} from 'react/addons'
import clamp from 'clamp-js'
let id = 0

export default class Dotdotdot extends Component {
  /**
   * multuline text-overflow: ellipsis
   */
  static propTypes = {
    children: PropTypes.node,
    clamp: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]).isRequired,
    ellipsis: PropTypes.string
  }

  static defaultProps = {
    ellipsis: '\u2026'
  }

  constructor(props) {
    super(props)
    this.id = ++id
  }

  componentDidMount() {
    if (this.props.clamp) {
      this.dotdotdot()
    }
  }

  dotdotdot() {
    let container = findDOMNode(this.refs.container)
    if (container.length) {
      /* eslint-disable */
      console.warn('Please provide exacly one child to dotdotdot')
      /* eslint-enable */
      return
    }

    clamp(container, {
      clamp: this.props.clamp,
      truncationChar: this.props.ellipsis
    })
  }

  render() {
    return (
      <div ref="container">
        {this.props.children}
      </div>
    )
  }
}
