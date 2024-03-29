import React, { Component } from 'react';

import './App.css';
import StandingsTable from './components/standingsTable/StandingsTable'
import Select from './components/select/Select'
import MatchweekResults from './components/matchweekResults/MatchweekResults'

type AppState = {
  matchweek: number
}
class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      matchweek: 38
    };
  }


  getMatchweek = (selectedMatchweek: number) => {
    this.setState({
      matchweek: selectedMatchweek ? selectedMatchweek : 38
    })

  }

  render() {

    return (
      <div className="App">
        <h3>Premiership Standings 2016/2017</h3>
        <div>
          <span className="select"><label>Select matchweek:</label><Select matchweekSelect={this.getMatchweek} /></span>
        </div>
        <span className="matchweekResults"><label>Matchweek {this.state.matchweek} Results</label><MatchweekResults matchweek={this.state.matchweek} /></span>
        <div style={{ position: "relative" }}>
          <StandingsTable matchweek={this.state.matchweek} />
        </div>

      </div>
    );
  }


}

export default App;

