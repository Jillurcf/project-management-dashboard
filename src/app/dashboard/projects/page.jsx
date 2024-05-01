"use client"
import UseProjects from "@/app/hooks/useproject/page";



const Projects = () => {
    const {projects, loading} = UseProjects();
    console.log(projects);
    if(loading){
        return <div><h1>Loading</h1></div>
    }
    
    return (
        <div>
            <h1>Projects Page: {projects.length}</h1>
            
        </div>
    );
};

export default Projects;