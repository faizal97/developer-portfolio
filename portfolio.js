import emoji from "react-easy-emoji";

export const greetings = {
	name: "Faizal Ardian Putra",
	title: "Hi! I'm Faizal",
	description:
		"A Backend Developer having an experience of building Web APIs with PHP / Laravel.",
	resumeLink: "https://drive.google.com/file/d/1_EQaFIylzmmKK_0vmux7N4601Mr4kdrl/view?usp=sharing",
};

export const openSource = {
	githubUserName: "faizal97",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/faizalardianputra",
	instagram: "https://www.instagram.com/fayz_ard",
	twitter: "https://twitter.com/fayz_28",
	github: "https://github.com/faizal97linked",
	linkedin: "https://www.linkedin.com/in/faizal-ardian-putra-45b3877a",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Building APIs to make people life easier",
	skills: [
		emoji(
			"⚡ Develop High Scalability and Reliable API"
		),
		emoji(
			"⚡ Try as much as i could to code clean and readable"
		),
		emoji(
			"⚡ Solve problems and give solutions"
		),
	],

	softwareSkills: [
		{
			skillName: "php",
			fontAwesomeClassname: "akar-icons:php-fill",
		},
		{
			skillName: "laravel",
			fontAwesomeClassname: "logos:laravel",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		// {
		// 	skillName: "nodejs",
		// 	fontAwesomeClassname: "logos:nodejs-icon",
		// },
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		// {
		// 	skillName: "mongoDB",
		// 	fontAwesomeClassname: "vscode-icons:file-type-mongo",
		// },
		// {
		// 	skillName: "aws",
		// 	fontAwesomeClassname: "logos:aws",
		// },
		// {
		// 	skillName: "firebase",
		// 	fontAwesomeClassname: "logos:firebase",
		// },
		// {
		// 	skillName: "python",
		// 	fontAwesomeClassname: "logos:python",
		// },
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "PHP", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "Laravel", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "SQL", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Git", //Insert stack or technology you have experience in
		progressPercentage: "75", //Insert relative proficiency in percentage
	},
];

export const educationInfo = [
	{
		schoolName: "Universitas Bina Sarana Informatika",
		subHeader: "Diploma, Computer Software Engineering",
		duration: "2015- 2018",
		desc: "Declared as one of the best students at the graduation party.",
		descBullets: [
			"Created a online learning led web application named Yuk-Bali as a final paper",
		],
	},
	{
		schoolName: "SMK Negeri 2 Bekasi",
		subHeader: "Rekayasa Perangkat Lunak(Software Engineering)",
		duration: "2012 - 2015",
		desc: "Ranked 1st for highest Score for National Exam in the school",
		descBullets: [],
	},
];

export const experience = [
	{
		role: "Backend Developer",
		company: "Trutrip",
		companylogo: "/img/icons/common/trutrip.jpg",
		date: "Jan 2020 – Present",
		desc: "Working as Backend Developer using Laravel",
		descBullets: [
			"Working with YAML for the api specs documentation",
			"Building REST API Web Application",
			"Use 3rd Party API to Manage all the Bookings / Travel related action",
			"Building CEC to help tracking Covid Cases on countries around the world"
		],
	},
	{
		role: "PHP Programmer",
		company: "Docotel Group",
		companylogo: "/img/icons/common/docotel.jpg",
		date: "Nov 2018 – Dec 2019",
		desc: "Working as Full Stack Developer with Yii and Yii2",
		descBullets: [
			"Working with private git with Gitlab",
			"Building Web Apps based on Planned Flow, Mock Ups, And Structures",
			"Get involved in team disscussion about Future Plan and/or on-going development plan",
			"Being moved to the Government Department. I spent almost all of my time on building government application. Especially Ministry Of Law And Human Rights' Projects"
		],
	},
	{
		role: "Assistant Lecturer",
		company: "Universitas Bina Sarana Informatika",
		companylogo: "/img/icons/common/bsi.jpg",
		date: "Sep 2017 – Oct 2018",
		desc: "Assist The Lecturer, Helping Colleger in Practical Lesson, Teaching in a class in case lecturer is not available / not attend.",
	},
];

export const projects = [
	{
		name: "Ditjen AHU Online",
		desc: "created some of the projects for Indonesia's Law and Human Rights when working at Docotel",
		link: "https://www.ahu.go.id/",
	},
	{
		name: "Trutrip",
		desc: "Created Trutrip Backend APIs to consumed by Frontend using Laravel",
		link: "https://www.ahu.go.id/",
	},
	{
		name: "Covid Entry Check",
		desc: "Created Trutrip's child app Backend APIs, CEC. Start this app when travel get hits by the coronavirus",
		link: "https://trutrip.co/covidentrycheck/",
	},
];

// export const feedbacks = [
// 	{
// 		name: "Hassan Mehmood",
// 		feedback:
// 			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
// 	},
// 	{
// 		name: "Maheen Altaf",
// 		feedback:
// 			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
// 	},
// ];
