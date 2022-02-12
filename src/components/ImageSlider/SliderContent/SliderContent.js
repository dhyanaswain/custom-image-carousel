import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

const SliderContent = (props) => {
	return (
		<>
			<Styled.SliderContent {...props} className="SliderContent">
				{props.children}
			</Styled.SliderContent>
		</>
	)
}

SliderContent.propTypes = {
	children: PropTypes.any,
}

export default SliderContent
