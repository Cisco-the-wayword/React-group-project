import React from "react";
import '../Styles/Dragons.css'
function Dragons() {
  return (
    <main className="dragon-container">
      <div className="dragon-card">
        <img alt="Dragon" className="dragon-img" />
				<div className="section-left">
           <h2 className="dragon-header">
            Dragon 1
					</h2>
					<p className="dragon-detail"><span className="reserved-span"></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus? Vero, voluptatibus mollitia. Animi impedit illum adipisci voluptas ad, aliquid doloribus modi consectetur. Quas porro quam voluptatum. Eius, dolores aliquam.</p>
				<button className="reserve-btn">Reserve Dragon</button>
				</div>
			</div>
		</main>
  );
}

export default Dragons;