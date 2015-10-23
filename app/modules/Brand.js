import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, State} from 'react-router'

const Brand = React.createClass({
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/brand/1">品牌1</Link></li>
                    <li><Link to="/brand/2">品牌2</Link></li>
                    <li><Link to="/brand/3">品牌3</Link></li>
                </ul>

                <h4>this is brand nav</h4>
            </div>
        )
    }
})

export default Brand
