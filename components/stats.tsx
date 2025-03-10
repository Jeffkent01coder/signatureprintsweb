import React, { useState, useEffect } from 'react';

function ClientCounter() {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [professionalTeam, setProfessionalTeam] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);

  useEffect(() => {
    const targetYears = 4;
    const targetProjects = 50;
    const targetTeam = 10;
    const targetSatisfied = 99;

    const duration = 2000; // animation duration in ms
    const intervalTime = 50; // update every 50ms
    const steps = duration / intervalTime;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setYearsExperience(Math.min(Math.floor((currentStep / steps) * targetYears), targetYears));
      setCompletedProjects(Math.min(Math.floor((currentStep / steps) * targetProjects), targetProjects));
      setProfessionalTeam(Math.min(Math.floor((currentStep / steps) * targetTeam), targetTeam));
      setSatisfiedClients(Math.min(Math.floor((currentStep / steps) * targetSatisfied), targetSatisfied));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="counter" className="bg-black min-h-[280px] flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 text-center">
        {/* Counter 1 */}
        <div>
          <h1 id="counter1" className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[100px]">
            {yearsExperience}+ 
          </h1>
          <p className="text-yellow-500 text-lg">Years Experience</p>
        </div>
        {/* Counter 2 */}
        <div>
          <h1 id="counter2" className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[100px]">
            {completedProjects}+ 
          </h1>
          <p className="text-yellow-500 text-lg">Completed Projects</p>
        </div>
        {/* Counter 3 */}
        <div>
          <h1 id="counter3" className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[100px]">
            {professionalTeam}+ 
          </h1>
          <p className="text-yellow-500 text-lg">Professional Team</p>
        </div>
        {/* Counter 4 */}
        <div>
          <h1 id="counter4" className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[100px]">
            {satisfiedClients}%
          </h1>
          <p className="text-yellow-500 text-lg">Satisfied Clients</p>
        </div>
      </div>
    </section>
  );
}

export default ClientCounter;
