import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import idx from 'idx';

import Spinner from '../components/Spinner';
import weather from '../../weather';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

class Weather extends React.Component {
  componentDidMount() {
    const { getWeather } = this.props;
    getWeather({
      latitude: 54.695427,
      longitude: 25.25938,
    });
  }

  render() {
    const { isFetching, weatherData } = this.props;
    const summary = idx(weatherData, w => w.currently.summary);
    const temperature = idx(weatherData, w => w.currently.temperature);

    if (isFetching && !weatherData) {
      return <Spinner />;
    }

    return (
      <Container>
        <p>{summary}</p>
        <p>{temperature}</p>
      </Container>
    );
  }
}

Weather.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  weatherData: PropTypes.shape({}),
  getWeather: PropTypes.func.isRequired,
};

Weather.defaultProps = {
  weatherData: undefined,
};

const enhance = connect(
  state => ({
    isFetching: weather.selectors.isFetching(state),
    weatherData: weather.selectors.getData(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        getWeather: weather.popupActions.getWeather,
      },
      dispatch
    )
);

export default enhance(Weather);
