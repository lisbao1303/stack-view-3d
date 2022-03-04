

export default function CardSkill(element) {
  const fillColor = (element.level === "S" || element.level === "A" ) ? "url(#id0)":(element.level === "B"? "url(#id1)":"url(#id2)")
  return <div className='cardSkill'>
    <div className='svg'><img src={element.svg}
      alt="icon"
      width={30}
      height={30}></img></div>
    <div className='content'>
      <span>{element.skill}</span>
      <span>{element.xp}</span>
      <div className='badge'>{<svg id="svgC" width="30" height="30" fill="black" viewBox="0 0 511.984 511.984" fillRule="evenodd">
        <defs>
          <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="42.32" y1="707.79" x2="500.98" y2="707.79">
            <stop offset="0" stopOpacity="1" stopColor="#B2803C" />
            <stop offset="0.25098" stopOpacity="1" stopColor="#B2803C" />
            <stop offset="0.580392" stopOpacity="1" stopColor="#E2C758" />
            <stop offset="1" stopOpacity="1" stopColor="#B88C3D" />
          </linearGradient>
          <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="42.32" y1="707.79" x2="500.98" y2="707.79">
            <stop offset="0" stopOpacity="1" stopColor="#11998e" />
            <stop offset="0.25098" stopOpacity="1" stopColor="#11998e" />
            <stop offset="0.580392" stopOpacity="1" stopColor="#11998e" />
            <stop offset="1" stopOpacity="1" stopColor="#38ef7d" />
          </linearGradient>
          <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="42.32" y1="707.79" x2="500.98" y2="707.79">
            <stop offset="0" stopOpacity="1" stopColor="#c31432" />
            <stop offset="0.40098" stopOpacity="1" stopColor="#240b36" />
            <stop offset="0.580392" stopOpacity="1" stopColor="#240b36" />
            <stop offset="1" stopOpacity="1" stopColor="#240b36" />
          </linearGradient>
        </defs>

        <polygon fill={fillColor} points="511.984,255.992 473.188,197.791 477.688,127.996 414.987,96.981 383.988,34.296 
314.193,38.795 255.992,0 197.806,38.795 127.996,34.296 96.997,96.981 34.31,127.996 38.81,197.791 0,255.992 38.81,314.178 
34.31,383.988 96.997,414.987 127.996,477.674 197.806,473.174 255.992,511.984 314.193,473.174 383.988,477.674 415.003,414.987 
477.688,383.988 473.188,314.178 "/>

      </svg>}<div id={element.level==="S"? "goldScabuloso":"normal"}>{element.level}</div></div>
    </div>
  </div>;
}
