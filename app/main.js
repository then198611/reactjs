import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, State} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Sku from './modules/Sku.js'
import SkuDetail from './modules/SkuDetail.js'
import Brand from './modules/Brand.js'
import BrandDetail from './modules/BrandDetail.js'

const App = React.createClass({
    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="/sku">单品</Link>
                    <Link to="/brand">品牌</Link>
                </nav>
                {this.props.children}
            </div>
        )
    }
})

const routeConfig = [{
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'sku',
            component: Sku,
            childRoutes: [
                {
                    path: '/sku/:id',
                    component: SkuDetail
                }
            ]
        },
        {
            path: 'brand',
            component: Brand,
            childRoutes: [
                {
                    path: '/brand/:id',
                    component: BrandDetail
                }
            ]
        }
    ]
}]

render(<Router history={createBrowserHistory()} routes={routeConfig}/>, document.getElementById('container'));
/*
 Router.run(routes, Router.HashLocation, function (Root) {
 React.render(<Root />, document.body);
 });*/
