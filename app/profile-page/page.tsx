import React from "react";
import ProfilePage from "../components/ProfilePage";

const App: React.FC = () => {
  const userProfile = {
    username: "john_doe",
    name: "John Doe",
    bio: "Software Engineer and Coffee Lover",
    profilePicture: "https://via.placeholder.com/150",
    posts: [
      {
        id: 1,
        content: "Just finished a great coding session!",
        image: "https://via.placeholder.com/640x480",
      },
      { id: 2, content: "Enjoying a cup of coffee with a beautiful view." },
    ],
  };

  return (
    <div>
      <ProfilePage {...userProfile} />
    </div>
  );
};

export default App;
