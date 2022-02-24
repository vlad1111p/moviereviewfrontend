import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Context, SnakeGame } from "react-game-snake";



const Default = () => (
  <React.Fragment>
    <Helmet title="Default Dashboard" />
    <Container fluid className="p-0">
        <h1>Press P to pause or resume the game</h1>
        <SnakeGame
            colors={{
                field: "#bdc3c7",
                food: "#9b59b6",
                snake: "#3498db",
            }}
            countOfHorizontalFields={20}
            countOfVerticalFields={20}
            fieldSize={20}
            loopTime={200}
            pauseAllowed={true}
            restartAllowed={true}
            onLoose={(context: Context) => alert(`You loosed with ${context.game.points} points.`)}
            onRestart={(context: Context) => alert("restarted")}
            onWin={(context: Context) => alert(`You won with ${context.game.points} points.`)}
        />
    </Container>
  </React.Fragment>
);

export default Default;
