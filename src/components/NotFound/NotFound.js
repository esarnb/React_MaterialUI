import React from 'react';

export default function NotFound() {
    return (
        <div>Blank Page, nothing to see here!</div>
    )
}

/*
    import React, {Component, Fragment} from 'react';

    class XYZ extends Component {

        constructor(props) {
            super(props);
            this.state = {name: "Esar", section: props.user.section};
        }

        render() {
            return (
                <div> {this.state.name} | {this.state.section} </div>
            )
        }
    }


    function NotFound(props){
        return (<div> {props.name} | {props.section} </div>)
    }

    NotFound = (props) => { <div /> }
*/