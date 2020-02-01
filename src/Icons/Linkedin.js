import React from "react";

function SvgLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M21 23H3a2 2 0 01-2-2V3a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2z"
        fill="#0377BD"
      />
      <path
        d="M21 1H3a2 2 0 00-2 2v.25a2 2 0 012-2h18a2 2 0 012 2V3a2 2 0 00-2-2z"
        fill="#FFF"
        opacity={0.2}
      />
      <path
        d="M21 22.75H3a2 2 0 01-2-2V21a2 2 0 002 2h18a2 2 0 002-2v-.25a2 2 0 01-2 2z"
        fill="#010101"
        opacity={0.1}
      />
      <g fill="#FFF">
        <circle cx={6} cy={6} r={2} />
        <path d="M4 9h4v11H4zM15.5 9c-1.084 0-1.85.306-2.5.814V9H9v11h4v-6c0-1.252.56-2 1.5-2s1.5.748 1.5 2v6h4v-6c0-3.038-1.767-5-4.5-5z" />
      </g>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="linkedin_svg__a"
        x1={4.147}
        x2={20.513}
        y1={7.949}
        y2={24.315}
      >
        <stop offset={0} stopColor="#010101" stopOpacity={0.1} />
        <stop offset={1} stopColor="#010101" stopOpacity={0} />
      </linearGradient>
      <path
        d="M18.87 10.474h-.013C19.584 11.339 20 12.54 20 14v6h-4v-6c0-1.252-.56-2-1.5-2s-1.5.748-1.5 2v6H9V9h2.822L7.459 4.637l-.002.002C7.791 4.996 8 5.473 8 6c0 1.103-.897 2-2 2-.5 0-.952-.19-1.303-.495L6.192 9H8v11H4l3 3h14a2 2 0 002-2v-6.396l-4.13-4.13z"
        fill="url(#linkedin_svg__a)"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="linkedin_svg__b"
        x1={-0.653}
        x2={24.653}
        y1={6.1}
        y2={17.9}
      >
        <stop offset={0} stopColor="#fff" stopOpacity={0.2} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <path
        d="M21 23H3a2 2 0 01-2-2V3a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2z"
        fill="url(#linkedin_svg__b)"
      />
    </svg>
  );
}

export default SvgLinkedin;
