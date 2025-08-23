import TestimonialWithImage from "./TestimonialWithImage";
import TestimonialWithoutImage from "./TestimonialWithoutImage";
import styles from "./Testimonials.module.css";
import { useScreenSize } from "../../hooks/useScreenSize";

import avatarHorizontal from "../../assets/Avatar-Horizontal.png";
import avatarVertical from "../../assets/Avatar-Vertical.png";

export default function TestimonialWithImages({ children, ...rest }) {
  const { isTablet, isDesktop } = useScreenSize();

  // Select avatar based on screen size:
  // avatarHorizontal for max-width 768px (mobile)
  // avatarVertical for min-width 992px (desktop)
  // For tablet (769px-991px), default to horizontal
  const selectedAvatar =
    isTablet || isDesktop ? avatarVertical : avatarHorizontal;

  // High-quality professional headshots with proper aspect ratios
  const professionalMaleAvatars = [
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  ];

  const professionalFemaleAvatars = [
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  ];

  const getRandomMaleAvatar = () =>
    professionalMaleAvatars[
      Math.floor(Math.random() * professionalMaleAvatars.length)
    ];

  const getRandomFemaleAvatar = () =>
    professionalFemaleAvatars[
      Math.floor(Math.random() * professionalFemaleAvatars.length)
    ];

  return (
    <article {...rest}>
      <h2>{children}</h2>

      <section className={styles["component-section"]}>
        <TestimonialWithImage
          name="Emily Johnson"
          role="Student, Online MBA, Harvard Business School"
          text="The LMS portal made learning so much easier. I can track assignments and join classes seamlessly. Love it!"
          avatar={selectedAvatar}
        />
      </section>

      <section className={styles["component-section"]}>
        <TestimonialWithImage
          name="Michael Williams"
          role="Instructor, Data Science, MIT"
          text="This platform streamlines my teaching process. I upload resources, grade assignments, and communicate with students effortlessly. Highly recommend!"
          avatar={getRandomMaleAvatar()}
        />
      </section>

      <section className={styles["component-section"]}>
        <TestimonialWithImage
          name="Jessica Miller"
          role="Parent, Lincoln Elementary School"
          text="As a parent, I appreciate being able to monitor my child's progress and communicate with teachers directly through the LMS portal. It keeps me involved and informed about their academic journey. The dashboard shows detailed reports, assignment grades, and upcoming deadlines. I can also schedule parent-teacher conferences and receive instant notifications about important updates. The user-friendly interface makes navigation simple, even for someone who isn't tech-savvy. My child's teachers respond quickly to messages, and the progress tracking helps me support their learning at home. This platform has truly enhanced our family's educational experience and strengthened the connection between home and school."
          avatar={getRandomFemaleAvatar()}
        />
      </section>
      
      <section className={styles["component-section"]}>
        <TestimonialWithoutImage
          name="Emily Johnson"
          role="Student, Online MBA, Stanford University"
          text="The LMS portal made learning so much easier. I can track assignments and join classes seamlessly. Love it!"
        />
      </section>

      <section className={styles["component-section"]}>
        <TestimonialWithoutImage
          name="David Chen"
          role="Software Developer, Google"
          text="This platform has revolutionized how I manage my continuous learning. The interface is intuitive and the progress tracking keeps me motivated."
        />
      </section>

      <section className={styles["component-section"]}>
        <TestimonialWithoutImage
          name="Sarah Rodriguez"
          role="Marketing Manager, Microsoft"
          text="I love how easy it is to access course materials and collaborate with classmates. The notification system ensures I never miss important updates."
        />
      </section>
    </article>
  );
}
