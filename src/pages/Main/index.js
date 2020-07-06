import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

import api from '../../services/api';

export default class Main extends Component {
  // state serve para guardar o estado da aplicação //
  state = {
    newRepository: '',
    repositorys: [],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newRepository: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepository, repositorys } = this.state;

    const response = await api.get(`${newRepository}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositorys: [...repositorys, data.name],
      newRepository: '',
      loading: false,
    });

    // console.log(this.state.repository);
  };

  render() {
    const { newRepository, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepository}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
