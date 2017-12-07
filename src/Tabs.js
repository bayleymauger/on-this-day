import React, {Component}  from 'react';

class Tabs extends Component {
  render() {
    const {handleClick} = this.props;
    return (
      <div className="tabs">
        <ul>
          <li><button id="events" className="active" onClick={handleClick}>Events</button></li>
          <li><button id="births" onClick={handleClick}>Births</button></li>
          <li><button id="deaths" onClick={handleClick}>Deaths</button></li>
        </ul>
      </div>
    )
  }
}

export default Tabs;
