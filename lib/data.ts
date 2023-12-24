import React from "react";

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

  export const projects = [
    {
      title: "Art MarketPlace",
      skills: ["CSS", "HTML", "Bootstrap", "Firebase", "Javascript", "Vue.js"],
      description: "A marketplace for artists to sell their art. Users can also request for commission pieces.",
    },
    {
      title: "Form Management Application",
      skills: ["Java", "Spring Boot", "MySQL", "Vue.js", "Javascript", "Bootstrap", "Docker", "MongoDB"],
      description: "A form management application which includes a form builder and workflow management of forms for different roles.",
    },
    {
      title: "Personal Portfolio",
      skills: ["Next.js", "HTML", "Tailwind CSS", "Javascript"],
      description: "A personal portfolio to showcase my projects and skills.",
    },
    {
      title: "Activity Booking Web Application",
      skills: ["Flask", "CSS", "Javascript", "Python", "React.js", "MySQL", "Kong API Gateway", "Docker"],
      description: "A microservice web application to book activities, including features like loyalty points and coupons for payment with Stripe API.",
    },
    {
      title: "Automatic Grading of Short Answer Questions",
      skills: ["Flask", "Python", "Javascript", "CSS", "MongoDB", "Docker", "Bootstrap", "LLM", "ChromaDB", "Vue.js"],
      description: "A web application with short answer quizzes that allows for automated grading and feedbacks with GPT model with enhanced accuracy.",
    },
    {
      title: "Online Tutoring Platform",
      skills: ["Python", "CSS", "MongoDB", "Javascript", "React.js", "Docker", "Flask"],
      description: "A web application that allows students to book tutoring sessions with tutors. There are also question bank with quizzes and daily challenges to motivate students to use the platform.",
    },
    {
      title: "Knowledge Management System",
      skills: ["FastAPI", "Python", "MySQL", "ChromaDB", "React.js", "Tailwind CSS", "Selenium", "LLM", "LangChain", "Javascript"],
      description: "A knowledge management system that allows users to upload documents or webscrape websites and retrieve relevant documents based on their queries.",
    }
  ]