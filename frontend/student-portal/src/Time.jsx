import React from 'react';

const TimeGreeting = () => {
    const getCurrentGreeting = () => {
        const currentHour = new Date().getHours();
        return currentHour < 12 ? 'Good Morning': currentHour < 18 ? 'Good Afternoon': 'Good Evening';
      };

  return (
    <h5 className="text-center mb-4">
      {getCurrentGreeting()},
    </h5>
  );
};

export default TimeGreeting;
