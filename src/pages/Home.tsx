import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';

const Home: React.FunctionComponent = (): JSX.Element => {
  useEffect(() => {
    fetch('http://api.scb.se')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div />
  );
};

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Home);
