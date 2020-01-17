import React from 'react';
import Gallery from './components/Gallery/Gallery';
import service from './service/service';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        isLoading: true,
        tiles : []
    }
  }

  componentDidMount () {
    service()
    // fetch('someUrl') //Which should be the correct way to do it
        .then(data => {
          this.setState({
              isLoading: false,
              tiles: data.items
          })
        })
  }

  render () {
    return this.state.isLoading ? 'loading' : <div className="gallery"><Gallery tiles={this.state.tiles} sectionName="RECENTLY ADDED"/></div>
  }
}

export default App;
