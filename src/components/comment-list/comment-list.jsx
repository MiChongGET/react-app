import React, {Component} from 'react'
import './commentList.css'
import CommentItem from '../comment-item/comment-item'
import PropTypes from 'prop-types'

export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }

    render() {

        let {comments,deleteComment} = this.props

        //动态修改页面
        let display = comments.length ===0?'block':'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <CommentItem comments={comment} key={index} deleteComment={deleteComment} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}

// CommentList.prototype={
//     comments:PropTypes.array.isRequired
// }