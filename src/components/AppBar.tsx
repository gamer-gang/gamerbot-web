import React from 'react';
import { NavLink } from 'react-router-dom';

import './AppBar.scss';

export const AppBar = (): JSX.Element => (
  <nav className="fixed inset-x-0 top-0 z-50 flex items-center h-16 px-2 overflow-x-auto text-gray-100 shadow-lg md:px-4 navbar justify-items-center bg-gradient-to-br from-teal-600 to-blue-400">
    <img
      src="https://github.com/gamer-gang/gamerbot/raw/master/assets/hexagon.png"
      alt="gamerbot"
      className="w-8 mr-2 rounded"
    />
    <span className="p-0 text-xl font-medium font-display">gamerbot</span>
    <NavLink exact to="/" className="ml-4 md:ml-8">
      Home
    </NavLink>
    <NavLink to="/commands" className="ml-4">
      Commands
    </NavLink>
    <NavLink to="/about" className="ml-4">
      About
    </NavLink>
    <div className="flex-1 w-2 h-full"></div>
  </nav>
);
