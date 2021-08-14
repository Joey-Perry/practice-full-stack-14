import React from 'react';
import './react.css';

const ReactJS = () => {
    return (
        <>
        <h1>React </h1>
        <div className='react-page'>
        <h2>Benefits: </h2>
        <ol>
            <li>Component-based architecture</li>
            <li>Virutal DOM Handling</li>
            <li>Unidirectional data flow</li>
            <li>JSX</li>
        </ol>
        <h3>What is the virutal dom?</h3>
        <p>Light-weight copy of the DOM. When a change is made to the virutal
            DOM then reconciliation happens between the virtual DOM and the actual DOM
            where only necessary changes to the UI are made to the actual DOM, which
            increases performance.
        </p>

        <h3>Unidirectional Data Flow</h3>
        <p>Using props allows us to pass data from parent component to children
            components. This makes the app easier to debug and reason about.
        </p>

        <h3>Getting started: </h3>
        <code>npx create-react-app app-name</code>

        <h3>Once the app has been created, navigate into it and run: </h3>
        <code>npm start</code>

        <h3>Best Practices: </h3>
        <h4>To update state: </h4>
        <code>this.setState({`{}`})</code>

        <h4>Looping through an array</h4>
        <code>{`{myList.map(item => {
            return <p>{item} </p>
        })}`}</code>

        <h4>Updating state with previous state: </h4>
        <code>this.setState({`(state) => {
            return{ newState: state }
        }`})</code>

        <h4>Place API class in the componentDidMount() method which is called after a component is 
            mounted to the DOM.
        </h4>

        <h4>Use componentDidMount() for event listeners and to use componentDidUnmount() to remove event listeners</h4>
        </div>
        </>

    )
}

export default ReactJS;