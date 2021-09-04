import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./screens/components/NavBar";
import DashBoard from "./screens/components/DashBoard";
import LoadingScreen from "./screens/components/LoadingScreen";
import WelcomeScreen from "./screens/components/WelcomeScreen";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [welcome, setWelcome] = useState(false);
  return (
    <>
      <React.Fragment>
        <Router>
          {loading ? <LoadingScreen /> : null}
          {welcome ? <WelcomeScreen setWelcome={setWelcome} /> : null}
          <main>
            <Container className="glass">
              <Col md="1" className="py-4">
                <NavBar />
              </Col>{" "}
              <Col md="11">
                <DashBoard setLoading={setLoading} />
              </Col>{" "}
            </Container>
          </main>
          <div class="circle1" />
          <div class="circle2" />
        </Router>
      </React.Fragment>
    </>
  );
}
