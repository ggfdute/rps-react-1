import React, { Component } from 'react';
import GotItButton from '../ButtonContainer/GotItButton';

export default class Rules extends Component {

    render() {
        return (
            <div className="rules">
                <h1>Game Rules</h1>               
                <br/>
                <div className="vs-cpu">

                    <h5>Vs. Computer:</h5>

                    <p>You can practice your skill for when you're ready to face User Competition!<br></br>
                        Play Individual Games, Best of 3, or Best of 7!

                    </p>
                </div>
                <br/>
                
                <div className="vs-player">

                    <h5> Vs. Player:</h5>

                    <p>Send an invite to a friend, play against a random opponent, or play Knockout Mode!<br></br>
                        Once you select your choice, wait for your opponent to select a move and see the result!
                    </p>


                </div>
                
                <div className='button'>
                    <GotItButton />
                </div>
            </div>
        );
    }
}
