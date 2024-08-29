"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../../public/assets/portfoliopic.jpg";
import proj2 from "../../public/assets/cmsproject.jpg";
import proj3 from "../../public/assets/votingproject11.jpg";
import proj4 from "../../public/assets/gymlandingpage.png";

const projects = [
	{
		title: "Library Management System",
		thumbnail: proj1,
		techStack: ["Ruby on Rails", "SQL"],
		description:
			"Designed and developed a Library Management System with role-based access control (Admin, Librarian, Member), implementing CRUD operations for libraries, books, and user roles.",
		github: "https://github.com/SivaShankar-Juthuka/LibraryManagementSystem",
		live: "",
	},
	{
		title: "Optimization Of NPK Analysis Using Deep Learning",
		thumbnail: proj2,
		techStack: ["Python","Machine Learning", "Deep Learning", "Streamlit"],
		description:
			"Led a team project at Aditya College of Engineering & Technology for our final year, developing a web application using Streamlit to optimize NPK analysis through deep learning models, including Random Forest and Simple RNN.",
		github: "https://github.com/SivaShankar-Juthuka/Optimization-of-NPK-Anlaysis-Using-Deep-Learning",
		live: "",
	},
	{
		title: "Stock Price Prediction using LSTM",
		thumbnail: proj3,
		techStack: ["Python","Machine Learning", "Deep Learning", "Cloud"],
		description:
			"Developed and deployed an LSTM model for stock price prediction using opening, highest, lowest prices, and volume as features. Addressed dataset challenges to enhance model accuracy and successfully deployed the model,aiding informed decision-making in financial analysis.",
		github: "https://github.com/SivaShankar-Juthuka/Stock_Price_Prediction_Using_LSTM",
		live: "",
	},
	{
		title: "Fake News Detection",
		thumbnail: proj4,
		techStack: ["Python", "Machine Learning","HTML", "CSS"],
		description:
			"Implemented a robust machine learning system for identifying fake news, achieving high accuracy using a Passive Aggressive Classifier. Engineered features and employed TF-IDF vectorization for effective text analysis.",
		github: "https://github.com/SivaShankar-Juthuka/Fake_News_Detection",
		live: "",
	},
];

const ProjectsPage = () => {
	return (
		<div className="relative">
			<div className="text-center mt-32 dark:text-white text-neutral-800 text-[2.5rem] font-bold">
				Projects
			</div>
			<div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
			<div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
			<div className="flex flex-wrap justify-center mt-20">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						thumbnail={project.thumbnail}
						techStack={project.techStack}
						description={project.description}
						github={project.github}
						live={project.live}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
