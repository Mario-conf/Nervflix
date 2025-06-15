
import React from 'react';
import SubSectionTitle from '../SubSectionTitle';
import data from '@/data/timeline/original/organizations.json';

const Organizations = () => (
  <>
    <SubSectionTitle>{data.title}</SubSectionTitle>
    <ul className="space-y-4 mb-4 text-justify">
      {data.items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}:</strong> {item.text}
        </li>
      ))}
    </ul>
  </>
);

export default Organizations;
