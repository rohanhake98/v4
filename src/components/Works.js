import React, { useRef, useEffect, useState } from "react";
import "../styles/Works.css";
import { motion, AnimatePresence } from "framer-motion";
import { DataAnalyticsProjects } from "../data/WorkData";
import WorkCard from "./WorkCard";
import { FiX, FiGithub, FiExternalLink, FiDownload } from "react-icons/fi";

const Works = () => {
	const [width, setWidth] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);
	const carouselRef = useRef();

	useEffect(() => {
		const handleResize = () => {
			if (carouselRef.current) {
				setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		const timer = setTimeout(handleResize, 500);

		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(timer);
		};
	}, []);

	// Lock body scroll when modal is open
	useEffect(() => {
		if (selectedProject) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [selectedProject]);

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

				{/* Carousel Section */}
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
								{/* Pass expand handler */}
								<WorkCard
									w={w}
									onExpand={() => setSelectedProject(w)}
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Expanded Project Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						className="project-modal-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedProject(null)} // Close on backdrop click
					>
						<motion.div
							className="project-modal-content"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
						>
							<button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
								<FiX />
							</button>

							<div className="modal-header">
								<h2 className="modal-title">{selectedProject.title}</h2>
								<div className="modal-links">
									{selectedProject.gitlink && (
										<a href={selectedProject.gitlink} target="_blank" rel="noreferrer" className="modal-link-item">
											<FiGithub /> Source Code
										</a>
									)}
									{selectedProject.site && (
										<a href={selectedProject.site} target="_blank" rel="noreferrer" className="modal-link-item">
											<FiExternalLink /> Live Site
										</a>
									)}
									{selectedProject.app && (
										<a href={selectedProject.app} target="_blank" rel="noreferrer" className="modal-link-item">
											<FiDownload /> Download App
										</a>
									)}
								</div>
							</div>

							{/* Project Image */}
							{selectedProject.image && (
								<div className="modal-image-container">
									<img
										src={selectedProject.image}
										alt={selectedProject.title}
										className="modal-project-image"
									/>
								</div>
							)}

							<div className="modal-body">
								<p>{selectedProject.desc}</p>
							</div>

							<div className="modal-tech-stack">
								<h4 className="modal-tech-title">Technologies Used</h4>
								<div className="modal-tech-list">
									{selectedProject.tech.map((tech, index) => (
										<span key={index} className="modal-tech-tag">{tech}</span>
									))}
								</div>
							</div>

						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Works;
