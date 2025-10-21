import Link from "next/link";
import { Container, Button } from "@/shared/ui";

export function Header() {
  return (
    <header>
      <Container>
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="text-lg">
            <span className="font-bold">jmo</span> blog
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/subscribe">
              <Button variant="primary" className="text-[14px] font-medium w-18 h-8">
                구독하기
              </Button>
            </Link>
            <Button variant="secondary" className="text-[14px] font-medium px-3 h-8">
              로그인
            </Button>
            <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
