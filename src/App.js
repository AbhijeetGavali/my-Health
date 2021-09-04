import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./screens/components/NavBar";
import DashBoardContainer from "./screens/components/DashBoardContainer";
import LoadingScreen from "./screens/components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <React.Fragment>
        <Router>
          {loading ? <LoadingScreen /> : null}
          <main>
            <div class="circle1" />
            <div class="circle2" />
            <Container className="glass">
              <Col md="1" className="py-4">
                <NavBar />
              </Col>{" "}
              <Col md="11">
                <DashBoardContainer setLoading={setLoading} />
              </Col>{" "}
            </Container>
          </main>
        </Router>
      </React.Fragment>
    </>
  );
}
