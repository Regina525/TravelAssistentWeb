import PropTypes from 'prop-types';
import React from 'react';
import { twMerge } from 'tailwind-merge';



const Container = ({ className, children }) => {
  return (
    <div className={twMerge('mx-auto max-w-screen-xl', className)}>
      {children}
    </div>
  )
}
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container
