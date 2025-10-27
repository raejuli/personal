import React from 'react';

interface Job {
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
}

interface WorkPlace {
  company: string;
  location: string;
  jobs: Job[];
}

const History: React.FC = () => {
  const workHistory: WorkPlace[] = [
    {
      company: 'Push Gaming',
      location: 'London',
      jobs: [
        {
          title: 'Full Stack Engineer',
          startDate: 'September 2025',
          endDate: 'Present',
          responsibilities: [
            'Led development of new automated partner integration tool'
          ],
          skills: ['TypeScript', 'React', 'Docker', 'AWS', 'Java', 'Spring Boot']
        },
        {
          title: 'Lead Game Devloper',
          startDate: 'January 2025',
          endDate: 'October 2025',
          responsibilities: [
            'Created and managed over a dozen core libraries utilised in all games which reduced our development timeline by 20%',
            'Lead the development on the in-house game engine upgrade, and major update to the renderer',
            'Initiated training in the game development department to improve the team’s understanding on core-design decisions and architecture',
            'Created a new game sequencing engine to act as a visual scripting tool',
            'Assisted in the rewrite of the game editor tool'
          ],
          skills: ['React', 'Pixi.js', 'Custom Game Engine']
        },
        {
          title: 'Game Devloper',
          startDate: 'May 2024',
          endDate: 'January 2025',
          responsibilities: [
            'Actively developed and managed multiple projects at the same time',
            'Always helping fellow developers with bugs and improvement suggestions',
            'Improved and bug fixed our game engine’s library code'
          ],
          skills: ['React', 'Pixi.js', 'Custom Game Engine']
        },
        {
          title: 'Junior Game Devloper',
          startDate: 'May 2024',
          endDate: 'November 2023',
          responsibilities: [
            'Successfully navigated through changing engine architecture within the first few months of starting, and actively gave feedback and suggestion to improve these changes',
            'Actively helping fellow developers through various parts of their development and giving them design suggestions',
            'On-boarded a new developer into the company, giving them as much help as needed and giving feedback and suggestions on their learning path and code through their GitHub pull requests'
          ],
          skills: ['React', 'Pixi.js', 'Custom Game Engine']
        }
      ]
    },
    {
      company: 'Intouch Games',
      location: 'Birmingham',
      jobs: [
        {
          title: 'Game Developer',
          startDate: 'June 2022',
          endDate: 'November 2023',
          responsibilities: [
            'Thrived in a fast-paced, agile environment, contributing to the development of slots games in Typescript, seamlessly integrating with the in-house game engine',
            'Collaborated on multiple games throughout their development life cycles, actively participating in code reviews and optimization efforts',
            'Utilized the Atlassian suite, including JIRA for project management and issue tracking, and TeamCity for the build system, ensuring efficient development workflows'
          ],
          skills: ['TypeScript', 'Custom Game Engine', 'Jira']
        }
      ]
    }
  ];

  return (
    <section id="history" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work History</h2>
        <div className="max-w-5xl mx-auto">
          {workHistory.map((workplace, workplaceIndex) => (
            <div 
              key={workplaceIndex}
              className="mb-12 bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
            >
              {/* Company Header */}
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h3 className="text-2xl font-bold text-gray-800">{workplace.company}</h3>
                <p className="text-gray-600 mt-1">{workplace.location}</p>
              </div>

              {/* Jobs at this company */}
              <div className="space-y-8">
                {workplace.jobs.map((job, jobIndex) => (
                  <div key={jobIndex} className="relative pl-8 border-l-4 border-blue-500">
                    {/* Job Title and Duration */}
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                    
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                      <p className="text-gray-600 mt-1">
                        {job.startDate} - {job.endDate}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, respIndex) => (
                          <li 
                            key={respIndex}
                            className="text-gray-600 flex items-start"
                          >
                            <span className="text-blue-500 mr-2 mt-1">▸</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Used */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default History;
