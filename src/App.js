import React, { useEffect, useState } from 'react'

import ImageSlider from './components/ImageSlider'
import Button from './components/Button'
import ModalComp from './components/Modal'

import fetchData from './Services'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	const [state, setState] = useState({
		autoPlay: 2,
		direction: 'right',
		fetchImagesData: [],
		lengthOfImageData: 0,
	})

	const { autoPlay, direction, fetchImagesData, lengthOfImageData, show } = state

	// Updating New State Object
	const upDateNewState = (newState) => {
		setState((prev) => ({ ...prev, ...newState }))
	}

	const modalHide = () => {
		upDateNewState({
			show: false,
		})
	}

	const modalAction = (e) => {
		e.preventDefault()
		let aut = 0
		let dir = ''
		e.target.elements.left.checked
			? (dir = 'left')
			: e.target.elements.right.checked
			? (dir = 'right')
			: (dir = 'right')
		e.target.elements.duration.value ? (aut = Number(e.target.elements.duration.value)) : (aut = 2)

		upDateNewState({
			autoPlay: aut,
			direction: dir,
			show: false,
		})
	}

	// Get API Response
	useEffect(() => {
		;(async function () {
			const data = await fetchData()
			upDateNewState({
				fetchImagesData: data.images,
				lengthOfImageData: data.images.length,
			})
		})()
	}, [fetchData])

	return (
		<div className="App">
			<ImageSlider slides={fetchImagesData} slidesLength={lengthOfImageData} autoPlay={autoPlay} direction={direction}>
				<Button onClick={() => upDateNewState({ show: true })}>Change Settings</Button>
				<ModalComp show={show} onSubmit={modalAction} modalHide={modalHide} />
			</ImageSlider>
		</div>
	)
}

export default App
