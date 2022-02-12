import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

export const PositionButton = styled.div`
	display: flex;
	align-items: center;
	padding-left: 25px;
`
export const StyledButton = styled(Button)`
	position: absolute;
	bottom: 10px;
	font-weight: 400;
	font-size: 1rem;
	line-height: 2;
	height: 50px;
	transition: all 200ms linear;
	border-radius: 4px;
	width: 200px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	align-self: center;
	border: none;
	cursor: pointer;
	background-color: var(--white);
	color: var(--gray);
	fill: var(--gray);
	box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
	outline: 0;
	text-transform: capitalize;

	:hover {
		background-color: var(--gray);
		color: var(--white);
		fill: var(--white);
	}
`
