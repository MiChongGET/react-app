import React, {Component} from 'react'
import Search from './search'
import Main from './main'

export default class App extends Component {

    // state = {
    //     searchName: ''
    // }
    //
    // setSearchName = (searchName) => {
    //     // this.searchName = searchName;
    //     console.log(searchName)
    //     this.setState({searchName})
    // }

    render() {
        return (
            <div className="container">
                {/*<Search setSearchName={this.setSearchName}/>*/}
                {/*<Main searchName={this.state.searchName}/>*/}
                <Search/>
                <Main/>
            </div>
        )
    }
}