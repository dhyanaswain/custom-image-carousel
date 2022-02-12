import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton, PositionButton } from './style'

const Button = (props) => {
	const { children, onClick } = props
	return (
		<PositionButton className="position-button">
			<StyledButton className="styled-button" onClick={onClick} {...props}>
				{children}
			</StyledButton>
		</PositionButton>
	)
}

Button.propTypes = {
	children: PropTypes.any,
	onClick: PropTypes.func,
}

export default Button
