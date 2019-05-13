import React, {Component} from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {

    // constructor(props, context) {
    //     super(props, context);
    //     this.state={
    //         comments:[
    //             {username: 'MiChong',content:"厉害了"},
    //             {username: 'qjzxzxd',content:"6666"}
    //         ]
    //     }
    // }

    //给组件对象指定state属性
    state={
        comments:[
            {username: 'MiChong',content:"厉害了"},
            {username: 'qjzxzxd',content:"6666"}
        ]
    }

    addComment=(comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }


    render() {

        let {comments} = this.state;

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments}/>
                </div>
            </div>
        )
    }
}