import React from "react";
import { FiExternalLink, FiFolder, FiGithub, FiDownload } from "react-icons/fi";
// import { Link } from "react-router-dom"; // Link unused if we use <a> tags for external links

const WorkCard = ({ w }) => {
	return (
		<div style={{ height: '100%' }}>
			<div className='works-card'>
				<div className='works-container'>
					<div className='top-work'>
						<FiFolder className='work-folder' />
						<div className='right'>
							{w.gitlink && (
								<a className='work-git' href={w.gitlink} target='_blank' rel="noreferrer" title="View Source Code">
									<FiGithub />
								</a>
							)}

							{/* Show download if app, or external link if site */}
							{w.app && (
								<a className='work-link' href={w.app} download={w.title} target='_blank' rel='noreferrer' title="Download App">
									<FiDownload />
								</a>
							)}

							{w.site && (
								<a className='work-link' href={w.site} target='_blank' rel="noreferrer" title="View Live Site">
									<FiExternalLink />
								</a>
							)}
						</div>
					</div>

					<div className='mid-work'>
						<p className='work-title'>{w.title}</p>
						<p className='work-desc'>{w.desc}</p>
					</div>

					<div className='bottom-work'>
						{w.tech.map((e, index) => {
							return <small key={index}>{e}</small>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
