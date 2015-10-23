import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, State} from 'react-router'

const Sku = React.createClass({
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/sku/1">单品1</Link></li>
                    <li><Link to="/sku/2">单品2</Link></li>
                    <li><Link to="/sku/3">单品3</Link></li>
                </ul>
                <h2>this is sku navs</h2>
            </div>
        )
    }
})

export default Sku