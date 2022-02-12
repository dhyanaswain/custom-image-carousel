import React from 'react'
import PropTypes from 'prop-types'

import { leftArrow, rightArrow } from '../../../Asset'

import * as Styled from './style'

const Arrow = (props) => {
	return (
		<>
			<Styled.Arrow onClick={props.handleClick} {...props} className="Arrow">
				{props.direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
			</Styled.Arrow>
		</>
	)
}

Arrow.propTypes = {
	direction: PropTypes.string,
	handleClick: PropTypes.func,
}

export default Arrow
