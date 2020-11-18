import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';

const Testapi: React.FunctionComponent = (props): JSX.Element => {
  const [searchUrl, setSearchUrl] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        setResponse(JSON.stringify(data, null, 2));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form className="test_form" onSubmit={handleSubmit}>
        <input className="form_input" type="search" value={searchUrl} onChange={(e) => setSearchUrl(e.target.value)} />
        <button className="form_submit" type="submit">Search</button>
      </form>
      <pre>
        {response}
      </pre>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Testapi);
