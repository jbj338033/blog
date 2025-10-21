"use client";

import { Container } from "@/shared/ui";
import { useState } from "react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

  const isDisabled = !email || !category;

  return (
    <Container className="py-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-3">구독하기</h1>
        <p className="text-gray-600 text-[15px] mb-10">
          새로운 글이 올라올 때마다 이메일로 알려드립니다.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-[14px] font-medium mb-2 text-gray-700">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-[14px] font-medium mb-2 text-gray-700">
              관심 카테고리
            </label>
            <div className="relative">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-gray-400 transition-colors appearance-none cursor-pointer"
              >
                <option value="">선택해주세요</option>
                <option value="dev">개발</option>
                <option value="design">디자인</option>
                <option value="essay">에세이</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path 
                    d="M1 1.5L6 6.5L11 1.5" 
                    stroke="#666" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-3.5 rounded-xl font-medium text-[15px] transition-colors mt-8 cursor-pointer ${
              isDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-[#1b64da]"
            }`}
          >
            구독하기
          </button>
        </form>
      </div>
    </Container>
  );
}
