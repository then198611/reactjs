import React from 'react'
import { render } from 'react-dom'

const BrandDetail = React.createClass({
    render(){
        return (
            <p>这是单品id为{this.props.params.id}的介绍</p>
        )
    }
})

export default BrandDetail
