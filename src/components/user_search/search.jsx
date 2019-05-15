import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = () => {
        //得到输入的关键字
        const searchName = this.inputName.value.trim();
        // const searchName = this.refs.searchName
        if (searchName) {
            //搜索
            // this.props.setSearchName(searchName)
            //发布消息
            PubSub.publish('searchName',searchName)
        }


    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search"
                               ref={(input => this.inputName = input)}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}