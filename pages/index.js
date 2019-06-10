import { Component } from 'react';
import axios from 'axios'
import ListItem from '../components/ListItem'
import Navbar from '../components/Navbar';
import Jumbo from '../components/Jumbo';
import logo from '../public/chubby.svg'



class App extends Component {

  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/posts');
    return { posts: response.data };
  }

  render() {
    return (
      <div>
        <Navbar name={'Nabuchodonosor'} logo={logo}></Navbar>
        <div className='container'>
          <style jsx>{`
              .jumbotron {
                margin-top: 16px;
              }

          `}</style>
          
          <Jumbo title={'Welcome to Bibouilleland'} lead={'You\'re ready to jump'} link={'#'} linkText={'Read more'}></Jumbo>
          <div className='content row d-flex flex-wrap'>
            { this.props.posts.map((post, i) => {
                return (
                    <ListItem key={i} title={post.title} content={post.content.brief} image={post.image.secure_url} slug={post.slug}></ListItem>
                );
              }) }
          </div>
        </div>
      </div>
    );
  };
};

export default App;
