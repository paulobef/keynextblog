import React from 'react';
import { withRouter } from 'next/router';
import Navbar from '../components/Navbar';
import logo from '../public/chubby.svg';
import Jumbo from '../components/Jumbo';

const Post = withRouter(props => (
    <div>
        <Jumbo />
        <h1>{props.router.query.slug}</h1>
        <p>This is the blog post content.</p>
    </div>
  ));

const Page = withRouter(props => (
    <div>
        <Navbar name={'Nabuchodonosor'} logo={logo}></Navbar>
         <div className='container'>
            <Post />
        </div>
    </div>
  ));

  export default Page;
