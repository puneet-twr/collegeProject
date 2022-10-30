import React, { useState } from 'react'
import './SeatSelection.css';

function SeatSelection(props) {
//   const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.cinema-seats row- .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// let ticketPrice = +movieSelect.value;

//Update total and count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll('.cinema-seats row- .seat.selected');
//   const selectedSeatsCount = selectedSeats.length;
//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;
// }
const handleSeatClick=(e)=>{
  if (e.target.classList.contains('seat') &&
     !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    console.log(e.target);
  }
}
  return (
    <div class="movie-container" >
    {/* <label>Pick a movie: </label>
    <select id="movie" >
      <option value="250">{props.movieTitle} (Rs. 250)</option> */}
      {/* <option value="200">Kabir Singh (Rs. 200)</option>
      <option value="150">Duniyadari (Rs. 150)</option>
      <option value="100">Natsamrat (Rs. 100)</option> */}
    {/* </select> */}
    
    <div className="movieTitle">{props.movieTitle} (price)</div>
    {/* <ul class="showcase">
      <li>
        <div class="seat refSeat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat refSelected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat refOccupied"></div>
        <small>Occupied</small>
      </li>    
    </ul> */}
    
    <div class="container" onClick={handleSeatClick}>
      <div class="screen"></div>
      
      <div className="theatre">
      <div class="cinema-seats left">
    <div class="cinema-row row-1">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-2">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-3">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-4">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-5">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-6">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-7">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>
  </div>


  <div class="cinema-seats right">
    <div class="cinema-row row-1">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-2">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-3">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-4">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-5">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-6">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>

    <div class="cinema-row row-7">
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
      <div className="seat"></div>
    </div>
  </div>
      </div>
      <p class="text">
        You have selected <span id="count">0</span> seats for the total price of Rs. <span id="total">0</span>
      </p>
    </div>
  </div>
  )
}

export default SeatSelection