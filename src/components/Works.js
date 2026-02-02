import React, { useRef, useEffect, useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { DataAnalyticsProjects } from "../data/WorkData";
import WorkCard from "./WorkCard";

const Works = () => {
	const [width, setWidth] = useState(0);
	const carouselRef = useRef();

	useEffect(() => {
		const handleResize = () => {
			if (carouselRef.current) {
				// Calculate total scrollable width minus the visible width
				// innerWidth is implicitly used via offsetWidth properties, but we check constraints
				setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
			}
		};

		// Initial check
		handleResize();

		// Listener
		window.addEventListener('resize', handleResize);

		// Timeout to ensure initial layout is painted
		const timer = setTimeout(handleResize, 500);

		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(timer);
		};
	}, []);

	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<div className='works' id='works'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}
					className='heading'>
					<p className='heading-sub-text'>What I've built</p>
					<p className='heading-text'>Projects</p>
				</motion.div>

				<motion.div
					className='works-carousel-wrapper'
					ref={carouselRef}
					whileInView={fade}
					initial={{ opacity: 0 }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						whileTap={{ cursor: "grabbing" }}
						className='works-carousel-inner'
					>
						{DataAnalyticsProjects.map((w, index) => (
							<motion.div key={index} className="work-item-wrapper">
								<WorkCard w={w} tabId="projects" />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Works;
