import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Header } from './style';

export default function Headers() {
  return (
    <Header>
      <FaGithub />
      <h1>PESQUISE POR REPOSITÓRIOS</h1>
    </Header>
  );
}
