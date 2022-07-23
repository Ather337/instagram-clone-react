import React from "react";
import PropTypes from "prop-types";

const ErrorText = ({ className, children }) => {
    return (
        <span className={className}>
            {children}
        </span>
    );
};

ErrorText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ErrorText;
