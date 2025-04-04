import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" /> 
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <path d="M50 5 L90 25 V60 C90 80 70 95 50 100 C30 95 10 80 10 60 V25 Z"
              fill="none" stroke="url(#grad)" strokeWidth="4" />
        <text x="50" y="55" className="font-sans font-bold text-[28px]" fill="url(#grad)" textAnchor="middle">
          SYL
        </text>
      </svg>
    </Link>
  );
}