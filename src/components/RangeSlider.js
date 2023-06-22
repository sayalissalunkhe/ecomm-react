import React, { useState, useEffect } from 'react';
import './RangeSlider.css';

const RangeSlider = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('ProductData.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div id="topBar">
        <input type="text" id="search" name="search" class="form-control player-search" placeholder="Search for an item..." autocomplete="off" />
          <div class="sortBy">
            <h4>SORT BY:</h4>
            <select class="form-control">
              <option>Most Popular</option>
              <option>Price [Lowest to Highest]</option>
              <option>Price [Highest to Lowest]</option>
              <option>Name [A to Z]</option>
            </select>
          </div>
      </div>
    </>
  )
}

export default RangeSlider
