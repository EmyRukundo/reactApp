import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-10 col-md-offset-1">
                <h1>Hi {user.firstName}!</h1>
                <p>thanks for loggin with us, you rock!</p>
                <h3>Stuff to know on react js:</h3>
                {users.loading && <em>Stuff to show user...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ol>
                        {users.items.map((user, index) =>
                            <h3 key={user.id}>
                                <h5>Hooks</h5>
                                <p>Only Call Hooks at the Top Level
                                   Don’t call Hooks inside loops, 
                                   conditions, or nested functions. 
                                   Instead, always use Hooks at the top 
                                   level of your React function. By following this rule,
                                    you ensure that Hooks are called in the same order each
                                    time a component renders. That’s what allows React to correctly
                                    preserve the state of Hooks between multiple useState and useEffect
                                    calls. (If you’re curious, we’ll explain this in depth below.)
                                    Finally, we’re ready to learn about writing your own Hooks!
                                     Custom Hooks let you combine Hooks provided by React into your 
                                     own abstractions, and reuse common stateful logic between different 
                                     components.

                                </p>
                                <a href={"https://reactjs.org/docs/hooks-rules.html"}>readMore</a>
                                
                            </h3>
                        )}
                    </ol>
                }
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <p class="text-right">
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };