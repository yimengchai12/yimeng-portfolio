import React from "react";
import artMarketplace from "../public/art_marketplace.png";
import formManagement from "../public/form_management.png";
import portfolio from "../public/portfolio.png";
import SAQ from "../public/SAQ.png";
import blook from "../public/blook.png";
import KM from "../public/KM.png";
import edventure from "../public/edventure.png";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiArchiveResearch } from "react-icons/gi";
import { MdWork } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Art MarketPlace",
    skills: ["CSS", "HTML", "Bootstrap", "Firebase", "Javascript", "Vue.js"],
    description: "A marketplace for artists to sell their art. Users can also request for commission pieces.",
    image: artMarketplace
  },
  {
    title: "Form Management Application",
    skills: ["Java", "Spring Boot", "MySQL", "Vue.js", "Javascript", "Bootstrap", "Docker", "MongoDB"],
    description: "A form management application which includes a form builder and workflow management of forms for different roles.",
    image: formManagement
  },
  {
    title: "Personal Portfolio",
    skills: ["Next.js", "HTML", "Tailwind CSS", "Typescript"],
    description: "A personal portfolio to showcase my projects and skills.",
    image: portfolio
  },
  {
    title: "Activity Booking Web Application",
    skills: ["Flask", "CSS", "Javascript", "Python", "React.js", "MySQL", "Kong API Gateway", "Docker"],
    description: "A microservice web application to book activities, including features like loyalty points and coupons for payment with Stripe API.",
    image: blook
  },
  {
    title: "Automatic Grading of Short Answer Questions",
    skills: ["Flask", "Python", "Javascript", "CSS", "MongoDB", "Docker", "Bootstrap", "LLM", "ChromaDB", "Vue.js"],
    description: "A web application with short answer quizzes that allows for automated grading and feedbacks with GPT model with enhanced accuracy.",
    image: SAQ
  },
  {
    title: "Online Tutoring Platform",
    skills: ["Python", "CSS", "MongoDB", "Javascript", "React.js", "Docker", "Flask"],
    description: "A web application that allows students to book tutoring sessions with tutors. There are also question bank with quizzes and daily challenges to motivate students to use the platform.",
    image: edventure
  },
  {
    title: "Knowledge Management System",
    skills: ["FastAPI", "Python", "MySQL", "ChromaDB", "React.js", "Tailwind CSS", "Selenium", "LLM", "LangChain", "Javascript"],
    description: "A knowledge management system that allows users to upload documents or webscrape websites and retrieve relevant documents based on their queries.",
    image: KM
  }
] as const;

export const skillsData = [
  //put all the skills above in this array without categorising anything
  "CSS",
  "HTML",
  "Bootstrap",
  "Firebase",
  "Javascript",
  "Vue.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "Docker",
  "MongoDB",
  "Next.js",
  "Tailwind CSS",
  "Flask",
  "Python",
  "React.js",
  "Kong API Gateway",
  "LLM",
  "ChromaDB",
  "Selenium",
  "LangChain",
  "FastAPI",
  "RabbitMQ",
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "Aspri Group",
    description:
      "I developed a full stack application from scratch with template builder, compression of files, password protection of PDF and linking to Dropbox API with Next.js and MongoDB",
    icon: React.createElement(MdWork),
    date: "2023 Oct - Present",
  },
  {
    title: "Teaching Assistant for IS111(Introduction to Programming), IS112(Data Management) and IS210(Business Process Analysis and Solutioning)",
    company: "Singapore Management University",
    description:
      "I provide administrative and academic assistance to the professor and students respectively. I also review students' lab assignments and provide individualized feedback.",
    icon: React.createElement(LiaUniversitySolid),
    date: "2022 Aug - 2023 Nov",
  },
  {
    title: "AI Research Intern",
    company: "Singapore Management University",
    description:
      "I developed a full stack web application with short answer quizzes that allow for automated grading and feedbacks with GPT model. I also analyzed the accuracy of GPT model in automatic evaluation of short answer questions, writing a research paper on the subject topic.",
    icon: React.createElement(GiArchiveResearch),
    date: "2023 May - 2023 Aug",
  },
] as const;