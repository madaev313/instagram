import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, loadProfile } from "../Store/Reducer";
import heart from "../Assets/likes (2).svg";
import comments from "../Assets/comments.svg";
import airplane from "../Assets/share.svg";
import save from "../Assets/save.svg";
import "./content.scss";
import Suggestions from "../Suggestions/Suggestions";

const Content = () => {
  const profile = useSelector((state) => state.profile);
  const loading = useSelector((state) => state.loading);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
    dispatch(loadPosts());
  }, [dispatch]);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="background">
      <div className="content">
        <div>
          {posts.map((item) => (
            <div key={item.id} className="common_block">
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
                  <div className="icons">
                    <img src={heart} alt="" />
                    <img src={comments} alt="" />
                    <img src={airplane} alt="" />
                  </div>
                  <div className="saved">
                    <img src={save} alt="" />
                  </div>
                </div>
                <div className="likes">{item.description} </div>
                <div className="description">{profile.username} </div>
              </div>
            </div>
          ))}
        </div>
        <Suggestions />
      </div>
    </div>
  );
};

export default Content;
