import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
  constructor() {

    super()

    this.state = {
      randomCard: null,
      isUpdated:false,
      }
  }

  componentDidMount() {
    this.getRandomCard()
  }

  handleTextBoxChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  getRandomCard = () => {
    let url = `https://api.scryfall.com/cards/random`
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
      this.setState({randomCard: json})
    })
  }

  render() {
    const { randomCard } = this.state;
    if (randomCard == null) {
      return null;
    }

  return (
      <div className="App" >
        <h1 className="Text">LOGIN</h1>
      
        <Login />
        <p></p>
        <div>

        <img className="frontImage" src={this.state.randomCard.image_uris.png}/>
        </div>

      </div>
    )
  }
}

export default App;
