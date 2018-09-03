import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectExample from '../actions/index';

class SingleContainer extends Component {
    renderList(){
        return (
            this.props.examples.map(example => {
                return (
                    <li
                    onClick={() => this.props.selectExample(example)}
                    key={example.title}
                    className='list-group-item'>
                        {example.title}
                    </li>
                )
            })
        )
    }

    render() {
        return (
        <ul className='list-group md-4'>
            { this.renderList() }
        </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        examples: state.example
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ( {selectExample: selectExample}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleContainer);