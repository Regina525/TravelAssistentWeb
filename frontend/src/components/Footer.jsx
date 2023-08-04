import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="grid grid-cols-2 bg-red px-20 py-5 text-lg text-white">
      <div className="flex flex-col">
        <Link href="/home">
        <svg fill="#FFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
         width="200"
         height="60" viewBox="0 0 612 612" xmlSpace="preserve">
          <g>
            <path d="M612,195.722c0,105.87-510.374,222.727-549.02,222.727c-21.667,0-46.25-4.994-46.25-24.969
              c0-6.674,7.703-16.32,21.22-27.949l-0.015,0.008L2.109,301.883c-4.851-8.618-1.005-19.536,8.175-23.212l6.157-2.465
              c11.159-4.468,23.718-3.802,34.341,1.821l65.039,34.432c25.323-15.02,54.049-30.746,84.326-46.229L73.402,184.001
              c-10.027-6.506-9.92-21.22,0.201-27.578l10.368-6.514c17.256-10.841,38.234-14.043,57.938-8.846l210.85,55.616
              c65.742-26.094,125.181-43.904,160.363-43.904c9.396,0,18.806,0.249,27.887,0.898l-63.675,28.745l-1.524,21.418l98.29-45.183
              C597.661,164.272,612,174.759,612,195.722z M355.492,378.476l78.648,89.344c4.793,5.445,12.599,7.084,19.176,4.027l10.533-4.896
              c19.208-8.928,30.521-29.172,28.061-50.209l-9.846-84.186c-0.61-5.209-5.896-8.506-10.843-6.764l-112.308,39.562
              C353.447,367.281,351.661,374.125,355.492,378.476z"/>
          </g>
      </svg>
        </Link>
        <div className="w-[80%]">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>

     
    </div>
  )
}

export default Footer