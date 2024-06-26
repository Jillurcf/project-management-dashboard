"use client";

import UseProjects from "@/hooks/useproject/useproject";
import Link from "next/link";

const Projects = () => {
  const { projects, loading } = UseProjects();

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="lg:pl-0 grid gap-4 lg:gap-2 justify-items-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 py-12">
      {projects.map((project) => (
        <div key={project.id} className="card w-60 bg-base-100 relative">
          <div className="card-actions justify-center">
            {/* Use the 'href' attribute instead of 'to' */}
            {/* <Link href={`/projectDetail/${project.id}`}> */}
              <button className="btn btn-outline btn-primary text-white absolute top-[60%]">
                See Detail
              </button>
            {/* </Link> */}
          </div>
          <figure>
            <img className="h-[200px]" src={project.image} alt="" />
          </figure>
          <div className="">
            <h2 className="text-blue-600 text-center">
              {project.project_name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
