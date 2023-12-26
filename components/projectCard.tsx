import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";

type ProjectCardProps = typeof projectsData[number];

const ProjectCard = ({ title, skills, description, image} : ProjectCardProps) => {
  return (
    <div
      className="xl:w-5/12 sm:w-3/4 md:w-3/4 relative mt-16 mb-32 sm:mb-24 xl:max-w-5/12 lg:min-w-[25rem]"
    >
      <div className="rounded-xl overflow-hidden shadow-xl dark:border-2 dark:border-white xl:min-h-[25rem] pb-6">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-[11rem] w-[20rem]">
            <Image
              src={image}
              alt="pic"
              className="rounded-[25px] object-cover h-full w-full shadow-md border-4 border-solid dark:border-white"
            />
          </div>
        </div>
        <div className="px-6 mt-28">
          <h1 className="font-bold text-3xl text-center mb-4 ">
            {title}
          </h1>
          <div className="flex justify-center gap-2 flex-wrap">
            {skills.map((skill) => (
              <React.Fragment key={skill}>
                <Badge variant="default">{skill}</Badge>
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-base pt-3 font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
