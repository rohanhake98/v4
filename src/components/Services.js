import React from 'react';
import "../styles/Services.css"
import { IoStatsChart } from "react-icons/io5"
import { BiData } from "react-icons/bi"
import { MdDashboard } from "react-icons/md"
import { motion } from "framer-motion";

const Services = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    }

    return (
        <>
            <div className="services" id='services'>
                <div className="container">
                    <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
                        <p className="heading-sub-text">What I can do</p>
                        <p className='heading-text'>Services</p>
                    </motion.div>
                    <motion.div className="services-box" whileInView={fade} initial={{ opacity: 0 }}>
                        <div className="services-card">
                            <BiData className='services-icon' />
                            <p className='services-title'>Data Analysis</p>
                            <p className='services-desc'>I clean, validate, and analyze large-scale datasets using SQL, Python, and Excel to identify trends, patterns, and business-relevant insights that support decision-making.</p>
                        </div>
                        <div className="services-card">
                            <MdDashboard className='services-icon' />
                            <p className='services-title'>Dashboard Development</p>
                            <p className='services-desc'>I build interactive, stakeholder-ready dashboards using Power BI and Tableau, with clear KPIs, visualizations, and insights tailored to business objectives.</p>
                        </div>
                        <div className="services-card">
                            <IoStatsChart className='services-icon' />
                            <p className='services-title'>Business Intelligence</p>
                            <p className='services-desc'>I translate complex analytical findings into structured reports and data stories,  helping teams understand performance metrics and make data-driven strategic decisions.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Services;
