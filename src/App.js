import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state={
      posts:[
        {
          id:1,
          title: 'o título 1',
          body:'o corpo 1'
        },
        {
          id: 2,
          title: 'o título 2',
          body: 'o corpo 2'
        },
        {
          id: 3,
          title:'o título 3',
          body: 'o corpo 3'
        },
      ]
    };
    render(){
      const{posts}=this.state;
      return(
        <div className="App">
          {posts.map( post => (
              <>
              <h1 key={post.id}>{post.title}</h1>
              <p>{post.body}</p>
              </>
          ))}          
        </div>
      )
    };
}

export default App;
