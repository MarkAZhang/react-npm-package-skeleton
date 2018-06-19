import cx from 'classnames'
import cs from './styles.css'
import PropTypes from 'prop-types'
import { isObject, includes } from 'lodash'

const HelloWorld = props => (
  <div className={cx(cs.helloWorld, props.className)}>
    Hello World!!!!!
  </div>
)

HelloWorld.propTypes = {
  className: PropTypes.string,
}

export default HelloWorld
