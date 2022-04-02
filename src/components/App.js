import React, { Component } from 'react';
import '../css/app.css';
import Nav from './Nav';
import Random from './Random';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: {
        image:'',
        title:''
      }
    }
  }
  componentDidMount() {
    this.traerGif()
  }
  
  componentDidUpdate() {
  }

  traerGif() {
    this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=urjCdotA83PWAzT5QhJ4u11yC38YBEza&tag=&rating=g', this.mostrarGif )
  }

  apiCall(url, handle) {
    fetch(url)
      .then(response => {return response.json()})
      .then(data => handle(data))
      .catch(err => console.log(err))
  }

  mostrarGif = (data) => {
    this.setState({
      gif: {
        image: data.data.images.original.url,
        title: data.data.title
      }
    })
  }

  actualizarGif = () => {
    this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=urjCdotA83PWAzT5QhJ4u11yC38YBEza&tag=&rating=g', this.mostrarGif )
  }

  render() {
    return (
      <div>
        <Nav actGif = { () => this.actualizarGif() }/>
        <Random randomGif = {this.state.gif}/>
      </div>
    );

  }
}

export default App;
