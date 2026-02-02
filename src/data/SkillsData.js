import { SiPython, SiMysql, SiPostgresql, SiJupyter, SiGit, SiGithub } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { FaJava, FaChartBar, FaFileExcel, FaChartPie, FaCode } from "react-icons/fa";

// Removed suspected problematic icons: SiPowerbi, SiTableau, SiPandas, SiNumpy, SiScikitlearn
// Using generic icons to ensure build success.

export const SkillsData = [
    // Programming & Querying
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <DiDatabase /> },
    { name: "Java", icon: <FaJava /> },

    // Data Visualization & BI
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "Tableau", icon: <FaChartPie /> },
    { name: "Excel", icon: <FaFileExcel /> },

    // Databases
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },

    // ML Libraries & Tools
    { name: "Pandas", icon: <FaCode /> },
    { name: "NumPy", icon: <FaCode /> },
    { name: "Scikit-learn", icon: <FaCode /> },
    { name: "Jupyter", icon: <SiJupyter /> },

    // Version Control
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
];
