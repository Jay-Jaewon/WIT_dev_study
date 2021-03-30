import React from "react";
import logo from './logo.svg';
import './App.css';
import { getDefaultNormalizer } from "@testing-library/dom";

const url = 'https://jsonplaceholder.typicode.com/posts/';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results : []};
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({results: data}));
  }

  render () {
    console.log(this.state.results)
    return (
      <div>
        {this.state.results.map(data =>
        <div key = {data.id} className="Post">
          <div className = "Grid">
            <span className="PostLabel">User</span>
            <span className="PostContent">{data.userId}</span>
            <span className="PostLabel">Title</span>
            <span className="PostContent">{data.title}</span>
          </div>
          <div className="PostLine"></div>
          <div className = "Grid">
            <span className="PostLabel">Body</span>
            <span className="PostContent">{data.body}</span>
          </div>
        </div>)}
      </div>
    )
  }
}

function App() {
  return (
  <div className="App">
    <h1>Week2</h1>
    <Post />
  </div>

  );
}

export default App;


