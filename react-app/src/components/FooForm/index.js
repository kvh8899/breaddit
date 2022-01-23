import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../store/toggles";
import "./fooform.css";
function FooForm() {
  const session = useSelector((state) => state.session.user);
  const hist = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="createPost">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img
          src={
            session?.profile_image
              ? session?.profile_image
              : "https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
          }
          alt=""
        ></img>
        <input
          placeholder="Create Post"
          onClick={(e) => {
            if (session) {
              hist.push("/posts/submit");
            } else {
              dispatch(toggleLogin());
            }
          }}
        ></input>
      </form>
    </div>
  );
}

export default FooForm;
