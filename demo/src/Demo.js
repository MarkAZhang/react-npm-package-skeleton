import HelloWorld from '../../src'

import cs from './styles.css'

const Demo = () => (
  <div>
    <HelloWorld />
    <HelloWorld className={cs.demoRed} />
  </div>
)

export default Demo
