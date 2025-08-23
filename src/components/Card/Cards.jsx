import Card from './Card'
import styles from "./Cards.module.css"

import iconImg from '../../assets/react.svg'

export default function Cards(props){
    return (
      <article {...props}>
        <h2>Cards</h2>

        <section className={styles["component-section"]}>
          <Card
            icon={iconImg}
            backgroundColor="#08CB00"
            title="Course Analytics Dashboard"
            text="Track student progress, engagement metrics, and learning outcomes with real-time analytics and comprehensive reporting tools."
          />

          <Card
            icon={iconImg}
            title="Interactive Learning Platform"
            text="Engage students with multimedia content, quizzes, and collaborative tools designed to enhance the online learning experience."
          />
          
          <Card
            backgroundColor="#E74C3C"
            title="AI-Powered Study Assistant"
            text="Get personalized learning recommendations and instant answers with our advanced artificial intelligence tutoring system."
          />

          <Card
            backgroundColor="#9B59B6"
            title="E-commerce Integration"
            text="Seamlessly sell courses, digital products, and educational materials with built-in payment processing and inventory management."
          />

          <Card
            backgroundColor="#F39C12"
            title="Smart Content Creation"
            text="Create engaging educational content using AI-powered tools that adapt to different learning styles and preferences."
          />
          
          <Card
            backgroundColor="#1ABC9C"
            title="Marketplace Analytics"
            text="Optimize your online store performance with detailed sales reports, customer insights, and market trend analysis."
          />
        </section>
      </article>
    );
}