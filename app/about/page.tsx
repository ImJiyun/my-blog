import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";
import image from "@/assets/image.jpeg";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="w-full py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col items-center gap-2">
          <Image src={image} width={100} height={100} alt="jiyun's image" />
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          삼성청년소프트웨어아카데미를 통해 개발에 입문하고, 프론트엔드 개발자로
          취업을 준비하고 있습니다. <br />
          React와 TypeScript를 중심으로 사용자 중심의 웹 서비스를 만드는 데에
          관심이 많습니다. 기술뿐만 아니라 꾸준히 영어 강의를 듣고 기록하며
          글로벌 환경에서도 성장할 수 있는 개발자가 되기 위해 노력하고 있습니다.
          <br /> 이 블로그에는 개발하면서 배운 내용, 프로젝트 경험, 그리고
          공부하면서 정리한 자료들을 담고 있습니다. 작은 기록들이 모여 더 나은
          개발자로 성장할 것이라 믿고, 오늘도 차곡차곡 쌓아가는 중입니다.
        </p>
      </div>
    </div>
  );
}
