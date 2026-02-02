import React from "react";
import { FiExternalLink, FiFolder, FiGithub, FiDownload, FiMaximize2 } from "react-icons/fi";

const WorkCard = ({ w, onExpand }) => {
	return (
		<div style={{ height: '100%' }}>
			{/* The whole card is clickable to expand */}
			<div className='works-card' onClick={onExpand}>
				<div className='works-container'>
					<div className='top-work'>
						<FiFolder className='work-folder' />
						<div className='right'>
							{/* Stop propagation so these links don't trigger the modal if clicked directly */}
							{w.gitlink && (
								<a
									className='work-git'
									href={w.gitlink}
									target='_blank'
									rel="noreferrer"
									title="View Source Code"
									onClick={(e) => e.stopPropagation()}
								>
									<FiGithub />
								</a>
							)}

							{w.app && (
								<a
									className='work-link'
									href={w.app}
									download={w.title}
									target='_blank'
									rel='noreferrer'
									title="Download App"
									onClick={(e) => e.stopPropagation()}
								>
									<FiDownload />
								</a>
							)}

							{w.site && (
								<a
									className='work-link'
									href={w.site}
									target='_blank'
									rel="noreferrer"
									title="View Live Site"
									onClick={(e) => e.stopPropagation()}
								>
									<FiExternalLink />
								</a>
							)}

							{/* Maximize Icon to hint at expansion */}
							<span className="work-link" title="Expand Details">
								<FiMaximize2 />
							</span>
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
