import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './project.css';

// Import local project assets (generated mockups)
import projectAbc from '../../assets/project_abc.png';
import projectAllForOne from '../../assets/project_allforone.png';
import projectTablet from '../../assets/project_tablet.png';

const projects = [
  {
    id: 1,
    category: 'Art Direction',
    image: projectAbc,
    description: "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity, guiding every detail for a cohesive, polished result.",
    techStack: ['Figma', 'Illustrator', 'Cinema 4D'],
    projectUrl: 'https://example.com/art-direction',
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    category: 'Brand Strategy',
    image: projectAllForOne,
    description: "Developing comprehensive brand identities and positioning strategies that build emotional connection and establish market authority for series A-D startups.",
    techStack: ['Research', 'Brand Book', 'Copywriting'],
    projectUrl: 'https://example.com/brand-strategy',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    category: 'Digital',
    image: projectTablet,
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged and tell a compelling product story.",
    techStack: ['React', 'WebGL', 'GSAP', 'CSS Grid'],
    projectUrl: 'https://example.com/digital',
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    category: 'Art Direction',
    image: projectAbc,
    description: "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity, guiding every detail for a cohesive, polished result.",
    techStack: ['Figma', 'Illustrator', 'Cinema 4D'],
    projectUrl: 'https://example.com/art-direction',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    category: 'Brand Strategy',
    image: projectAllForOne,
    description: "Developing comprehensive brand identities and positioning strategies that build emotional connection and establish market authority for series A-D startups.",
    techStack: ['Research', 'Brand Book', 'Copywriting'],
    projectUrl: 'https://example.com/brand-strategy',
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    category: 'Digital',
    image: projectTablet,
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged and tell a compelling product story.",
    techStack: ['React', 'WebGL', 'GSAP', 'CSS Grid'],
    projectUrl: 'https://example.com/digital',
    githubUrl: 'https://github.com'
  }
];

const ProjectsGallery = () => {
  return (
    <section className="projects-gallery-section">
      <div className="projects-gallery-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            image={project.image}
            description={project.description}
            techStack={project.techStack}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
