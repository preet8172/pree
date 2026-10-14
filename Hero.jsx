import React, { useState, useRef } from "react";
import "./Hero.css";

// Import assets from the local component folder
import dashboard from "./hero-img.png";
import bootstrap from "./bootstrap.svg";
import html from "./html.svg";
import grunt from "./grunt.svg";
import javascript from "./javascript.svg";
import react from "./reactjs.svg";
import node from "./nextjs.svg";
import logo from "./logo.svg";
import laravel from "./laravel.svg";

// Separated Sub-Component for Testimonial Cards
const TestimonialCard = ({ text, username, location, memberSince }) => {
  return (
    <div className="flex flex-col justify-between p-8 rounded-2xl border border-white/20 bg-[#3f4277]/30 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-indigo-500/10 w-[350px] shrink-0 mr-5">
      <div>
        {/* Envato Market Logo */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-[#81b441] rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
              <path d="M21 3s-3.75 0-7.5 3.75C10.75 9.5 9 13 9 13s-2.25-2.25-4.5-2.25c-3 0-3.75 3.75-3.75 3.75s3.75 1.5 6 0c3-2 3.75-5.25 3.75-5.25s1.5 2.25 3.75 4.5c3.25 3.25 7.5 2.25 7.5 2.25s0-4.5-3.75-8.25C15.75 5.25 21 3 21 3z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            envato<span className="text-[#81b441] font-light">market</span>
          </span>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-200 text-base leading-relaxed mb-8 font-light">
          "{text}"
        </p>
      </div>

      {/* User Info */}
      <div>
        <h4 className="text-[#a78bfa] font-semibold text-lg mb-1 tracking-wide">
          {username}
        </h4>
        <p className="text-gray-400 text-sm font-light">
          {location}, Member since {memberSince}
        </p>
      </div>
    </div>
  );
};

function Hero() {
  const marqueeRef = useRef(null);

  const templates = [
    {
      id: 1,
      title: "Mytask - Coming Soon Admin Template",
      tech: "Nextjs",
      dashboard: "2 Option",
      updated: "Life time Free",
      isComingSoon: true,
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-html.png",
    },
    {
      id: 2,
      title: "Mytask - React Redux Project Management Admin Template",
      tech: "React",
      dashboard: "2 Option",
      updated: "Life time Free",
      isComingSoon: false,
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-react.png",
    },
    {
      id: 3,
      title: "Mytask - Laravel Project Management Admin Template",
      tech: "Laravel",
      dashboard: "2 Option",
      updated: "Life time Free",
      isComingSoon: false,
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-laravel.png",
    },
    {
      id: 4,
      title: "Mytask - Html Hr, Project Management Admin Template",
      tech: "HTML",
      dashboard: "2 Option",
      updated: "Life time Free",
      isComingSoon: false,
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/preview-html.png",
    },
  ];

  const featureItems = [
    {
      id: 1,
      title: "Project Management",
      description:
        "Project management is more than a to-do list. It means tracking tasks from beginning to end, delegating subtasks to teammates, and setting deadlines to make sure projects get done on time.",
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon-svg">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Hr Management",
      description:
        "Hr management is the practice of managing people to achieve better performance. If you hire people into a business, you are looking for people who fit the company culture as they will be happier.",
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon-svg">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Task Board",
      description:
        "The board allows to improve workflow visibility and ensures efficient diffusion of information relevant to the whole team. It helps team members to see their progress at a glance.",
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon-svg">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
  ];

  const menuItems = [
    { id: "01", label: "Projects Management", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-7.png" },
    { id: "02", label: "Task Management", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-8.png" },
    { id: "03", label: "Project Timesheet", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-9.png" },
    { id: "04", label: "Tickets Detail", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-10.png" },
    { id: "05", label: "Attendance Detail", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-3.png" },
    { id: "06", label: "Employees View", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-4.png" },
    { id: "07", label: "Leave Request", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-5.png" },
    { id: "08", label: "Clients List", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-6.png" },
    { id: "09", label: "Calendar Events", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-11.png" },
    { id: "10", label: "Chat List", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-1.png" },
    { id: "11", label: "Contact", imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/feature/feature-2.png" },
  ];

  const managementData = [
    {
      id: "login",
      tabLabel: "Login",
      title: "Secure Authentication Management",
      description1: "A clean, modern interface designed to handle role-based login workflows smoothly. Each authentication pathway ensures precise gateway token distribution to separate team hierarchies accurately.",
      description2: "We can define custom login workflows, configure multi-tenant systems, and provide instant security parameters out of the box to streamline user onboarding effectively.",
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/role/login.png"
    },
    {
      id: "user-mgmt",
      tabLabel: "User Management",
      title: "Comprehensive User Control Panel",
      description1: "Admin systems can monitor, manage, and edit user profile states seamlessly. Instantly see system activity tracking metrics, control access locks, and configure profiles at a granular level.",
      description2: "Admins maintain complete governance over workspace activity logs, providing a bird's-eye view of team assignments and direct management control workflows.",
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/role/user.png"
    },
    {
      id: "role-mgmt",
      tabLabel: "Role Management",
      title: "Role Management",
      description1: "In many web projects, we have different user roles interacting with the system. Each role has its own permission. Every feature of the system can be enabled or disabled for these roles.",
      description2: "We can define users permissions in our codes and check if they are authorized to do the requested action or not. A better way, mostly in more flexible systems, is to create a role and authorization management system.",
      imgSrc: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/role/role.png"
    }
  ];

  const features = [
    { id: 1, label: "Laravel 8", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/icon-laravel.svg" },
    { id: 2, label: "Bootstrap 5x", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/bootstrap.png" },
    { id: 3, label: "Boilerplate", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/boilerplat.svg" },
    { id: 4, label: "React", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React.png" },
    { id: 5, label: "React Bootstrap", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React_BS.png" },
    { id: 6, label: "React Router", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React_Router.png" },
    { id: 7, label: "React i18n", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/React_i18n.png" },
    { id: 8, label: "Authorization", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/authorization.svg" },
    { id: 9, label: "User Management", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/user-managment.svg" },
    { id: 10, label: "Role Management", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/role-managment.svg" },
    { id: 11, label: "Skeleton", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/skeleton.svg" },
    { id: 12, label: "W3C Validated", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/w3c.png" },
    { id: 13, label: "Sass", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/sass.png" },
    { id: 14, label: "Fully responsive", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/responsive.png" },
    { id: 15, label: "IcoFont", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAxBRDNuSgMpmu6rePpuHRNxTd2z2ZRbdbZpVpzPLlWx89K_f_" },
    { id: 16, label: "Dark / Light Version", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/color.png" },
    { id: 17, label: "Cross Browser", img: "https://pixelwibes.com/template/my-task/react/marketing/assets/img/icons/cross-browser.svg" },
    { id: 18, label: "Google Font", img: "https://www.shutterstock.com/image-vector/font-size-modern-flat-icon-242275831" },
    { id: 19, label: "Easy to use", iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", iconColor: "#ffc107" },
    { id: 20, label: "High Perform", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-12S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", iconColor: "#28a745" },
    { id: 21, label: "Fully Customizable", iconPath: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19 15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z", iconColor: "#fd7e14" },
    { id: 22, label: "Well Documented", iconPath: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z", iconColor: "#ffc107" }
  ];

  const testimonials = [
    {
      id: 1,
      img: "mywebsite/src/My website/envato (1).png",
      text: "Superb product and very responsive customer care support by the PixelWibes team.",
      name: "jimmyturner5092",
      location: "Italy",
      memberSince: "November 2022",
    },
    {
      id: 2,
      img: "mywebsite/src/My website/envato.png",
      text: "Most impressive for me when I show dynamic HTML structure. clean, examples, everything. This is such good quality.",
      name: "Skylinktechnolab",
      location: "Italy",
      memberSince: "November 2015",
    },
  ];

  const dashboardCards = [
    {
      id: 1,
      title: "HR DASHBOARD",
      isMobile: false,
      content: { apps: "1546", interviews: "246", hired: "101" }
    },
    {
      id: 2,
      title: "HR DASHBOARD",
      isMobile: true,
      content: { apps: "1546", interviews: "246", hired: "101" }
    },
    {
      id: 3,
      title: "PROJECT DASHBOARD",
      isMobile: false,
      content: { total: "122", completed: "376", progress: "74" }
    },
    {
      id: 4,
      title: "PROJECT DASHBOARD",
      isMobile: true,
      content: { total: "122", completed: "376", progress: "74" }
    }
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]);
  const [activeManagementTab, setActiveManagementTab] = useState(managementData[0]);

  // Manual scroll modifiers for the navigation trigger arrows
  const scrollTrack = (direction) => {
    if (marqueeRef.current) {
      const scrollAmount = direction === "next" ? 340 : -340;
      marqueeRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero-wrapper">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <img src={logo} alt="My-Task Logo" />
            </div>
            <span>My-Task</span>
          </div>

          <ul className="nav-menu">
            <li>Home</li>
            <li>Features</li>
            <li>Authorization</li>
            <li>Apps</li>
            <li>Why</li>
            <li>
              <button className="contact-btn">Contact Us</button>
            </li>
          </ul>
        </nav>

        {/* Hero */}
        <div className="hero-section">
          <div className="hero-left">
            <h1>
              My-Task Hr & Project
              <br />
              Management System
            </h1>

            <p>
              This is a solution for everyone. Although it is at the heart of Scrum
              and is typically used by software development teams, it can be
              successfully applied to other businesses, as well as used for
              improving personal productivity.
            </p>

            <h3>Technology :</h3>

            <div className="tech-icons">
              <div><img src={bootstrap} alt="Bootstrap" /></div>
              <div><img src={html} alt="HTML" /></div>
              <div><img src={grunt} alt="CSS/Grunt" /></div>
              <div><img src={javascript} alt="JavaScript" /></div>
              <div><img src={react} alt="React" /></div>
              <div><img src={node} alt="Node/Next" /></div>
              <div><img src={laravel} alt="Laravel" /></div>
            </div>

            <button className="download-btn">↓</button>
          </div>

          <div className="hero-right">
            <img src={dashboard} alt="dashboard" />
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <section className="templates-section">
        <div className="templates-header">
          <h2>Our Range of Templates</h2>
          <p>
            Lifetime updates are offered for all My-Task templates. They continue to be
            improved over time to meet the latest trends.
          </p>
        </div>

        <div className="templates-grid">
          {templates.map((item) => (
            <div key={item.id} className="template-card">
              <div className="card-image-wrapper">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="template-banner-img"
                />

                {item.isComingSoon && (
                  <div className="coming-soon-overlay">
                    <h2>COMING SOON</h2>
                  </div>
                )}
              </div>

              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>

                <div className="card-specs">
                  <div className="spec-row">
                    <span className="spec-label">Technology</span>
                    <span className="spec-label">Dashboard</span>
                  </div>
                  <div className="spec-values">
                    <span className="spec-val-text">{item.tech}</span>
                    <span className="spec-val-text">{item.dashboard}</span>
                  </div>

                  <div className="spec-row margin-top-sm">
                    <span className="spec-label">Updated</span>
                  </div>
                  <div className="spec-values">
                    <span className="spec-val-text">{item.updated}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <div className="action-row-top">
                    <button className="btn btn-demo">View Demo</button>
                    <button className="btn btn-primary">Buy Regular License</button>
                  </div>
                  <button className="btn btn-secondary">Buy Extended License</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Management Section */}
      <section className="management-section">
        <div className="management-header">
          <h2>Our Management System</h2>
          <p className="subtitle">Apps for anywhere</p>
        </div>

        <div className="management-grid">
          {featureItems.map((item) => (
            <div key={item.id} className="management-card">
              <div className="icon-container">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future of Work Section */}
      <section className="future-work-section">
        <div className="future-work-header">
          <h2>This is the Future of Work.</h2>
          <p className="future-work-subtitle">All Our work in one place</p>
        </div>

        <div className="future-work-content">
          <div className="future-work-sidebar">
            <ul className="future-menu-list">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`future-menu-item ${activeMenuItem.id === item.id ? "active" : ""}`}
                  onClick={() => setActiveMenuItem(item)}
                >
                  <span className="menu-number">{item.id} :</span>
                  <span className="menu-label">{item.label}</span>
                  {activeMenuItem.id === item.id && <span className="active-indicator-line"></span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="future-work-display">
            <div className="dot-grid-background-wrapper">
              <div className="app-canvas-container">
                <img
                  src={activeMenuItem.imgSrc}
                  alt={`${activeMenuItem.label} Preview Graphic`}
                  className="app-preview-graphic"
                  onError={(e) => {
                    e.target.src = dashboard;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="auth-section">
        <div className="auth-header">
          <h2>Laravel Authorization & Roles Management</h2>
          <p className="auth-subtitle">Best Feature Available in My-Task App</p>
        </div>

        <div className="auth-tabs-container">
          {managementData.map((tab) => (
            <button
              key={tab.id}
              className={`auth-tab-btn ${activeManagementTab.id === tab.id ? "active" : ""}`}
              onClick={() => setActiveManagementTab(tab)}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        <div className="auth-content-body">
          <div className="auth-text-col">
            <h3>{activeManagementTab.title}</h3>
            <p className="auth-desc-p">{activeManagementTab.description1}</p>
            <p className="auth-desc-p">{activeManagementTab.description2}</p>
          </div>

          <div className="auth-graphic-col">
            <div className="auth-card-frame">
              <img
                src={activeManagementTab.imgSrc}
                alt={`${activeManagementTab.tabLabel} Dashboard View`}
                className="auth-preview-img"
                onError={(e) => {
                  e.target.src = dashboard;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Section */}
      <section className="choose-section">
        <div className="choose-header">
          <h2>Why Choose My-Task</h2>
          <p className="choose-subtitle">Best Feature Available in My-Task App</p>
        </div>

        <div className="choose-grid">
          {features.map((item) => (
            <div key={item.id} className="choose-card">
              <div className="badge-icon-box">
                {item.iconPath ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="badge-svg-element"
                    style={{ fill: item.iconColor }}
                  >
                    <path d={item.iconPath} />
                  </svg>
                ) : (
                  <img src={item.img} alt={item.label} className="badge-img-element" />
                )}
              </div>
              <span className="badge-label-text">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section class="testimonial-section">
        <div class="testimonial-container">
          <h2 class="testimonial-title">Testimonials from Our Valued Customers</h2>

          <div >
            <div class="marquee-track-scroller">

              <div class="testimonial-card" >
                <img src="envato.png" class="testimonial-logo"  />
                <p class="testimonial-text">Superb product and very responsive customer care support by the PixelWibes team.</p>
                <span class="testimonial-name">jimmyturner5092</span>
                <span class="testimonial-location">Italy, Member since November 2022</span>
              </div>

              <div class="testimonial-card" >
                <img src="envato.png" class="testimonial-logo"  />
                <p class="testimonial-text">Most impressive for me when I show dynamic HTML structure. clean, examples, everything. This is such good quality.</p>
                <span class="testimonial-name">Skylinktechnolab</span>
                <span class="testimonial-location">Italy, Member since November 2015</span>
              </div>

              <div class="testimonial-card">
                <img src="envato.png" class="testimonial-logo"  />
                <p class="testimonial-text">Superb product and very responsive customer care support by the PixelWibes team.</p>
                <span class="testimonial-name">jimmyturner5092</span>
                <span class="testimonial-location">Italy, Member since November 2022</span>
              </div>

              <div class="testimonial-card">
                <img src="envato.png" class="testimonial-logo"  />
                <p class="testimonial-text">Most impressive for me when I show dynamic HTML structure. clean, examples, everything. This is such good quality.</p>
                <span class="testimonial-name">Skylinktechnolab</span>
                <span class="testimonial-location">Italy, Member since November 2015</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Ready Apps Marquee Section */}
      <section className="ready-apps-section">
        <div className="ready-apps-wrapper">
          {/* LEFT COLUMN: SEAMLESS HORIZONTAL MARQUEE INFINITE TRACK */}
          <div className="ready-apps-visual-column">
            <div className="marquee-viewport-mask" ref={marqueeRef}>
              <div className="marquee-horizontal-track">
                {[...dashboardCards, ...dashboardCards, ...dashboardCards].map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    className={`device-outer-frame ${card.isMobile ? "frame-view-mobile" : "frame-view-desktop"}`}
                  >
                    <div className="device-sidebar-tab">
                      {card.title}
                    </div>

                    <div className="device-screen-window">
                      <div className="mock-internal-navbar">
                        <div className="mock-search-bar"></div>
                        <div className="mock-profile-dot"></div>
                      </div>

                      {card.isMobile ? (
                        <div className="mock-content-layout vertical-stack">
                          <div className="mock-purple-card">
                            <div className="card-ico-dot"></div>
                            <h4>{card.content.apps}</h4>
                            <span>Applications</span>
                          </div>
                          <div className="mock-data-strip color-green">
                            <div className="strip-dot"></div>
                            <span>{card.content.interviews} Interviews</span>
                          </div>
                          <div className="mock-data-strip color-blue">
                            <div className="strip-dot"></div>
                            <span>{card.content.hired} Hired</span>
                          </div>
                        </div>
                      ) : (
                        <div className="mock-content-layout grid-split">
                          <div className="mock-stat-grid">
                            <div className="stat-box"><span>Tasks</span><strong>{card.content.total}</strong></div>
                            <div className="stat-box"><span>Done</span><strong>{card.content.completed}</strong></div>
                            <div className="stat-box"><span>In Progress</span><strong>{card.content.progress}</strong></div>
                          </div>
                          <div className="mock-gantt-chart-bars">
                            <div className="gantt-line w-70 orange"></div>
                            <div className="gantt-line w-50 blue"></div>
                            <div className="gantt-line w-80 green"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT SUMMARY PANELS */}
          <div className="ready-apps-content-column">
            <h2 className="ready-apps-title">Ready to Use Apps For Your Dashboard</h2>

            <p className="ready-apps-description">
              Including multiple ready to use apps like Project Management, HR Management,
              Task Management, Chat App, Time sheet, Employees all Detail and more.
            </p>

            <ul className="ready-apps-bullet-points">
              <li>
                <span className="purple-indicator-bullet"></span>
                Dark/Light Option
              </li>
              <li>
                <span className="purple-indicator-bullet"></span>
                Fully Responsive
              </li>
              <li>
                <span className="purple-indicator-bullet"></span>
                Easy to Customized
              </li>
            </ul>

            <div className="ready-apps-control-nav">
              <button className="ctrl-arrow-btn" onClick={() => scrollTrack("prev")} aria-label="Slide Left">
                <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
              </button>
              <button className="ctrl-arrow-btn" onClick={() => scrollTrack("next")} aria-label="Slide Right">
                <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="main-footer-wrapper">
        <div className="footer-inner-container">

          {/* ================= Brand Column ================= */}
          <div className="footer-brand-column">
            <div className="footer-logo-row">
              <svg viewBox="0 0 24 24" className="footer-logo-svg">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span className="footer-brand-title">My-Task</span>
            </div>

            <p className="footer-brand-description">
              Pixelwibes is the world's leading community for creatives to share, grow, and get hired.
            </p>

            <div className="footer-rating-block">
              <span className="firm-name">Pixelwibes.</span>
              <div className="rating-stars-wrapper">
                <span className="rating-numeric-val">4.5</span>
                <div className="stars-row">
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="star filled">&#9733;</span>
                  ))}
                  <span className="star empty">&#9734;</span>
                </div>
                <span className="reviews-count-label">Reviews</span>
              </div>
            </div>

            <div className="footer-social-links-bar">
              <a href="#" className="social-icon-btn" aria-label="Website">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 12 10 10-4.48 10-12S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= Links Columns ================= */}
          <div className="footer-links-column">
            <h4 className="footer-column-heading">COMPANY</h4>
            <ul className="footer-links-list">
              <li><a href="#hire">Hire Developer</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-column-heading">SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#web">WEB Technologies</a></li>
              <li><a href="#cross">Cross Platform Apps</a></li>
              <li><a href="#frontend">Frontend Technologies</a></li>
              <li><a href="#uiux">UI/UX & Design</a></li>
              <li><a href="#blockchain">BlockChain</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-column-heading">Templates</h4>
            <ul className="footer-links-list">
              <li><a href="#qboat">Qboat</a></li>
              <li><a href="#cryptoon">Cryptoon</a></li>
              <li><a href="#ebazar">Ebazar</a></li>
              <li><a href="#ihealth">Ihealth</a></li>
              <li><a href="#elearn">e-Learn</a></li>
              <li><a href="#timetracker">Timetracker</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Hero;