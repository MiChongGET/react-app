import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {

    static propTypes = {
        //searchName:PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    };

    componentDidMount() {
    }

    render() {

        const {initView, loading, users, errorMsg} = this.state;
        const {searchName} = this.props

        if (initView) {
            return <h2>输入关键字搜索:{searchName}</h2>
        } else if (loading) {
            return <h2>Loading...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card">
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl}
                                         style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }

                </div>
            )
        }

    }
}