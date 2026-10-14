  function Templates(){
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
  }
  export default Templates;