"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
//import { useState, useEffect } from "react";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner />
        {/* Comment Example */}
        {/* Reply Example */}

        {/* map-loop render Comment component here */}
        {comments.map((x) => (
          <Comment
            userImagePath={x.userImagePath}
            username={x.username}
            commentText={x.commentText}
            likeNum={x.likeNum}
            replies={x.replies}
          />
        ))}
      </div>
    </div>
  );
}
