import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, loadProfile } from "../Store/Reducer";
import heart from "../Assets/likes (2).svg";
import comments from "../Assets/comments.svg";
import airplane from "../Assets/share.svg";
import save from "../Assets/save.svg";
import "./content.css";

const Content = () => {
  const profile = useSelector((state) => state.profile);
  const loading = useSelector((state) => state.loading);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
    dispatch(loadPosts());
  }, []);
  if (loading) {
    return <h1>loading</h1>;
  }
  console.log(profile);

  return (
    <div className="backgraund">
      {posts.map((item) => (
        <div className="common_block">
          <div className="link_block">
            <div className="icon">
              <div className="user">
                <img src={profile.profile_img} alt="" />
                <div className="profile_text">{profile.username}</div>
              </div>
              <div className="points">...</div>
            </div>
            <div className="publications">
              <img src={item.image} alt="" />
            </div>
            <div className="new_title">
              <div className="title">
                <img src={heart} alt="" />
                <img src={comments} alt="" />
                <img src={airplane} alt="" />
              </div>
              <div className="saved">
                <img src={save} alt="" />
              </div>
            </div>
            <div className="likes">{item.likes} likes</div>
            <div className="description">{profile.username} {} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
