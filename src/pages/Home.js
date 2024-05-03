import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: 'left' }}> 
      <h1>Assignment 4 John Massey</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}> 
          <li>
            <Link to="/AssignmentOne">Assignment 1: Change color of item</Link>
          </li>
          <li>
          <Link to="/tictactoe">Assignment 2: Tic-Tac-Toe</Link>
          </li>
          <li>
          <Link to="/basicForm">Assignment 3: Basic Form Page</Link>
          </li>
          <li>
            <Link to="/timetracking">Book Example 1: Time Tracking</Link>
          </li>
          <li>
            <Link to="/votingapp">Book Example 2: Voting App</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
