import React from "react";
import Leaderboard from "../components/Leaderboard";
import './UserPage.css';  // Import the User Page CSS

function UserPage() {
  return (
    <div className="user-page">
      <div className="user-header">
        <h1>Welcome to the Event Leaderboard</h1>
        <p>Check out the top teams and their points!</p>
      </div>
      <Leaderboard />
    </div>
  );
}

export default UserPage;
