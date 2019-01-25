import React from 'react';
import { ContractForm } from 'drizzle-react-components';

export default class VoterForms extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome, voter.</h1>
        <h3>Vote:</h3>
        <ContractForm contract="SimpleDemocracy" method="vote" />
        <h3>getElectionWinner:</h3>
        <ContractForm contract="SimpleDemocracy" method="getElectionWinner" />
        TODO - this should be something we display vs call?
      </div>
    );
  }
}
