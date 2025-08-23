import { useState } from "react";
import Badges from './components/Badge/Badges'
import Banners from './components/Banner/Banners'
import Cards from "./components/Card/Cards";
import Testimonials from "./components/Testimonial/Testimonials";
import Tooltip from "./components/Tooltip/Tooltip";
import Toast from "./components/Toast/Toast";
import "./index.css";
import theme from "./theme";

export default function App() {
  const [showToast, setShowToast] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <Badges
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      />

      <Banners
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      />

      <Cards
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      />

      <Testimonials
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      >Testimonials</Testimonials>

      

      <article
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      >
        <h2>Tooltip</h2>
        <Tooltip text="This is extra info">
          <button style={{ padding: "8px 16px" }}>Hover me</button>
        </Tooltip>
      </article>

      <article
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      >
        <h2>Toast</h2>
        <button onClick={() => setShowToast(true)}>Show Toast</button>
        {showToast && (
          <Toast
            message="Action completed successfully!"
            type="success"
            onClose={() => setShowToast(false)}
          />
        )}
      </article>
    </div>
  );
}
