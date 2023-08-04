import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
const Row = ({ className, children }) => {
  return <div className={twMerge('grid gap-8 p-8', className)}>{children}</div>
}

Row.propTypes ={
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }
  

export default Row
