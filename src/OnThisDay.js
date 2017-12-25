import React, {Component} from 'react';
import Tabs from './Tabs';
import ContentWrapper from './ContentWrapper';
import axios from 'axios';

class OnThisDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      births: [],
      deaths: [],
      tab: 'events'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const events = [];
    const births = [];
    const deaths = [];
    await axios.get('http://history.muffinlabs.com/date').then(res => {
      const data = res.data.data;
      data.Events.forEach(val => events.push(val));
      data.Births.forEach(val => births.push(val));
      data.Deaths.forEach(val => deaths.push(val));
    }).then(() => {
      this.setState({...this.state, events: events, births: births, deaths: deaths});
    });
  }

  handleClick(e) {
    this.setState({...this.state, tab: e.target.id});
    document.querySelector('.active').removeAttribute('class');
    e.target.setAttribute('class', 'active');
  }

  render() {
    const {events} = this.state;
    const {births} = this.state;
    const {deaths} = this.state;
    return (
      <div className="on-this-day">
        <Tabs handleClick={this.handleClick} tab={this.state.tab} />
        <ContentWrapper events={events} births={births} deaths={deaths} tab={this.state.tab} />
      </div>
    )
  }
}

export default OnThisDay;
