// import React from 'react'
import PropTypes from 'prop-types'

import './GlobalStyles.scss';
function GlobalStyles({ children }) {
    // nhận 1 children duy nhất
    // return React.Children.only(children);
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles;
