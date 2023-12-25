import React from "react";
import artMarketplace from "../public/art_marketplace.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    image: artMarketplace
  },
  {
    title: "Personal Portfolio",
    skills: ["Next.js", "HTML", "Tailwind CSS", "Javascript"],
    description: "A personal portfolio to showcase my projects and skills.",
    image: artMarketplace
  },
  {
    title: "Activity Booking Web Application",
    skills: ["Flask", "CSS", "Javascript", "Python", "React.js", "MySQL", "Kong API Gateway", "Docker"],
    description: "A microservice web application to book activities, including features like loyalty points and coupons for payment with Stripe API.",
    image: artMarketplace
  },
  {
    title: "Automatic Grading of Short Answer Questions",
    skills: ["Flask", "Python", "Javascript", "CSS", "MongoDB", "Docker", "Bootstrap", "LLM", "ChromaDB", "Vue.js"],
    description: "A web application with short answer quizzes that allows for automated grading and feedbacks with GPT model with enhanced accuracy.",
    image: artMarketplace
  },
  {
    title: "Online Tutoring Platform",
    skills: ["Python", "CSS", "MongoDB", "Javascript", "React.js", "Docker", "Flask"],
    description: "A web application that allows students to book tutoring sessions with tutors. There are also question bank with quizzes and daily challenges to motivate students to use the platform.",
    image: artMarketplace
  },
  {
    title: "Knowledge Management System",
    skills: ["FastAPI", "Python", "MySQL", "ChromaDB", "React.js", "Tailwind CSS", "Selenium", "LLM", "LangChain", "Javascript"],
    description: "A knowledge management system that allows users to upload documents or webscrape websites and retrieve relevant documents based on their queries.",
    image: artMarketplace
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
] as const;

export const experiencesData = [
  {
    title: "developer",
    location: "Singapore",
    description:
      "developer",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Singapore",
    description:
      "develoepr",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Singapore",
    description:
      "develoepr",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;