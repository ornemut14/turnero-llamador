export default function CidiMascot() {
  return (
    <svg
      className="mascot-svg"
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 170 Q50 165 30 155" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M15 190 Q55 182 28 170" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M25 210 Q60 200 35 188" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>

      <rect x="60" y="90" width="110" height="140" rx="55" fill="white"/>

      <line x1="95"  y1="90" x2="80"  y2="55" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <line x1="115" y1="88" x2="110" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <line x1="135" y1="90" x2="140" y2="52" stroke="white" strokeWidth="4" strokeLinecap="round"/>

      <circle cx="80"  cy="52" r="6" fill="white"/>
      <circle cx="110" cy="47" r="6" fill="white"/>
      <circle cx="140" cy="49" r="6" fill="white"/>

      <path d="M88 148 Q96 142 104 148" stroke="#333" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

      <circle cx="136" cy="148" r="10" fill="#333"/>
      <circle cx="139" cy="145" r="3.5" fill="white"/>

      <path d="M98 175 Q115 190 132 175" stroke="#333" strokeWidth="3" strokeLinecap="round" fill="none"/>

      <line x1="112" y1="200" x2="112" y2="216" stroke="#E86B1A" strokeWidth="3" strokeLinecap="round"/>
      <line x1="104" y1="208" x2="120" y2="208" stroke="#E86B1A" strokeWidth="3" strokeLinecap="round"/>

      <path d="M170 140 Q195 120 188 100" stroke="white" strokeWidth="14" strokeLinecap="round" fill="none"/>

      <circle cx="185" cy="96"  r="6" fill="white"/>
      <circle cx="193" cy="103" r="5" fill="white"/>
      <circle cx="192" cy="114" r="5" fill="white"/>
    </svg>
  )
}