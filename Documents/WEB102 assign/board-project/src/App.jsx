import React from "react";
import "./App.css";

const workouts = [
  { muscle: "Chest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmDGEVD_wAJLP4QeNLYjCGY1FF_UluGrdDg&s", link:"https://www.youtube.com/watch?v=zD266B2jk0s" },
  { muscle: "Back", image: "https://cdn.shopify.com/s/files/1/0471/3332/7519/files/your-blueprint-for-building-a-bigger-back-v2-MUSCLETECH-1.jpg?v=1729900995", link: "https://builtwithscience.com/workouts/the-smartest-back-workout/"},
  { muscle: "Legs", image: "https://www.shutterstock.com/shutterstock/photos/2448678079/display_1500/stock-photo-leg-muscles-quadriceps-hamstrings-calves-and-shin-muscles-they-enable-movement-support-joints-2448678079.jpg", link:"https://www.menshealth.com/uk/building-muscle/a63155684/jeff-nippard-leg-workout/" },
  { muscle: "Shoulders", image: "https://www.bodybuilding.com/images/2017/december/built-by-science-article-graphics-shoulders-1-700xh.jpg", link:"https://builtwithscience.com/workouts/shoulder-workout-science/"},
  { muscle: "Biceps", image: "https://www.shutterstock.com/image-illustration/biceps-anatomy-muscles-isolated-on-600nw-421145389.jpg", link:"https://www.youtube.com/watch?v=hmeTQHsBwv8" },
  { muscle: "Triceps", image: "https://cdn.shopify.com/s/files/1/2623/4904/files/Tricep_muscles_600x600.png?v=1668414864" },
  { muscle: "Core", image: "https://media.istockphoto.com/id/2079783814/vector/core-muscle-anatomy-with-obliques-abdominals-and-gluteus-outline-diagram.jpg?s=612x612&w=0&k=20&c=Kmt9-3pWotitjYnOhX7guCxZ9Z8ppZGPLBD66m3y8xY=" },
  { muscle: "Calves", image: "https://www.thebiomechanicsmethod.com/wp-content/uploads/2016/10/Anatomy-of-the-calf-muscles.png" },
  { muscle: "Forearms", image: "https://c8.alamy.com/comp/G1HD34/forearm-muscles-anatomy-muscles-isolated-on-white-3d-illustration-G1HD34.jpg" },
  { muscle: "Glutes", image: "https://media.istockphoto.com/id/498528869/photo/glutes-gluteus-maximus-female-anatomy-muscles.jpg?s=612x612&w=0&k=20&c=CcWXbIARU2RzQ-v5AHSDDGgRNECpgqIiW1EUu6t8yT4=" }
];

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Workout Board</h1>
      <div className="workout-grid">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-card">
            <a href={workout.link} target="_blank" rel="noreferrer">
            <img src={workout.image} alt={workout.muscle} className="workout-image" />
            </a>
            <h2>{workout.muscle}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

