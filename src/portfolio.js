/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "David's Portfolio",
  description:
    "A dedicated software developer, tech enthusiast, and HCI researcher committed to developing solutions employing coding talents to produce impactful, scalable, secure and privacy-preserving technological systems ",
  og: {
    title: "David",
    type: "portfolio website",
    url: "https://david-nkundineza.vercel.app/#/",
  },
};

//Home Page
const greeting = {
  title: "David Nkundineza",
  logo_name: "DavidNkundineza",
  nickname: "Dave",
  subTitle:
    "A dedicated software developer, tech enthusiast, and HCI researcher committed to developing solutions employing coding talents to produce impactful, scalable, secure and privacy-preserving technological systems ",
  resumeLink:
    "https://drive.google.com/file/d/12fVeE0yfhiheR0J4VUXcNxgIlrlBmrKo/view?usp=drive_link",
  portfolio_repository: "https://github.com/Dev-nkundineza",
  githubProfile: "https://github.com/Dev-nkundineza",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Dev-nkundineza",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nkundineza-david-a09aa8207/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:devidbinfan@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Twitter",
    link: "https://twitter.com/davidnkundinez1?s=09",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2", 
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Redux, HTML5, CSS3, and Sass",
        "⚡ Creating application backend using Node, Express, GraphQl, Apollo, Typescript, Django",
        "⚡ Integration of third-party services such as Firebase, as well as databases like Mysql,MongoDB, Postgres, Cassandra, and Neo4j.",	
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "HCI Researcher",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Usability and accessibility testing",
        "⚡ Security and privacy perception studies",
        "⚡ User experience evaluation and analysis",
        "⚡ Human-centered and participatory design",
        "⚡ Qualitative and quantitative user research",
        "⚡ Digital transformation and technology adoption",
        "⚡ Contextual inquiry and field observations",
        "⚡ Data-driven design insights",
      ],
      softwareSkills: [
        {
          skillName: "privacy",
          fontAwesomeClassname: "fa-eye-slash",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Security",
          fontAwesomeClassname: "fa-lock",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "UX",
          fontAwesomeClassname: "fa-heart",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "HCI",
          fontAwesomeClassname: "fa-mobile-phone",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Accessibility",
          fontAwesomeClassname: "fa-universal-access",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Signal",
          fontAwesomeClassname: "fa-walkie-talkie",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Big Data analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ ETL, Data warehousing, Modelling, Mining, Analysis, and Visualization",
        "⚡ Programming languages in DA: Python",
        "⚡ Databases: Neo4j, Cassandra, MongoDB, Mysql, Postgres",
        "⚡ Distributed file systems: HDFS and GFS",	
      ],
      softwareSkills: [
        {
          skillName: "hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: {
            color: "#66CCFF",
          }
        },
        {
          skillName: "cassandra",
          fontAwesomeClassname: "simple-icons:apachecassandra",
          style: {
            color: "#1287B1",
          },
        },
        {
          skillName: "neo4j",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: {
            color: "#008CC1",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#61CCB7",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Carneige Mellon University, Africa",
      subtitle: "Master's degree in Information Technology",
      logo_path: "Cmu-logo.png",
      alt_name: "CMU",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have gained comprehensive knowledge of software engineering, data science, cloud computing, and Research methodologies.", 
      ],
      website_link: "https://www.africa.engineering.cmu.edu/",
    },

    {
      title: "University of Rwanda, College of Science and Technology",
      subtitle: "Bachelor's degree in Information Technology",
      logo_path: "UR_LOGO.jpeg",
      alt_name: "UR logo",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structure and Algorithms, DBMS, OS, Mathematics, AI etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://ur.ac.rw/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Master's in Information Technology",
      subtitle: "Degree",
      logo_path: "Cmu-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1fhF38sHj8YGNvrw2Hz9hRpNDdTlH2V0r/view?usp=drive_link",
      alt_name: "MSIT",
      color_code: "#8C151599",
    },
    {
      title: "Bachelors in Information Technology",
      subtitle: "Degree",
      logo_path: "UR.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1bFlnynRTNSRWrD5QC-Ggfaue4olGc5Yd/view?usp=sharing",
      alt_name: "MSIT",
      color_code: "#8C151599",
    },
     {
      title: "Data Science Certification",
      subtitle: "Certificate",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1bxFdt2djq-KmjaZRhNIIxBqDdo1qqOSy/view?usp=sharing",
      alt_name: "MSIT",
      color_code: "#8C151599",
    },
    {
      title: "CITI Program",
      subtitle: "CITI",
      logo_path: "citi.png",
      certificate_link:
        "https://drive.google.com/file/d/1uxmngknNLPqYl7_8LacFZE30urc40Tea/view?usp=sharing",
      alt_name: "ATLP",
      color_code: "#8C151599",
    },
    {
      title: "Andela Technical Leadership Program",
      subtitle: "ATLP",
      logo_path: "Andela_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1aPBDijgu_LiGMy7iAAotwkmY0U9nLkLY/view?usp=sharing",
      alt_name: "ATLP",
      color_code: "#8C151599",
    },
    {
      title: "freecodecamp",
      subtitle: "Free Code Camp",
      logo_path: "freecodecamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc39ac8bec-817b-400a-95f0-fcfd56adeb1e/responsive-web-design",
      alt_name: "Free code camp",
      color_code: "#8C151599",
    },
    {
      title: "Carnegie Mellon University",
      subtitle: "CMU bridge program",
      logo_path: "Cmu-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Fw5hcOlkNyr_bBm08Rtr4oQ9-zPGWxEE/view?usp=sharing",
      alt_name: "Free code camp",
      color_code: "#8C151599",
    },
    {
      title: "ICDT Program",
      subtitle: "ICDT",
      logo_path: "Cmu-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1TxAEF4fn6q8Mym4uI5NzhQ2oHezvmGRy/view?usp=sharing",
      alt_name: "ICDT",
      color_code: "#8C151599",
    },
    {
      title: "Cisco Networking Academy",
      subtitle: "Cisco",
      logo_path: "cisco.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/11U0VjHhkpHNnpZvR7U3LAm986aQzuUIl/view?usp=sharing",
      alt_name: "Cisco",
      color_code: "#8C151599",
    },
    {
      title: "NDG Linux Essentials",
      subtitle: "NDG",
      logo_path: "cisco.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/18HCjZ1i8HCmcl40dRd7G1IyfJAR9-DqF/view?usp=sharing",
      alt_name: "NDG",
      color_code: "#8C151599",
    },
    {
      title: "Principal's Roll of Honour",
      subtitle: "PRH",
      logo_path: "UR.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1lsbDQT8lGTSHy_rZ9_Ul9GG4MdCegS7S/view?usp=sharing",
      alt_name: "Cisco",
      color_code: "#8C151599",
    },
    {
      title: "Save the children International",
      subtitle: "SCI",
      logo_path: "sci.png",
      certificate_link:
        "https://drive.google.com/file/d/1pAa3_Zv0AvvJlDURsGQsaUrpQU01HD7j/view?usp=sharing",
      alt_name: "save",
      color_code: "#8C151599",
    },
  ],
  
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I worked in team and individual projects, I have currently worked in two main companies, and two universities",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
					"title": "Research Associate, University of Chicago",
					"company": "University of Chicago",
					"company_url": "https://www.uchicago.edu/",
					"logo_path": "uchicago.png",
					"duration": "June 2025 - Present",
					"location": "Kigali - Rwanda",
					"description":
						" I am responsible for designing and developing a prototype Android application that simulates Mobile Money functionality. My work involves conducting usability testing, user interviews, and analyzing both qualitative and quantitative data to inform design improvements \
I also focus on understanding the privacy and security challenges that emerge from users’ everyday interactions with Mobile Money applications, with an emphasis on identifying behavioral patterns and user concerns. This role combines user-centered design, field research, and technical development to contribute to the advancement of secure and user-friendly digital financial services",
					"color": "#9b1578"
				},
        {
					"title": "Research Associate, Carnegie Mellon University Africa",
					"company": "CMU Africa",
					"company_url": "https://www.africa.engineering.cmu.edu/",
					"logo_path": "Cmu-logo.png",
					"duration": "June 2025 - Present",
					"location": "Kigali - Rwanda",
					"description":
						"I am working on a research project, The goal of the project is to develop e-government services' evaluation framework based on the four dimensions, accessibility, usability, affordability and availability.",
					"color": "#9b1578"
				},
        {
					"title": "Front-end developer, Flex Platforms",
					"company": "Flex Platforms",
					"company_url": "https://flexplatforms.rw/",
					"logo_path": "flexplatforms.png",
					"duration": "December 2022 - April 2023",
					"location": "Kigali - Rwanda",
					"description":
						"I worked on an initial product of the startup, the goal of the project was to implement the campaign management platform for the company, and provide further communication channel including QRcode, bulk email and bulk SMS .",
					"color": "#9b1578"
				},
        {
					"title": "Full stack developer, Andela Technical Leadership Program Rwanda",
					"company": "Andela",
					"company_url": "https://www.linkedin.com/company/andela/mycompany/verification/",
					"logo_path": "Andela_logo.jpeg",
					"duration": "December 2021 - November 2022",
					"location": "Kigali - Rwanda",
					"description":
						"I worked on the Edutech platform, this was the team project, my primary features implemented is the grading, rating trainees and approvals of the trainees",
					"color": "#9b1578"
				},
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
					"title": "Graduate Summer Intern",
					"company": "Carnegie Mellon University Africa",
					"company_url": "https://www.africa.engineering.cmu.edu/",
					"logo_path": "Cmu-logo.png",
					"duration": "May 2024 - August 2024",
					"location": "Kigali, Rwanda",
					"description": "I worked on an Initial research project titled 'characterizing the digital transformation', I was responsible for designing research protocols, data collection and literature review",
					"color": "#ee3c26"
				},
        {
					"title": "Sofware developer Inten",
					"company": "Andela",
					"company_url": "https://www.linkedin.com/company/andela/mycompany/verification/",
					"logo_path": "Andela_logo.jpeg",
					"duration": "July 2022 - October 2022",
					"location": "Kigali, Rwanda",
					"description": "I worked on the Edutech platform, this was the team project, my primary features implemented is the rating trainees and approvals of the trainees",
					"color": "#ee3c26"
				}
      ],
    },
    {
      title: "Workshops and Conferences",
      experiences: [
        {
          "title": "AfriCHI",
					"company": "AfriCHI conference",
					"company_url": "https://www.africhi2025.org/accepted-contributions/",
					"logo_path": "Cmu-logo.png",
					"duration": "November 2025",
					"location": "Cairo, Egypt",
					"description": "I presented my research work on 'Evaluating User Experience of Government and E-Government Services: A Technology-Neutral Ecosystem Lens' at the AfriCHI conference, click on 'AfriCHI conference' below the title for more info about the conference.",
					"color": "#ee3c26"
        },
        {
          "title": "UR-CMU Research Symposium",
					"company": "AFRETEC",
					"company_url": "https://drive.google.com/file/d/1xd0BZY7nn4tHzrqFt9ORWVTijhZE7Goy/view?usp=sharing",
					"logo_path": "Cmu-logo.png",
					"duration": "14th May 2025",
					"location": "Kigali, Rwanda",
					"description": "I presented my research work on 'Evaluating user experience in e-government services in Rwanda' at the UR-CMU Research Symposium organized by AFRETEC, click on 'Afretec' below the title for more info.",
					"color": "#ee3c26"
        },
        {
          "title": "ICTD 2024 Conference",
					"company": "ICTD",
					"company_url": "https://ictd.org/",
					"logo_path": "ICTD.png",
					"duration": "December 2024",
					"location": "Nairobi, Kenya",
					"description": "At this conference, I presented my paper on E-government ecosystem evaluation framework, the paper is co-authored with my supervisor Prof Tim Brown, with the poster we presented the work and got feedback from other researchers in the HCI field.",
					"color": "#ee3c26"
        },
        {
          "title": "HCI Across Borders (HCIxB) and Aspirations in ICTD 2024 Workshops",
					"company": "ICTD",
					"company_url": "https://hcixb.org/events/hci-across-borders-workshop-at-ictd-2024/",
					"logo_path": "ICTD.png",
					"duration": "December 2024",
					"location": "Nairobi, Kenya",
					"description": "I led the discussion group and delivered a lightning talk on 'HCIxB and Aspirations in e-government services' held alongside the ICTD 2024 conference.",
					"color": "#ee3c26"
        },
      ],
    },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Evaluating User Experience of Government and E-Government Services: A technology-neutral ecosystem lens",
      createdAt: "November 2025",
      description: "Paper on Human–Computer Interaction and Usability presented and published at the AfriCHI Conference 2025",
      url:
        "https://doi.org/10.1145/3757232.3757264",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Security and Privacy Considerations for Payment-Confirmation Screens in Mobile Money Systems",
      createdAt: ": Not yet published",
      description: "On-going research work on Mobile Money Security and Privacy",
      url:
        "https://docs.google.com/presentation/d/1cxpa-UL7OoJOjzr44s6N2ZPGSO28asFS/edit?usp=sharing&ouid=114434990972197545165&rtpof=true&sd=true",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilepic.png",
    description:
      "Hi, I am available on my social media platforms and ready to help you with Research projects, software and HCI projects and other projects for solving the community's challenges",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Rwanda, Kigali, Gasabo",
    avatar_image_path: "location.png",
    location_map_link: "https://g.co/kgs/vd2jQ1o",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+250786938249",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
