import React from "react";

function SvgInsta(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M17 22H7a5 5 0 01-5-5V7a5 5 0 015-5h10a5 5 0 015 5v10a5 5 0 01-5 5z"
        fill="#FFF"
      />
      <radialGradient
        cx={2.458}
        cy={22.208}
        gradientUnits="userSpaceOnUse"
        id="insta_svg__a"
        r={26.815}
      >
        <stop offset={0} stopColor="#ffd35a" />
        <stop offset={0.255} stopColor="#f7964c" />
        <stop offset={0.6} stopColor="#f05b70" />
        <stop offset={0.717} stopColor="#bd6186" />
        <stop offset={0.853} stopColor="#85659b" />
        <stop offset={0.951} stopColor="#5c66a9" />
        <stop offset={1} stopColor="#4766b0" />
      </radialGradient>
      <path
        d="M17.022 1H6.978A5.985 5.985 0 001 6.978v10.044A5.985 5.985 0 006.978 23h10.044A5.985 5.985 0 0023 17.022V6.978A5.985 5.985 0 0017.022 1zM21 17.022A3.983 3.983 0 0117.022 21H6.978A3.983 3.983 0 013 17.022V6.978A3.983 3.983 0 016.978 3h10.044A3.983 3.983 0 0121 6.978v10.044zM12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6-11c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
        fill="url(#insta_svg__a)"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="insta_svg__b"
        x1={0.534}
        x2={23.466}
        y1={6.653}
        y2={17.347}
      >
        <stop offset={0} stopColor="#fff" stopOpacity={0.2} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <path
        d="M17.022 1H6.978A5.985 5.985 0 001 6.978v10.044A5.985 5.985 0 006.978 23h10.044A5.985 5.985 0 0023 17.022V6.978A5.985 5.985 0 0017.022 1z"
        fill="url(#insta_svg__b)"
      />
    </svg>
  );
}

export default SvgInsta;
