import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';

const Home: React.FunctionComponent = (props): JSX.Element => {
  const hej = 'Home';

  return (
    <div>
      {hej}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Home);
