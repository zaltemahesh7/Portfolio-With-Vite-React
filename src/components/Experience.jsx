const roles = [
  {
    title: 'Software Developer',
    company: 'BhojSoft Solutions',
    dates: 'August 2024 – Present',
    location: 'Pune, Maharashtra',
    points: [
      'Developed and maintained full-stack MERN applications, contributing to a reported 20% improvement in business workflow efficiency.',
      'Designed backend services using Node.js and Express.js for platform functionality.',
      'Optimized database queries and API performance, contributing to a reported 25% reduction in response time.',
      'Implemented authentication, role-based access control, and data validation.',
      'Collaborated with frontend, QA, and product teams; deployed and maintained applications using AWS.',
    ],
  },
  {
    title: 'Backend Developer Intern',
    company: 'BhojSoft Solutions',
    dates: 'March 2024 – August 2024',
    location: 'Pune, Maharashtra',
    points: [
      'Developed REST APIs using Node.js and Express.js.',
      'Designed and managed MySQL and PostgreSQL database schemas.',
      'Designed and maintained 20+ REST APIs.',
    ],
  },
];

const Experience = () => (
  <section className="section" id="experience" aria-labelledby="experience-title">
    <div className="section-inner">
      <p className="eyebrow">Work history</p>
      <h2 className="section-title" id="experience-title">Experience</h2>
      <div className="timeline">
        {roles.map((role) => (
          <article className="experience-card" key={role.title}>
            <div className="experience-heading">
              <div>
                <h3>{role.title}</h3>
                <p className="experience-company">{role.company} <span>·</span> {role.location}</p>
              </div>
              <p className="experience-dates">{role.dates}</p>
            </div>
            <ul className="detail-list">
              {role.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
