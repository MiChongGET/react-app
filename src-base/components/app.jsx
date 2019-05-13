import React, {Component} from 'react'
import logo from '../logo.svg'

export default class App extends Component {

    render() {
        return(
            <div className='root'>
                <img className='logo' src={logo} align='center'/>
                <span className='title'>{this.props.title}</span>
            </div>
        )
    }
}