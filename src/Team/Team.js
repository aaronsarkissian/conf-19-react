import React from 'react';
import { TitleAccent, Title } from '../_components';
import TeamList from './TeamList';
import Member from './Member';
import './Team.scss';

export default () => (
  <div className="Team">
    <Title>
      Core
      <TitleAccent color="primary2"> Team</TitleAccent>
    </Title>
    <ul>
      {TeamList.map(member => (
        <Member key={member.name} position={member.position} name={member.name} />
      ))}
    </ul>
  </div>
);
