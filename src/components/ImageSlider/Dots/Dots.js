import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

const Dot = (props) => {
	return (
		<>
			<Styled.Dot {...props} />
		</>
	)
}

const Dots = (props) => {
	const { slides, activeSlide } = props
	return (
		<>
			<Styled.Dots>
				{slides.map((slide, i) => (
					<Dot key={slide + i} active={activeSlide === i} />
				))}
			</Styled.Dots>
		</>
	)
}

Dots.propTypes = {
	slides: PropTypes.array,
	activeSlide: PropTypes.number,
}

export default Dots
