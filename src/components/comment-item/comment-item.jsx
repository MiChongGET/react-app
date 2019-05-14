import React, {Component} from 'react'

import './commentItem.css'
import PropTypes from "prop-types";

export default class CommentItem extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }

    //处理删除按钮功能
    handleClick = () => {

        const {comments, deleteComment,index} = this.props

        //提示
        // eslint-disable-next-line no-restricted-globals
        if (window.confirm(`确定删除${comments.username}的评论吗？`)) {
            deleteComment(index)
        }
    }


    render() {

        let {comments} = this.props

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comments.username}</span><span>说:</span></p>
                <p className="centence">{comments.content}</p>
            </li>
        )
    }
}