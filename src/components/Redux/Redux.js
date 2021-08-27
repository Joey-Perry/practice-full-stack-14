import React from 'react';
import './redux.css';

const Redux = () => {
    return (
        <div>
        <h1>Redux </h1>
        <h2><code>npm install redux react-redux</code></h2>
        <h2><code>in store.js</code></h2>
        <h4><code>{`import {createStore} from 'redux'`}</code></h4>
        <h4><code>{`import reducer from './reducer.js'`}</code></h4>
        <h4><code>{`export default createStore(reducer)`}</code></h4>
        
        <h2><code>in reducer.js</code></h2>
        <h4><code>const initialState</code></h4>
        <h4>// action TYPES</h4>
        <h4><code>const ACTION_TYPE = 'ACTION_TYPE'</code></h4>
        <h4>// action creator functions && exports</h4>
        <h4><code>{`export const actionTypeName = () => {
            const data = axios request;
            return {
                type: ACTION_TYPE,
                payload: data
            }
        }`}</code></h4>
        <h4><code> {`const reducer = (state = initialState, action){
            switch(action.type){
                case TYPE:{
                    return {
                        ...state,
                        newState
                    }
                }
                default: {
                    return state;
                }
            }
        }

        export default reducer;`}
        </code></h4>

        <h2><code>in index.js</code></h2>
        <h4><code>{`import {Provider} from 'react-redux'`}</code></h4>
        <h4><code>{`import store from '../redux/store'`}</code></h4>
        <h4><code>{`<Provider store={store}> <App /> </Provider>`}</code></h4>

        <h2>in any file/component that will be subscribed to the store:</h2>
        <h4><code>{`import {connect} from 'react-redux`}</code></h4>
        <h4><code>{`import {actionCreator} from './redux/reducer.js`}</code></h4>
        <h4>to access state and action creator it is on this.props</h4>
        <h4>// mapStateToProps puts reduxState on this.props</h4>
        <h4><code>{`const mapStateToProps = (reduxState) => {
            return {
                state: reduxState.state
            }
        }`}</code></h4>
        <h4>// mapDispatchToProps puts the actionCreator on this.props</h4>
        <h4><code>{`const mapDispatchToProps = {
            actionCreator
        }`}</code></h4>

        <h2>For multiple reducers, inside store.js </h2>
        <h4><code>{`import {combineReducers} from 'redux'`}</code></h4>
        <h4><code>{`const rootReducer = combineReducers({reducer, reducerTwo})`}</code></h4>
        
        <h2>Redux Middleware</h2>
        <h4><code>npm install redux-promise-middleware</code></h4>
        <h4><code>{`import {applyMiddleware} from 'redux'`}</code></h4>
        <h4><code>{`import promiseMiddleware from 'redux-promise-middleware`}</code></h4>
        <h4><code>{`export default createStore(rootReducer, applyMiddleware(promiseMiddleware))`}</code></h4>
        
        <h2>in reducer.js</h2>
        <h4><code>case TYPE + '_PENDING'</code></h4>
        <h4><code>case TYPE + '_FULFILLED'</code></h4>
        <h4><code>case TYPE + '_REJECTED'</code></h4>
        <h4>In '_REJECTED': </h4>
        <h4><code>{`errorMessages: action.payload`}</code></h4>
        </div>
    )
}

export default Redux;