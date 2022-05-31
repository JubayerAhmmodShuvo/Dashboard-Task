import React from 'react';
import './Sidebar.css';
import logo from '../images/logo.jpg'

const Sidebar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="d-flex">
          <img src={logo} id="logo" alt="..."></img>
        </div>
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-gauge"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-vault"></i>Tactics Vault
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-people-group"></i>Teams
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-clipboard-list"></i>Schedule Generator
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-calendar-days"></i>Weekly Training Plans
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-arrow-up-right-dots"></i>Team Matrics
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-gear"></i>Customization
            </a>
          </li>
        </ul>
        <div id="bottom">
          <p className="text-white" >  Select Your Team</p>
          <div class="dropdown ">
            <button
              class="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button >
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item text-black" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item text-black" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item text-black" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main_content">
        <div className="header">Welcome!! Have a nice day.</div>
        <div className="info">
          
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
            nobis ut exercitationem atque accusamus sit natus officiis totam
            blanditiis at eum nemo, nulla et quae eius culpa eveniet
            voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
            perferendis itaque alias sint, beatae non maiores magnam ad, veniam
            tenetur atque ea exercitationem earum eveniet totam ipsam magni
            tempora aliquid ullam possimus? Tempora nobis facere porro,
            praesentium magnam provident accusamus temporibus! Repellendus harum
            veritatis itaque molestias repudiandae ea corporis maiores non
            obcaecati libero, unde ipsum consequuntur aut consectetur culpa
            magni omnis vero odio suscipit vitae dolor quod dignissimos
            perferendis eos? Consequuntur!
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Sidebar;