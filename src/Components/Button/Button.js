import React from 'react';
import { StyledButton } from './Style';
import PropTypes from 'prop-types'
/**
 * Button Function gives Butoon Component
 * @param props.className - className of The Button
 * @param props.index    - Number of Cards add/remove based on button
 * @param props.children - Children of The button Component
 * @param props.onClick  - The function change card index
 * @param props.disabled - change the button disable property
 * @returns {JSX} - Returns respone in jsx
 */
const Button = (props) => {
    const { index, onClick, children, disabled, className } = props;
    return (
        <StyledButton
            className={className}
            onClick={() => onClick(index)}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    )
}

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    disabled: PropTypes.bool
}