import PropTypes from 'prop-types';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Container from './Container';


const Col = ({className,children}) => {
  return (
    <div className={twMerge('flex flex-col gap-4', className)}>{children}</div>
  )
}
Container.propTypes ={
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Col
