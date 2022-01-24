import FloatingLogin from "../FloatingLogin";
import FloatingSignup from "../FloatingSignup";
import { useSelector } from "react-redux";
import CreatePage from "../CreatePage";
import PostPage from "../PostPage";
import Nav from "./Nav";
function TopBar({icon,name}) {
  const loginShow = useSelector((state) => state.loginShow);
  const signupShow = useSelector((state) => state.signupShow);
  const createPageShow = useSelector((state) => state.createPageShow);
  const postPageShow = useSelector((state) => state.postPageShow);
  return (
    <>
      <Nav icon={icon} name={name} />
      {loginShow && <FloatingLogin />}
      {signupShow && <FloatingSignup />}
      {createPageShow && <CreatePage />}
      {postPageShow && <PostPage />}
    </>
  );
}

export default TopBar

