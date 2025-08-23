import Banner from './Banner'
import styles from './Banners.module.css'

export default function Banners(props){
    return (
      <article {...props}>
        <h2>Banner</h2>
        <section className={styles["banners-section"]}>
          <h3>Multi Line</h3>
          <Banner
            status="success"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the Advanced Data Science course with a grade of 95%. Your certificate is now available for download."
          />

          <Banner
            status="warning"
            title="Assignment Due Soon"
            text="Reminder: Your final project submission for Web Development Fundamentals is due in 2 days. Please ensure all requirements are met before the deadline."
          />

          <Banner
            status="error"
            title="Login Session Expired"
            text="Your session has expired due to inactivity. Please log in again to continue accessing your courses and assignments in the LMS portal."
          />

          <Banner
            status="neutral"
            title="System Maintenance Scheduled"
            text="The LMS platform will undergo scheduled maintenance on Sunday from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable during this time."
          />
        </section>

        <section className={styles["banners-section"]}>
          <h3>Single Line</h3>
          <Banner status="success" title="Course enrollment successful!" />

          <Banner status="warning" title="Payment reminder pending" />

          <Banner
            status="error"
            title="Unable to access course materials"
          />

          <Banner status="neutral" title="New course recommendations available" />
        </section>

        <section className={styles["banners-section"]}>
          <h3>Banner with children</h3>
          <Banner
            status="error"
            title="Academic Probation Warning"
            text="Your current GPA has fallen below the required minimum. Immediate action is required to maintain enrollment."
          >
            <h4>Required Actions</h4>
            <p>
              Please schedule a meeting with your academic advisor within 5 business days to discuss your academic performance and create an improvement plan. Failure to respond may result in enrollment suspension.
            </p>
          </Banner>

          <Banner status="success" title="Dean's List Achievement!">
            <h4>Outstanding Academic Performance</h4>
            <p>
              Congratulations on making the Dean's List for Fall 2024! Your exceptional academic performance with a GPA of 3.8 or higher demonstrates your dedication to excellence. Keep up the great work!
            </p>
          </Banner>
        </section>
      </article>
    );
}