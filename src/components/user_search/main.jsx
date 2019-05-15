import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

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

    //初始化订阅消息,使用消息订阅方式组件之间传递消息
    componentDidMount() {
        //接收消息
        PubSub.subscribe('searchName', (msg, searchName) => {
            console.log(`searchName=>${searchName}`)
            //更新状态(请求中)
            this.setState({
                initView: false,
                loading: true
            })

            const url = `https://api.github.com/search/repositories?q=${searchName}&sort=stars`
            axios.get(url).then(response => {
                //得到相应数据
                const result = response.data
                // console.log(result)

                //数据转换
                const owners = result.items.map(item => {
                    return {url: item.owner.html_url, avatarUrl: item.owner.avatar_url, name: item.owner.login}
                })

                console.log(owners)
                this.setState({users: owners, loading: false})
                //更新状态
            }).catch(error => {
                console.log(error)
                this.setState({errorMsg: error, loading: false})
            })
            console.log(`我收到了消息=>${searchName}`)
        })
    }

    //当组件接收到新的属性时回调(props方式传递数据)
    /*componentWillReceiveProps(nextProps, nextContext) {//指定新的searchName,需要请求


        const {searchName} = nextProps
        //更新状态(请求中)
        this.setState({
            initView: false,
            loading: true
        })

        const url = `https://api.github.com/search/repositories?q=${searchName}&sort=stars`
        axios.get(url).then(response => {
            //得到相应数据
            const result = response.data
            // console.log(result)

            //数据转换
            const owners = result.items.map(item => {
                return {url: item.owner.html_url, avatarUrl: item.owner.avatar_url, name: item.owner.login}
            })

            console.log(owners)
            this.setState({users: owners, loading: false})
            //更新状态
        }).catch(error => {
            console.log(error)
            this.setState({errorMsg: error, loading: false})
        })
        console.log(`我收到了消息=>${searchName}`)
    }
*/
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
                            <div className="card" key={index}>
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