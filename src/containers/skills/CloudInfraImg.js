import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    
    // Helper function to calculate shortened line endpoints
    const getShortenedLine = (x1, y1, x2, y2, shortenStart = 50, shortenEnd = 30) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate unit vector
      const ux = dx / length;
      const uy = dy / length;
      
      // Shorten from both ends
      const newX1 = x1 + ux * shortenStart;
      const newY1 = y1 + uy * shortenStart;
      const newX2 = x2 - ux * shortenEnd;
      const newY2 = y2 - uy * shortenEnd;
      
      return { x1: newX1, y1: newY1, x2: newX2, y2: newY2 };
    };
    
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="600"
        viewBox="0 0 800 600"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={theme.imageHighlight} stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ccc" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connecting lines (drawn first so they appear behind circles) */}
        <line {...getShortenedLine(400, 300, 200, 150)} stroke="#999" strokeWidth="2" />
        <line {...getShortenedLine(400, 300, 600, 150)} stroke="#999" strokeWidth="2"/>
        <line {...getShortenedLine(400, 300, 650, 450)} stroke="#999" strokeWidth="2"/>
        <line {...getShortenedLine(400, 300, 150, 450)} stroke="#999" strokeWidth="2"/>
        <line {...getShortenedLine(400, 300, 400, 100)} stroke="#999" strokeWidth="2"/>
        <line {...getShortenedLine(400, 300, 400, 500)} stroke="#999" strokeWidth="2"/>
        <line {...getShortenedLine(400, 300, 250, 300)} stroke="#999" strokeWidth="2"/>
        <line {...getShortenedLine(400, 300, 550, 300)} stroke="#999" strokeWidth="2"/>

        {/* Central User Icon */}
        <circle cx="400" cy="300" r="50" fill={theme.imageHighlight} />
        <circle cx="400" cy="300" r="30" fill="#fff" />

        {/* Skill nodes */}
        <g>
          {/* Usability */}
          <circle cx="200" cy="150" r="30" fill="url(#grad)" />
          <text x="200" y="150" textAnchor="middle" dy="5" fontSize="10" fill="#333">Usability</text>

          {/* UX evaluation */}
          <circle cx="600" cy="150" r="30" fill="url(#grad)" />
          <text x="600" y="150" textAnchor="middle" dy="5" fontSize="10" fill="#333">UX Eval</text>

          {/* Security */}
          <circle cx="650" cy="450" r="30" fill="url(#grad)" />
          <text x="650" y="450" textAnchor="middle" dy="5" fontSize="10" fill="#333">Security</text>

          {/* Participatory Design */}
          <circle cx="150" cy="450" r="30" fill="url(#grad)" />
          <text x="150" y="450" textAnchor="middle" dy="5" fontSize="10" fill="#333">UCD</text>

          {/* Research */}
          <circle cx="400" cy="100" r="30" fill="url(#grad)" />
          <text x="400" y="100" textAnchor="middle" dy="5" fontSize="10" fill="#333">Research</text>

          {/* Digital Transformation */}
          <circle cx="400" cy="500" r="30" fill="url(#grad)" />
          <text x="400" y="500" textAnchor="middle" dy="5" fontSize="10" fill="#333">Digital TX</text>

          {/* Contextual Inquiry */}
          <circle cx="250" cy="300" r="30" fill="url(#grad)" />
          <text x="250" y="300" textAnchor="middle" dy="5" fontSize="10" fill="#333">HCI</text>

          {/* Data-driven insights */}
          <circle cx="550" cy="300" r="30" fill="url(#grad)" />
          <text x="550" y="300" textAnchor="middle" dy="5" fontSize="10" fill="#333">Privacy</text>
        </g>
      </svg>
    );
  }
}