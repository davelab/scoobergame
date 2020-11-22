import React from "react";
import { Header } from "./components/Header";
import { StyledWrapper } from "./StyledApp";
import GameStage from "./screens/GameStage";
import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GameStateProvider } from "./context/gameState";

const link = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  uri: "http://localhost:4000",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GameStateProvider>
        <div className="App">
          <Header />
          <StyledWrapper>
            <GameStage />
          </StyledWrapper>
        </div>
      </GameStateProvider>
    </ApolloProvider>
  );
};

export default App;
