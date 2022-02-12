import styled from '@emotion/styled'

export const Dot = styled.span`
	padding: 10px;
	margin-right: 5px;
	cursor: pointer;
	border-radius: 50%;
	background: ${(props) => (props.active ? `var(--black)` : `var(--white)`)};
`
export const Dots = styled.div`
	position: absolute;
	bottom: 25px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
