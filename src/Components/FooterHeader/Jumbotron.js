import React from 'react';

const Jumbotron = () => {
    const style = {
        textAlign: "center",
        fontWeight: "550",
        fontFamily: 'Play sansSerif'
    }
    return (
        <div>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 style={style} className="display-3"><b>Click Game</b></h1>
                    <p style={style} className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;