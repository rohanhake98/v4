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

	// Animation Variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className='works' id='works'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='heading'>
					<p className='heading-sub-text'>What I've built</p>
					<p className='heading-text'>Projects</p>
				</motion.div>

				{/* Carousel Section */}
				<motion.div
					className='works-carousel-wrapper'
					ref={carouselRef}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						whileTap={{ cursor: "grabbing" }}
						className='works-carousel-inner'
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{DataAnalyticsProjects.map((w, index) => (
							<motion.div
								key={index}
								className="work-item-wrapper"
								variants={itemVariants}
							>
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
						{/* Previous Button */}
						<button
							className="modal-nav-btn prev"
							onClick={(e) => {
								e.stopPropagation();
								const currentIndex = DataAnalyticsProjects.findIndex((p) => p.title === selectedProject.title);
								const prevIndex = currentIndex === 0 ? DataAnalyticsProjects.length - 1 : currentIndex - 1;
								setSelectedProject(DataAnalyticsProjects[prevIndex]);
							}}
						>
							&#8249;
						</button>

						<motion.div
							className="project-modal-content"
							key={selectedProject.title} // Re-render animation on change
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -50, opacity: 0 }}
							transition={{ duration: 0.3 }}
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

						{/* Next Button */}
						<button
							className="modal-nav-btn next"
							onClick={(e) => {
								e.stopPropagation();
								const currentIndex = DataAnalyticsProjects.findIndex((p) => p.title === selectedProject.title);
								const nextIndex = currentIndex === DataAnalyticsProjects.length - 1 ? 0 : currentIndex + 1;
								setSelectedProject(DataAnalyticsProjects[nextIndex]);
							}}
						>
							&#8250;
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Works;
