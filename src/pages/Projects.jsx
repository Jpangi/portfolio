
import ProjectsComponent from "../components/Projects/Projects";
import {projectsData} from '../util/helper'

function Projects() {
  

  return (
   <ProjectsComponent projectsData={projectsData}/>
   
  );
}

export default Projects;
