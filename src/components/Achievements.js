import React from 'react';
import "../styles/Achievements.css"
import { motion } from "framer-motion";
import { CertificationsData } from "../data/WorkData";
import { FaTrophy, FaCertificate } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const Achievements = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    }

    return (
        <>
            <div className="achievements" id='achievements'>
                <div className="container">
                    <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
                        <p className="heading-sub-text">Recognitions & Skills</p>
                        <p className='heading-text'>Achievements & Certifications</p>
                    </motion.div>

                    {/* Achievements Section */}
                    <motion.div className="achievements-section" whileInView={fade} initial={{ opacity: 0 }}>
                        <h3 className="section-title"><FaTrophy /> Achievements</h3>
                        <div className="achievements-box">
                            <div className="achievement-card">
                                <div className="achievement-header">
                                    <SiCodechef className='achievement-icon' />
                                    <h4>Naukri Young Turks – Data Science & Analytics</h4>
                                </div>
                                <p className='achievement-desc'>Ranked in the <strong>top 2%</strong> among nationwide participants based on analytical problem-solving and data interpretation performance.</p>
                            </div>
                            <div className="achievement-card">
                                <div className="achievement-header">
                                    <SiCodechef className='achievement-icon' />
                                    <h4>TCS CodeVita</h4>
                                </div>
                                <p className='achievement-desc'>Successfully cleared <strong>Round 1 and Round 2</strong>, demonstrating strong programming fundamentals, logical reasoning, and problem-solving skills under time constraints.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <motion.div className="certifications-section" whileInView={fade} initial={{ opacity: 0 }}>
                        <h3 className="section-title"><FaCertificate /> Certifications</h3>
                        <div className="certifications-box">
                            {CertificationsData.map((cert, index) => (
                                <div key={index} className="certification-card">
                                    <h4>{cert.title}</h4>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <span className="cert-year">{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Achievements;
