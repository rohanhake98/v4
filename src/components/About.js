import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {

  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  }

  return (
    <>
      <div className="about" id='about'>
        <div className="container">
          <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} viewport={{ once: true }} className="heading">
            <p className="heading-sub-text">Who I am</p>
            <p className='heading-text'>About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} className="about-content">
              <p>I'm Rohan, a Data Analyst focused on transforming raw data into actionable insights that drive business decisions.</p>
              <br />
              <p>My work involves cleaning and validating datasets, performing exploratory data analysis, and building interactive dashboards using Power BI, SQL, and Python. I focus on identifying trends, patterns, and correlations in large-scale datasets, turning complex data into clear, stakeholder-ready reports.</p>
              <br />
              <p>I bring strong analytical thinking to every project, with experience in fintech compliance analysis, sustainability research, and performance tracking. My goal is to support data-driven decision-making with clarity, accuracy, and business relevance.</p>
            </motion.div>
            <motion.div initial={{ x: '50', opacity: 0 }} whileInView={horizontal} className='about-img'>
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;
