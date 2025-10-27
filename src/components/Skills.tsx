import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Languages and Frameworks',
      skills: ['React', 'TypeScript', 'JavaScript', 'C++', 'Go', 'C#', 'Java', 'Spring Boot', 'Pixijs']
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MySQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack', 'Github Actions', 'Jira', 'Clickup']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white rounded-lg px-4 py-2 text-center text-gray-700 font-medium shadow-sm hover:shadow-md transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
