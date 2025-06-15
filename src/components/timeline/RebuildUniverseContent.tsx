
import React from 'react';
import History from './rebuild/History';
import Timeline from './rebuild/Timeline';
import EvaUnits from './rebuild/EvaUnits';
import Characters from './rebuild/Characters';
import Pilots from './rebuild/Pilots';
import Angels from './rebuild/Angels';
import Organizations from './rebuild/Organizations';
import Curiosities from './rebuild/Curiosities';

const RebuildUniverseContent = () => {
  return (
    <>
      <History />
      <Timeline />
      <EvaUnits />
      <Characters />
      <Pilots />
      <Angels />
      <Organizations />
      <Curiosities />
    </>
  );
};

export default RebuildUniverseContent;
