const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Zeal Education Society, Pune, SPPU',
    dates: 'August 2022 – July 2024',
  },
  {
    degree: 'Bachelor of Science in Computer Science (B.Sc. CS)',
    institution: "NVPM's Arts, Commerce and Science College, Lasalgaon, SPPU",
    dates: '2018 – 2021',
  },
];

const Education = () => (
  <section className="section" id="education" aria-labelledby="education-title">
    <div className="section-inner">
      <p className="eyebrow">Academic background</p>
      <h2 className="section-title" id="education-title">Education</h2>
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p className="experience-dates">{item.dates}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
