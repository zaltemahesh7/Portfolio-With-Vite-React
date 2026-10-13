const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Role-Based Access Control (RBAC)'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Tailwind CSS', 'Material UI', 'shadcn/ui'],
  },
  {
    title: 'Databases and Caching',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud and DevOps',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'CloudFront', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'pgAdmin', 'XAMPP'],
  },
];

const Skills = () => (
  <section className="section section-muted" id="skills" aria-labelledby="skills-title">
    <div className="section-inner">
      <p className="eyebrow">Technologies</p>
      <h2 className="section-title" id="skills-title">Technical skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="technology-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
