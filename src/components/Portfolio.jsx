import { useMemo, useState } from 'react';

const projects = [
  {
    title: 'Online Learning Platform',
    category: 'Full stack',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'MongoDB', 'AWS EC2', 'AWS Lambda', 'AWS S3'],
    overview: 'A learning platform supporting course, trainer, institute, and user management.',
    contributions: [
      'Developed APIs and frontend modules for courses, trainers, institutes, and user management.',
      'Used the MERN stack and PostgreSQL.',
      'Deployed application components using AWS EC2, AWS Lambda, and AWS S3.',
      'Contributed to team coordination, Agile practices, and code reviews.',
    ],
  },
  {
    title: 'Stock Exchange Data Processing Platform',
    category: 'Backend',
    technologies: ['Node.js', 'PostgreSQL', 'REST APIs', 'AWS EC2', 'Redis'],
    overview: 'ETL workflows for processing stock exchange and ticketing data from external APIs.',
    contributions: [
      'Designed data pipelines with transformation and validation workflows.',
      'Optimized PostgreSQL queries and indexing, with a reported 30% reduction in query execution time.',
      'Integrated Redis caching, with a reported 40% reduction in API response time.',
    ],
  },
  {
    title: 'News Platform',
    category: 'Full stack',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AWS EC2', 'AWS S3', 'CloudFront'],
    overview: 'A full-stack news application with separate access for Admin, Anchor, and User roles.',
    contributions: [
      'Built REST APIs with JWT authentication and role-based authorization.',
      'Deployed the backend on AWS EC2 and the frontend on AWS S3 with CloudFront.',
      'Configured a custom domain and DNS.',
    ],
  },
];

const categories = ['All', 'Backend', 'Full stack'];
const technologies = [...new Set(projects.flatMap((project) => project.technologies))].sort();

const Portfolio = () => {
  const [category, setCategory] = useState('All');
  const [technology, setTechnology] = useState('');
  const filteredProjects = useMemo(
    () => projects.filter((project) => (
      (category === 'All' || project.category === category)
      && (!technology || project.technologies.includes(technology))
    )),
    [category, technology],
  );

  return (
    <section className="section section-muted" id="portfolio" aria-labelledby="projects-title">
      <div className="section-inner">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title" id="projects-title">Projects</h2>
        <p className="section-lead">A few examples of the systems and applications I’ve worked on.</p>

        <div className="project-filters" aria-label="Filter projects">
          <div className="filter-group" role="group" aria-label="Filter by category">
            {categories.map((item) => (
              <button
                aria-pressed={category === item}
                className={`filter-button${category === item ? ' is-active' : ''}`}
                key={item}
                onClick={() => setCategory(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <label className="technology-filter">
            <span>Technology</span>
            <select value={technology} onChange={(event) => setTechnology(event.target.value)}>
              <option value="">All technologies</option>
              {technologies.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="project-grid" aria-live="polite">
          {filteredProjects.length ? filteredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-overview">{project.overview}</p>
              <ul className="detail-list project-details">
                {project.contributions.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <ul className="technology-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          )) : (
            <p className="empty-state">No projects match these filters. Try a different category or technology.</p>
          )}
        </div>
        <p className="projects-note">
          Demo and source links are shown when a project-specific URL is available.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
