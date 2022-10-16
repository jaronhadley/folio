import React from 'react';
import cs from '../img/coming_soon.png'
import abt from '../img/abt_bday_main.png'
import blg from '../img/2022-09-10 20_54_09-Blog 1.5.png'

export default function Projects() {
  return (
    <div>
      <div className="row">
        <h1 className="row m-4">Projects</h1>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3 card card-rounded m-2">
          <div className="card-header text-center">About Your Birthday</div>
          <a href="https://joncerruti.github.io/About-Your-Birthday/"><div className="card-body"><img src={abt} alt="Project 1"></img></div></a>
        </div>
        <div className="col-3 card card-rounded m-2">
          <div className="card-header text-center">Simple Web Blog</div>
          <a href="https://guarded-beach-85319.herokuapp.com/"><div className="card-body"><img src={blg} alt="Project 1"></img></div></a>
        </div>
        <div className="col-3 card card-rounded m-2">
          <div className="card-header text-center">Project</div>
          <div className="card-body"><img src={cs} alt="Project 1"></img></div>
        </div>
        <div className="col-3 card card-rounded m-2">
          <div className="card-header text-center">Project</div>
          <div className="card-body"><img src={cs} alt="Project 1"></img></div>
        </div>
        <div className="col-3 card card-rounded m-2">
          <div className="card-header text-center">Project</div>
          <div className="card-body"><img src={cs} alt="Project 1"></img></div>
        </div>
        <div className="col-3 card card-rounded m-2">
          <div className="card-header text-center">Project</div>
          <div className="card-body"><img src={cs} alt="Project 1"></img></div>
        </div>
      </div>
    </div>
  );
}