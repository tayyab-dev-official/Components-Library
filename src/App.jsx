// import { useState } from "react";
import Badges from './components/Badge/Badges'
import Banners from './components/Banner/Banners'
import Cards from "./components/Card/Cards";
import Testimonials from "./components/Testimonial/Testimonials";
import Tooltips from "./components/Tooltip/Tooltips";
import Toast from "./components/Toast/Toast";
import "./index.css";
import theme from "./theme";

export default function App() {
  // const [showToast, setShowToast] = useState(true);

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
      >
        Testimonials
      </Testimonials>

      <Tooltips
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      >
        Tooltips
      </Tooltips>

      <Toast
        className="app-component"
        style={{ boxShadow: theme.shadows.card }}
      >Toasts</Toast>

    </div>
  );
}
