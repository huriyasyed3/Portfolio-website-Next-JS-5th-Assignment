import React from 'react';
import Link from 'next/link'


// Project interface
interface Project {
  title: string;
  description: string;
  img: string;
  github: string;
}

// Project data
const projects: Project[] = [
  {
    title: 'Desi Delight',
    description: 'Pakistani cuisine website',
    img: '/1st-Project.png',
    github: 'https://github.com/huriyasyed3/Final-Project-Tech-Force-Pakistan.git',
  },
  {
    title: '14th August Independence Day',
    description: 'Pakistan\'s Independence Day web page',
    img: '/14th-august-project-2.png',
    github: 'https://github.com/huriyasyed3/Independence-Day-Website.git',
  },
  {
    title: 'To-Do List',
    description: 'Task management web application',
    img: '/2dolist.png',
    github: 'https://github.com/huriyasyed3/To-Do-List-Project.git',
  },
];

// ProjectsPage component
const ProjectsPage = () => {

  return (

   
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black rounded-lg">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-white font-semibold mb-4 text-center">My Projects</h1>
        <div className="flex flex-row justify-center gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-2 text-center transform hover:scale-105 transition duration-300 w-60"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-22 h-20 object-cover rounded-lg mb-2 ml-3"
              />
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-white opacity-80 mt-1 text-sm">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:bg-purple-500 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
        <ul>
  <li className="text-gray-400 text-sm text-center pt-1">
    <Link href='/home'>Go Back</Link>
  </li>
</ul>
      </div>
    </div>
   
  );
};

export default ProjectsPage;



