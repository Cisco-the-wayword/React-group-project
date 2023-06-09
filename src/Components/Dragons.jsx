import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { reserve } from "../Redux/dragonSlice";
import '../Styles/Dragons.css';

function Dragons() {
	const dispatch = useDispatch();
	const { dragons, isLoading, error } = useSelector((store) => store.dragons);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  if (error) {
    return (
      <div>Error: Try again!</div>
    );
  }

  return (
    <main className="dragon-container">
      {dragons.map((dragon) => (
				<div key={dragon.id} className="dragon-card">
					<img alt="Dragon" src={dragon.image[1]} className="dragon-img" />
					<div className="section-left">
						<h2 className="dragon-header">
							{dragon.name}
						</h2>
						<p className="dragon-detail">
						{dragon.reserved ? <span className="reserved-span">Reserved</span>:''}{dragon.type}</p>
					<button className={dragon.reserved ?'cancle-reserve': 'reserve-btn'}
						onClick={()=>dispatch(reserve(dragon.id))}>
						{dragon.reserved
								? 'Cancel Reservation'
								: '	Reserve Dragon'
						}
					</button>
					</div>
				</div>
     ))}
		</main>
  );
}

export default Dragons;