import PrakshepImg from "../images/prakshep.png";
import TravelImg from "../images/travel.png";
import ChurnImg from "../images/churn.png";
import RetailImg from "../images/retail.png";

export const DataAnalyticsProjects = [
	{
		title: "TaskFlow",
		desc: "A productivity management tool designed to streamline task tracking and team collaboration. Features include real-time updates, kanban boards, and progress analytics to enhance workflow efficiency.",
		tech: [
			"React",
			"Node.js",
			"MongoDB",
			"Socket.io",
			"Project Management"
		],
		gitlink: "https://github.com/rohanhake98/TaskFlow",
	},
	{
		title: "Data Hackathon 2026",
		desc: "UIDAI Data Hackathon 2026 project observing Mandatory Biometric Update (MBU) compliance. Leveraged large-scale Aadhaar demographic datasets to forecast demand and optimize infrastructure readiness.",
		tech: [
			"Python",
			"Pandas",
			"Machine Learning",
			"Time Series",
			"Forecasting"
		],
		gitlink: "https://github.com/rohanhake98/data-hackethon-2026",
		image: PrakshepImg,
	},
	{
		title: "Hybrid Cloud Monitor",
		desc: "A comprehensive monitoring solution for hybrid cloud environments. Provides real-time metrics, alert systems, and resource usage visualization across AWS and on-premise servers to ensure high availability.",
		tech: [
			"Python",
			"AWS CloudWatch",
			"Docker",
			"Grafana",
			"Cloud Monitoring"
		],
		gitlink: "https://github.com/rohanhake98/hybrid-cloud-monitor",
	},
	{
		title: "Intelligent Code Assistant",
		desc: "An AI-powered coding assistant that suggests code snippets, detects bugs, and automates documentation. Built using large language models to improve developer productivity.",
		tech: [
			"Python",
			"NLP",
			"Transformers",
			"LLMs",
			"VS Code Extension"
		],
		gitlink: "https://github.com/rohanhake98/intelligent-code-assistant",
	},
	{
		title: "Automated Machine Learning App",
		desc: "A Streamlit-based AutoML application that automates the end-to-end machine learning pipeline. Users can upload datasets, perform EDA, and train multiple models with minimal coding required.",
		tech: [
			"Python",
			"Streamlit",
			"AutoML",
			"Scikit-learn",
			"Pandas"
		],
		gitlink: "https://github.com/rohanhake98/Automated-Machine-Learning-App",
	},
	{
		title: "Superstore Retail Analytics",
		desc: "Analyzed retail transaction data to evaluate market segments, product performance, and regional trends. Created a comprehensive dashboard to track sales velocity and profit margins across regions.",
		tech: [
			"Power BI",
			"SQL",
			"DAX",
			"Retail Analytics",
			"Data Visualization"
		],
		gitlink: "https://github.com/rohanhake98/Superstore-Retail-Analytics",
		image: RetailImg,
	},
	{
		title: "India Ranking React Website",
		desc: "A responsive web application visualizing various rankings and statistics of Indian states and institutions. Tailored for easy data consumption with interactive charts and sorting capabilities.",
		tech: [
			"React.js",
			"Chart.js",
			"HTML/CSS",
			"Data Visualization",
			"REST APIs"
		],
		gitlink: "https://github.com/rohanhake98/India-Ranking_React-Website",
	},
	{
		title: "Airbnb Travel Demand Analytics",
		desc: "Quantitative analysis of booking records to identify demand patterns and seasonality. Utilized SQL-driven KPI tracking and Power BI dashboards to optimize pricing strategies and understand traveler behavior.",
		tech: [
			"Python",
			"SQL",
			"Power BI",
			"Time Series",
			"Data Storytelling"
		],
		gitlink: "https://github.com/rohanhake98/Airbnb-Travel-Demand-Analytics-Performance-Dashboard",
		image: TravelImg,
	},
	{
		title: "Healthcare Analytics System",
		desc: "A robust system for managing and analyzing healthcare data. Provides insights into patient demographics, disease trends, and resource allocation to support data-driven decision-making in medical facilities.",
		tech: [
			"Python",
			"SQL",
			"Pandas",
			"Healthcare Analytics",
			"Matplotlib"
		],
		gitlink: "https://github.com/rohanhake98/Healthcare-Data-Programming-and-Analytics-System",
	},
];

export const CertificationsData = [
	{
		title: "SQL and Relational Databases 101",
		issuer: "IBM Cognitive Class",
		year: "2024",
	},
	{
		title: "Python for Data Science",
		issuer: "Udemy",
		year: "2024",
	},
	{
		title: "Introduction to SQL",
		issuer: "Simplilearn",
		year: "2024",
	},
	{
		title: "Oracle Cloud Infrastructure AI Foundations",
		issuer: "Oracle University",
		year: "2024",
	},
];

// For backwards compatibility - map main projects to the original structure
export const ReactData = DataAnalyticsProjects;
export const VueData = [];
export const ReactNativeData = [];
