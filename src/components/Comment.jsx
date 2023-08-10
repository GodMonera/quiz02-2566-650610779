import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20} hidden={likeNum === 0}></img>
            <span style={{ color: "#B0B3B8" }} hidden={likeNum === 0}>
              {likeNum} คน
            </span>
          </div>
        </div>
      </div>
      {/* map-loop render Reply component here */}
      {replies.map((x) => (
        <Reply
          key={x.username}
          userImagePath={x.userImagePath}
          username={x.username}
          replyText={x.replyText}
          likeNum={x.likeNum}
        />
      ))}
    </div>
  );
};
