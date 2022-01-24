import { togglePostPage } from "../../store/toggles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PageData from "./PageData";

function PostContent() {
  const dispatch = useDispatch();
  const hist = useHistory();
  const currentPost = useSelector((state) => state.currentPost);
  return (
    <div className="spostContent">
      <div className="postContent">
        <div id="pcdiv">
          <div id="pcdiv" className="ipContent">
            <div className="lSidebar">
              <i className="far fa-thumbs-up"></i>
              <p>{currentPost.likers}</p>
              {/* <i class="fas fa-thumbs-up"></i>*/}
            </div>
          </div>
          <div className="postHeadings">
            <div className="postBel">
              <img
                src={
                  currentPost.page?.profile_image
                    ? currentPost.page?.profile_image
                    : "https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                }
                id={currentPost.page?.id}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(togglePostPage());
                  hist.push(`/pages/${e.target.id}`);
                }}
              ></img>
              <p
                className="pageMeta"
                id={currentPost.page?.id}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(togglePostPage());
                  hist.push(`/pages/${e.target.id}`);
                }}
              >
                {currentPost.page?.title}
              </p>
              <div className="posterMeta">
                <i className="fas fa-circle"></i>
                <p>Posted by</p>
                <p>{currentPost.owner?.username}</p>
              </div>
            </div>
            <div className="pageMC">
              <h4>{currentPost.heading}</h4>
              <ReactMarkdown>{currentPost.content}</ReactMarkdown>
              <div>
                <div className="cDiv">
                  <div>
                    <i className="far fa-comment-alt"></i>
                    <p>{currentPost.comments}</p>
                    <p>Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sideBar">
        <PageData />
      </div>
    </div>
  );
}

export default PostContent;
