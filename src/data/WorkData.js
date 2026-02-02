import PrakshepImg from "../images/prakshep.png";
import TravelImg from "../images/travel.png";
import ChurnImg from "../images/churn.png";
import RetailImg from "../images/retail.png";

export const DataAnalyticsProjects = [
	{
		title: "Project Prakshep: MBU Compliance Analytics",
		desc: "UIDAI Data Hackathon 2026 project analyzing Mandatory Biometric Update (MBU) compliance patterns using large-scale Aadhaar demographic datasets with 2M+ records per file. The project aimed to forecast demand and identify high-risk cohorts to improve infrastructure readiness.",
		tech: [
			"Python",
			"Pandas",
			"NumPy",
			"Data Analytics",
			"Machine Learning",
			"Cohort Analysis",
			"Time Series Analysis",
			"Forecasting",
		],
		gitlink: "//github.com/rohanhake98/project-prakshep",
		image: PrakshepImg,
	},
	{
		title: "Travel Demand Analytics Dashboard",
		desc: "Quantitative analysis of 50K+ booking records to identify demand patterns, seasonality, and peak travel periods with SQL-driven KPI tracking and Power BI dashboards. Helped optimize pricing strategies by identifying booking spikes and cancellation trends.",
		tech: [
			"Python",
			"SQL",
			"Power BI",
			"Data Visualization",
			"Time Series",
			"KPI Dashboards",
			"Business Intelligence",
		],
		gitlink: "//github.com/rohanhake98/travel-demand-analytics",
		image: TravelImg,
	},
	{
		title: "Customer Churn Analysis",
		desc: "Applied exploratory analysis and segmentation techniques to identify churn drivers such as tenure, usage frequency, and engagement using interpretable analytical models. Delivered actionable insights to improve retention rates by 15%.",
		tech: [
			"Python",
			"Power BI",
			"SQL",
			"Segmentation",
			"Churn Analysis",
			"EDA",
			"Data Storytelling",
		],
		gitlink: "//github.com/rohanhake98/customer-churn-analysis",
		image: ChurnImg,
	},
	{
		title: "Superstore Retail Analytics Dashboard",
		desc: "Analyzed retail transaction data to evaluate market segments, product performance, and regional trends with structured insights for pricing and inventory planning. Created a comprehensive dashboard to track sales velocity and profit margins across regions.",
		tech: [
			"Power BI",
			"SQL",
			"DAX",
			"Retail Analytics",
			"Market Segmentation",
			"Performance Tracking",
		],
		gitlink: "//github.com/rohanhake98/superstore-retail-analytics",
		image: RetailImg,
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
