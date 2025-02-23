import React from "react";

interface UserProfile {
  username: string;
  name: string;
  bio: string;
  profilePicture: string;
  posts: { id: number; content: string; image?: string }[];
}

const ProfilePage: React.FC<UserProfile> = ({
  username,
  name,
  bio,
  profilePicture,
  posts,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={profilePicture}
            alt={`${username}'s profile`}
            className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">@{username}</p>
            <p className="mt-2">{bio}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Posts</h2>
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <p>{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="mt-2 rounded-lg"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
