import React, { useState } from 'react'
import { Modal, Form, Col, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

// import Button from '../Button'

import * as Styled from './style'

const ModalComp = (props) => {
	const [duration, setDuration] = useState('')

	return (
		<Styled.ModalWarpper>
			<Modal
				{...props}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={props.show}
				onHide={props.modalHide}
			>
				<Modal.Body>
					<Form onSubmit={props.modalaction}>
						<Form.Group as={Row} className="mb-3" controlId="duration">
							<Form.Label column sm="2">
								Duration{' '}
							</Form.Label>

							<Col sm="10">
								<Form.Control
									type="text"
									placeholder="Enter Duration Value"
									value={duration}
									onChange={(e) => setDuration(e.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="direction">
							<Form.Label column sm="2">
								Direction
							</Form.Label>
							<Col sm="10">
								<Form.Check type="radio" label="Forward" inline name="direction" id="right" />
								<Form.Check type="radio" label="Reverse" inline name="direction" id="left" />
							</Col>
						</Form.Group>

						<Button type="submit" block onSubmit={props.modalaction}>
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</Styled.ModalWarpper>
	)
}

ModalComp.propTypes = {
	children: PropTypes.any,
	show: PropTypes.bool,
	modalaction: PropTypes.func,
	modalHide: PropTypes.func,
	onSubmit: PropTypes.func,
}

export default ModalComp
