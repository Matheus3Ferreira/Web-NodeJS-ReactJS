import './styles.css'
import React, {Component} from 'react'; 

export default class ButtonOperation extends Component{
    render(){
        return(
            <button class={this.props.classButton} onClick={this.props.functionOperation}>
                <p class="operation">{this.props.operationType}</p>
            </button>
        )
    }
}