import React from 'react'

import { Footer, Header, Location, Money, Professional, Services} from './containers';
import { Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
			<Navbar />
      <Header />
      <Services />
      <Professional />
      <Money />
      <Location />      
      <Footer />
    </div>
  )
}

export default App; 