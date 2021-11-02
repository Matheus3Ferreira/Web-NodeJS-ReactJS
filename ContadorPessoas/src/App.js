import React, {Component} from 'react';
import './App.css';
import  ButtonOperation  from './components/OperationButton'

export class App extends Component {
  constructor(props) {
    super(props);
    this.plusPerson = this.plusPerson.bind(this);
    this.minusPerson = this.minusPerson.bind(this);
    this.state = {
      counter: 0,
    }
  }

  plusPerson(){
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }
  minusPerson(){
    this.setState(prevState => ({counter: prevState.counter - 1}));
  }
  render(){


    return (
      <div class="container">

        <div>

          <header>
            <h1>Contador de Pessoas</h1>
          </header>
        
          <main>
            <div class="containerCounter">
              <p class="counter">{this.state.counter}</p>
            </div>

            <section class="buttonsContainer">
              <ButtonOperation classButton="btn btn-plus" operationType="+" functionOperation={this.plusPerson}/>
              <ButtonOperation classButton="btn btn-minus" operationType="-" functionOperation={this.minusPerson}/>
            </section>
          </main>

        </div>
      </div>
    );
  }
}

export default App;
