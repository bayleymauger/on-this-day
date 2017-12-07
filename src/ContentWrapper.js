import React from 'react';
import Post from './Post';
import ReactHtmlParser from 'react-html-parser';

const ContentWrapper = (props) => {
  let views = <div className="loading">Loading...</div>
  if(props.tab === 'events'){
    if(props.events && props.events.length > 0){
      views = props.events.map((val, i) => {
        return <Post key={i} html={ReactHtmlParser(val.html)} year={val.year} />
      });
    }
  } else if(props.tab === 'births'){
    if(props.births && props.births.length > 0){
      views = props.births.map((val, i) => {
        return <Post key={i} html={ReactHtmlParser(val.html)} year={val.year} />
      });
    }
  } else if(props.tab === 'deaths'){
    if(props.deaths && props.deaths.length > 0){
      views = props.deaths.map((val, i ) => {
        return <Post key={i} html={ReactHtmlParser(val.html)} year={val.year} />
      });
    }
  }
  return (
    <div className="content-wrapper">
      {views}
    </div>
  )
}

export default ContentWrapper;
