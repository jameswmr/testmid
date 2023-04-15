import { FaTrash } from "react-icons/fa"
import { IconBtn } from "./IconBtn"
import "./style.css"
import services from "../services";
const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
})

export function Comment({
  id,
  message,
  createdAt,
  userId,
  username,
  image,
}) {
  const onCommentDelete = (event) =>  {
    services.user.delete({id: id, userId: userId});
    window.location.replace("/chat");
    event.preventDefault();
  }
  return (
    <>
      <div className="comment">
        <div className="header">
          <span className="name">{username}</span>
          <span className="date">
            {dateFormatter.format(Date.parse(createdAt))}
          </span>
        </div>
        <div className="footer">
            <div><img src={image} alt="Base64 encoded image" /></div>
            <div>
                {message}
            </div>
            <IconBtn
                onClick={onCommentDelete}
                Icon={FaTrash}
                aria-label="Delete"
                color="danger"
              />
        </div>
      </div>
    </>
  )
}