import styled from '@emotion/styled'

export const SliderContent = styled.div`
	transform: translateX(-${(props) => props.translate}px);
	transition: transform ease-out ${(props) => props.transition}s;
	height: 100vh;
	width: ${(props) => props.width}px;
	display: flex;
`
