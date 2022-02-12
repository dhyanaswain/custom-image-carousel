import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Arrow from './Arrow'
import Dots from './Dots'
import Slide from './Slide'
import SliderContent from './SliderContent'

import * as Styled from './style'

// Get Window Width
const getWidth = () => window.innerWidth

/**
 * @function ImageSlider
 * @return {void}
 * @param {Object} props
 */

const ImageSlider = (props) => {
	const { autoPlay, direction, slides, slidesLength, children } = props

	// Create Referance Value
	const autoPlayRef = useRef()
	const transitionRef = useRef()
	const resizeRef = useRef()

	// Assign Slides Value
	const firstSlide = slides && Array.isArray(slides) && slides[0]
	const secondSlide = slides && Array.isArray(slides) && slides[1]
	const lastSlide = slides && Array.isArray(slides) && slides[slidesLength - 1]

	// Create State Object
	const [state, setState] = useState({
		activeSlide: 0,
		translate: getWidth(),
		transition: 0.45,
		createSildeValues: [lastSlide, firstSlide, secondSlide],
		show: false,
	})

	const { activeSlide, translate, transition, createSildeValues } = state

	// Updating New State Object
	const upDateNewState = (newState) => {
		setState((prev) => ({ ...prev, ...newState }))
	}

	// Create slides from API data
	useEffect(() => {
		upDateNewState({
			createSildeValues: [lastSlide, firstSlide, secondSlide],
		})
	}, [slides])

	// const hasAutoPlayBeenChanges = (d) => {
	// 	if (d === 'right') {
	// 		autoPlayRef.current = null
	// 		return () => nextSlide
	// 	} else if (d === 'left') {
	// 		autoPlayRef.current = null
	// 		return () => prevSlide
	// 	} else {
	// 		return () => nextSlide
	// 	}
	// }

	// Render for resize, smooth Transition and for Slide Direction
	useEffect(() => {
		autoPlayRef.current = direction === 'right' ? nextSlide : direction === 'left' ? prevSlide : nextSlide
		transitionRef.current = smoothSlideTransition
		resizeRef.current = handleWindowResize
	}, [autoPlayRef.current, transitionRef.current, resizeRef.current])

	// Update dender when autoPlay and referance vanue chnages
	useEffect(() => {
		const play = () => autoPlayRef.current()
		const smooth = (e) => e.target.className.includes('SliderContent') && transitionRef.current()
		const resize = () => resizeRef.current()

		let interval = null
		const transitionEnd = window.addEventListener('transitionend', smooth)
		const onResize = window.addEventListener('resize', resize)
		autoPlay !== null && (interval = setInterval(play, autoPlay * 1000))

		return () => {
			window.removeEventListener('transitionend', transitionEnd)
			window.removeEventListener('resize', onResize)
			autoPlay && clearInterval(interval)
		}
	}, [autoPlay])

	// Reset Render for next slide find
	useEffect(() => {
		transition === 0 && upDateNewState({ transition: 0.45 })
	}, [transition])

	// Resize windows to Adopt Transition
	const handleWindowResize = () => {
		upDateNewState({ translate: getWidth(), transition: 0 })
	}

	// Make smooth Transition
	const smoothSlideTransition = () => {
		let newSlideValue = []

		activeSlide === slides.length - 1
			? (newSlideValue = [slides[slides.length - 2], lastSlide, firstSlide])
			: activeSlide === 0
			? (newSlideValue = [lastSlide, firstSlide, secondSlide])
			: (newSlideValue = slides.slice(activeSlide - 1, activeSlide + 2))

		upDateNewState({
			createSildeValues: newSlideValue,
			transition: 0,
			translate: getWidth(),
		})
	}

	// Get Next Slide
	const nextSlide = (e) => {
		upDateNewState({
			activeSlide: activeSlide === slidesLength - 1 ? 0 : activeSlide + 1,
			translate: translate + getWidth(),
		})
	}

	// Get Previous Slide
	const prevSlide = (e) => {
		upDateNewState({
			activeSlide: activeSlide === 0 ? slidesLength - 1 : activeSlide - 1,
			translate: 0,
		})
	}

	return (
		<>
			<Styled.SliderCSS>
				<SliderContent translate={translate} transition={transition} width={`${getWidth() * createSildeValues.length}`}>
					{createSildeValues &&
						Array.isArray(createSildeValues) &&
						createSildeValues.map((item, index) => <Slide key={`Slide-${index}`} content={item} />)}
				</SliderContent>

				<Arrow direction="left" handleClick={prevSlide} />
				<Arrow direction="right" handleClick={nextSlide} />

				{slides && Array.isArray(slides) && <Dots slides={slides} activeSlide={activeSlide} />}
				{children}
			</Styled.SliderCSS>
		</>
	)
}

ImageSlider.propTypes = {
	children: PropTypes.any,
	autoPlay: PropTypes.number,
	slides: PropTypes.array,
	slidesLength: PropTypes.number,
	direction: PropTypes.string,
}

ImageSlider.defaultProps = {
	autoPlay: null,
}

export default ImageSlider
