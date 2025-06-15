
import React from 'react';
import SubSectionTitle from '../SubSectionTitle';
import data from '@/data/timeline/original/history.json';

const History = () => (
  <>
    <SubSectionTitle>{data.title}</SubSectionTitle>
    <p className="mb-4 text-justify">
      {data.content}
    </p>
  </>
);

export default History;
