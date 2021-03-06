import styled from '@emotion/styled'

export const Arrow = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
	height: 50px;
	width: 50px;
	justify-content: center;
	background: var(--white);
	border-radius: 50%;
	cursor: pointer;
	align-items: center;
	transition: transform ease-in 0.1s;

	&:hover {
		transform: scale(1.1);
	}

	img {
		transform: translateX(${(props) => (props.direction === 'left' ? '-2' : '2')}px);
		pointer-events: none;

		&:focus {
			outline: 0;
		}
	}
`
