import "./career.css";

export const Career = () => {
  return (
    <main className="career">
      <h1>Career Overview</h1>
      <h2 className="resumeSummary">At a Glance</h2>

        <section className="jobTraits">
            <section className="resumeSkills">
              <h3>What I have used:</h3>
                <ul>
                  <li><strong>Languages: </strong>HTML5, CSS3, TailWindCSS, JavaScript, ReactJS, MySQL, PHP, Git.</li>
                  <li><strong>Applications: </strong>VS Code, XAAMP, Adobe Photoshop, Microsoft Word, Microsoft Excel, Adobe InDesign, Quark Xpress.</li>
                </ul>
            </section>
        
            <section className="resumeSkills">
              <h3>What I have have provided:</h3>
                <ul>
                  <li>Noteworthy customer service to quickly provide accurate and relevant information to solve problems.</li>
                  <li>Have been reliable go-to person to fix problems and keep production on schdule.</li>
                </ul>
            </section>        
        
            <section className="resumeSkills">
              <h3>What I can offer:</h3>
                <ul>
                  <li>Award-winning experience in design and photography to create visually-appealing websites.</li>
                  <li>Ability to work with people with calm and empathetic demeanor to bring about best results.</li>
                </ul>
            </section>        
        
        </section>
  
  <h2 className="resumeSummary">Additional Details</h2>

  <section className="jobSummaries">
    <section className="job">
      <h3 className="resumeCompanyName">Revenue Examiner</h3>
      <section className="jobInfo">
        <p className="resumeJobTitle"><strong>Minnesota Department of Revenue | St. Paul, Minn.</strong></p>
        <p className="resumeJobDuration"><strong>2018-present</strong></p>
      </section>
        <section className="resumeJobRoles">
        <p className="resumeJobDesc">Quickly analyzed taxpayer questions or issues on the phone and provided next steps to anticipate or take, if necessary. Consistently exceeded expectations for call quality in office and working from home. Contributed articles for quarterly employee newsletter.</p>
        <ul className="resumeJobHighlights">
          <li>Assist taxpayers in navigating division website to find information as fast as possible.</li>
          <li>Have received recognition for superior quality of calls by showing excellent communication skills while assisting taxpayers.</li>
          <li>Maintain calm, professional tone on the phone to make customers feel comfortable</li>
        </ul>
        </section>
    </section>

    <section className="job">
      <h3 className="resumeCompanyName">Geek Squad Tactical Support Agent</h3>
      <section className="jobInfo">
        <p className="resumeJobTitle"><strong>Best Buy Corporate Campus | Richfield, Minn.</strong></p>
        <p className="resumeJobDuration"><strong>2016-2017</strong></p>
      </section>
      <section className="resumeJobRoles">
        <p className="resumeJobDesc">Quickly analyzed taxpayer questions or issues on the phone and provided next steps to anticipate or take, if necessary. Consistently exceeded expectations for call quality in office and working from home. Contributed articles for quarterly employee newsletter.</p>
        <ul className="resumeJobHighlights">
          <li>Gathered information and performed research using multiple applications to evaluate client’s issue and determine best possible solution for the client.</li>
          <li>Recognized for superior quality of calls and client satisfaction. As a result, selected to move to day shift to be available for a higher volume of calls.</li>
          <li>Maintain calm, professional tone on the phone to make customers feel comfortable</li>
        </ul>
        </section>
    </section>

    <section className="job">
      <h3 className="resumeCompanyName">Prepress Technician</h3>
      <section className="jobInfo">
        <p className="resumeJobTitle"><strong>La Crosse Tribune | La Crosse, Wis.</strong></p>
        <p className="resumeJobDuration"><strong>2007-2016</strong></p>
      </section>
      <section className="resumeJobRoles">
        <p className="resumeJobDesc">Quickly analyzed taxpayer questions or issues on the phone and provided next steps to anticipate or take, if necessary. Consistently exceeded expectations for call quality in office and working from home. Contributed articles for quarterly employee newsletter.</p>
        <ul className="resumeJobHighlights">
          <li>Relied on strong attention to detail by reviewing ad lists for daily and weekly publications focusing on potential scheduling or production errors. Notified responsible parties about actions needed in order to ensure on-time completion.</li>
          <li>Converted Quark Xpress document into Microsoft Excel spreadsheet containing formulas which cut production time from two hours to 20 minutes each month.</li>
        </ul>
        </section>
    </section>

    <section className="job">
      <h3 className="resumeCompanyName">Printer Operator</h3>
      <section className="jobInfo">
        <p className="resumeJobTitle"><strong>White House Custom Colour | Eagan, Minn.</strong></p>
        <p className="resumeJobDuration"><strong>2006-2007</strong></p>
      </section>
      <section className="resumeJobRoles">
        <p className="resumeJobDesc">Quickly analyzed taxpayer questions or issues on the phone and provided next steps to anticipate or take, if necessary. Consistently exceeded expectations for call quality in office and working from home. Contributed articles for quarterly employee newsletter.</p>
        <ul className="resumeJobHighlights">
          <li>Increased customer satisfaction by identifying print errors prior to orders being shipped.</li>
          <li>Successfully organized and delegated orders for co-workers to maximize production time.</li>
        </ul>
        </section>
    </section>

    <section className="job">
      <h3 className="resumeCompanyName">Photographer/Page Designer</h3>
      <section className="jobInfo">
        <p className="resumeJobTitle"><strong>Red Wing Republican-Eagle | Red Wing, Minn.</strong></p>
        <p className="resumeJobDuration"><strong>1999-2005</strong></p>
      </section>
      {/* <p className="resumeJobLocation"><strong>Red Wing, Minn.</strong></p> */}
      <p className="resumeJobDesc">Successfully managed daily schedule of page design and photo assignments on deadline. Used Photoshop to edit, size and save photos for use in several publications.</p>
    </section>

    <section className="job">
      <h3 className="resumeCompanyName">Sports Editor/Sports Writer</h3>
      <section className="jobInfo">
        <p className="resumeJobTitle"><strong>Williston Daily Herald | Williston, N.D.</strong></p>
        <p className="resumeJobDuration"><strong>1996-1999</strong></p>
      </section>
      {/* <p className="resumeJobLocation"><strong>Williston, N.D.</strong></p> */}
      <p className="resumeJobDesc">Responsible for sports coverage for daily newspaper. Wrote and designed sports section pages as well as special sections throughout the year.</p>
    </section>





        </section>
    </main>

  )
}
