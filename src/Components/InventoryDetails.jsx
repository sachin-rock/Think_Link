import React from "react";
import "./inventory.css";

const InventoryDetails = () => {
  return (
    <div className="main">
      <div className="main2">
        <div className="main3">
          <div>
            <h5>Staglin Family Vineyard INEO Red Wine</h5>
            <p>
              <b>Region:</b> United States · California · Blends
            </p>
          </div>
          <p>
            <b>Vintage:</b> 2010
          </p>
        </div>
        <div className="main4">
          <a href="">View wine</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="main5"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#DADADB"
            class="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </div>
      </div>
      <div className="main6">
        <div>
          <p className="rat">Rating</p>
          <div className="main8">
            <div>
              <h4>James Suckling's</h4>
              <p>JS 95</p>
            </div>
            <div>
              <h4>Robert Parker</h4>
              <p>RP 80</p>
            </div>
            <div>
              <h4>Antonio Galloni’s</h4>
              <p>---</p>
            </div>
            <div>
              <h4>Wine Spectator Tasting</h4>
              <p>WS 79</p>
            </div>
          </div>
        </div>
        <div>
          <p className = "sto">Stock</p>
          <div className="main7">
            <div>
              <h4>Possimus</h4>
              <p>43 units</p>
            </div>
            <div>
              <h4>Downtown Condo</h4>
              <p>95 units</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
