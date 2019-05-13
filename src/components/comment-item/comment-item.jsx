import React, {Component} from 'react'

import './commentItem.css'
import PropTypes from "prop-types";

export default class CommentItem extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render() {

        let {comments} = this.props

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="">删除</a>
                </div>
                <p className="user"><span>{comments.username}</span><span>说:</span></p>
                <p className="centence">{comments.content}</p>
            </li>
        )
    }
}