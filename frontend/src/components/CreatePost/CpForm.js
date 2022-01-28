import { useState } from "react";
import { addOnePost } from "../../store/posts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function CpForm({ currPage, currId, setErrors, errors }) {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [contentImage, setContentImage] = useState("");
  const dispatch = useDispatch();
  const hist = useHistory();
  return (
    <div className="createPForm">
      <form
        id="postcreate"
        onSubmit={async (e) => {
          e.preventDefault();
          setErrors([]);
          if (!currPage) {
            setErrors(["comSelect"]);
            return;
          }
          const post = { heading, content, contentImage };
          const serverErrors = await dispatch(addOnePost(currId, post));
          if (serverErrors) {
            //console.log(serverErrors);
            console.log(errors);
            setErrors([...serverErrors]);
          } else {
            hist.push(`/pages/${currId}`);
          }
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "5px" }}>Title</label>
          <p style={{ color: "red" }}>
            {errors.find((e) => e === "heading") ? "Cannot be empty" : ""}
          </p>
        </div>
        <input
          placeholder="Title"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        ></input>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Image (Optional)</label>
          <p></p>
        </div>

        <input
          value={contentImage}
          onChange={(e) => {
            setContentImage(e.target.value);
          }}
        ></input>

        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "5px" }}>Markdown</p>
          <p style={{ color: "red" }}>
            {errors.find((e) => e === "content") ? "Cannot be empty" : ""}
          </p>
        </div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </form>
      <div>
        <button className="submit" form="postcreate">
          Post
        </button>
      </div>
    </div>
  );
}

export default CpForm;
