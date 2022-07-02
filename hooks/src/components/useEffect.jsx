import React, { useState } from "react";
const UseEffect = () => {
  const [resourceType, setResourceType] = useState("post");

  return (
    <div>
      <button onClick={() => setResourceType("post")}>Posts</button>
      <button onClick={() => setResourceType("user")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
  );
};

export default UseEffect;
