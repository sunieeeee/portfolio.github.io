import React, {memo} from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as colors from "../assets/style/colors";
import PageTitle from "../components/PageTitle";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  .box {
    position: relative;
    padding: 30px;
    background-color: #252525;

    &::after {
      content: "";
      width: 0;
      height: 90%;
      background: ${colors.ORANGE};
      opacity: 0.9;
      position: absolute;
      top: 5%;
      left: 5%;
      -webkit-transition: all 0.4s cubic-bezier(0.57, 0.21, 0.69, 1.25);
      transition: all 0.4s cubic-bezier(0.57, 0.21, 0.69, 1.25);
      z-index: 2;
    }

    &:hover {
      &:after {
        width: 90%;
      }

      .icon {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
        transition-delay: 0.3s;
      }

      .short_desc {
        p,
        h4 {
          opacity: 1;
          visibility: visible;
          transform: translateY(0px);
          transition-delay: 0.3s;
        }

        h4 {
          transition-delay: 0.5s;
        }
      }
    }
    .title {
      margin-bottom: 15px;
      font-size: 24px;
      font-weight: 500;
      color: ${colors.ORANGE};
    }

    .time {
      display: block;
      margin-bottom: 20px;
      font-size: 14px;
      opacity: 0.8;
      font-weight: 400;
      font-family: "Open Sans", sans-serif;

      i {
        padding-right: 10px;
      }
    }

    .description {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.7;
    }
    
    .tech_stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      li {
        font-size: 13px;
        padding: 4px 10px;
        border: 1.5px solid #7e7e7e;
        border-radius: 20px;
      }
    }

    .icon {
      z-index: 3;
      position: absolute;
      right: 10%;
      top: 10%;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      border: 1px solid ${colors.WHITE};
      text-align: center;
      font-size: 20px;
      color: ${colors.WHITE};
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
      visibility: hidden;
    }

    .short_desc {
      z-index: 3;
      position: absolute;
      bottom: 10%;
      left: 10%;
      overflow: hidden;

      p {
        color: ${colors.WHITE};
        font-weight: 600;
        font-size: 13px;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(50px);
        transform: translateY(50px);
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
      }

      h4 {
        font-size: 15px;
        margin-top: 5px;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(50px);
        transform: translateY(50px);
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
      }
    }

    .link {
      z-index: 5;
      position: absolute;
      left: 0; 
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;   

const Projects = memo(() => {
  return (
    <div className="inner">
      <PageTitle leftText="My" rightText="Projects" contentText="Projects" />
      <ProjectsContainer>
        <div className="box">
          <h4 className="title">Mary's Forest</h4>
          <span className="time">
            <i className="fa-solid fa-calendar-days"></i>
            2001 - 2005
          </span>
          <p className="description">
            키즈놀이터 홈페이지입니다. 메인페이지, 메리의 숲 이야기 페이지,
            공간안내 페이지, 예약페이지, 공지사항페이지의 퍼블리싱을
            담당하였습니다. 모든 페이지가 반응형으로서 모바일, 태블릿에서도
            문제없이 볼 수 있도록 제작하였습니다.
          </p>
          <ul className="tech_stack">
            <li>html & css</li>
            <li>jquery</li>
            <li>javascript</li>
            <li>bootstrap</li>
            <li>flatpicker</li>
          </ul>

          <span className="icon">
            <i className="fa-solid fa-arrow-right"></i>
          </span>

          <div className="short_desc">
            <p>Publishing</p>
            <h4>Mary's Forest</h4>
          </div>

          {/* <a className='link' href='/ProjectDetail'></a> */}
          <NavLink className='link' to="/projects/detail"></NavLink>
        </div>
      </ProjectsContainer>
    </div>
  );
});

export default Projects;