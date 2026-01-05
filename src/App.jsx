import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myphoto from "./assets/img/myphoto.png";
import myphoto2 from "./assets/img/myphoto2.png";
import myphoto3 from "./assets/img/myphoto3.png";
import myphoto4 from "./assets/img/myphoto4.png";
import myphoto4Black from "./assets/img/myphoto4_black.png";
import myphotoBg from "./assets/img/myphoto_bg.png";
import myphotoCom from "./assets/img/myphtoCom.png";
import myphotoFooter from "./assets/img/myphotoFooter.png";
import myphotoPhone from "./assets/img/myphotoPhone.png";
// import "./App.css"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [theme, setTheme] = useState("light");
  const heroRef = useRef(null);
  const aboutRefs = useRef([]);
  const [currentFeature, setCurrentFeature] = useState(1);
  const featureRefs = useRef([]);
  const featureSectionRef = useRef(null);
  const workRef = useRef(null);
  const scrollTextRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.to(".hero-asterisk", {
      rotation: 360, // 360도 회전
      duration: 3, // 8초에 한 바퀴
      ease: "none", // 일정한 속도
      repeat: -1, // 무한 반복
    });

    // Scrolling Text Animation (무한 반복)
    // if (scrollTextRef.current) {
    //   gsap.to(scrollTextRef.current, {
    //     x: "-50%",
    //     duration: 75,
    //     ease: "none",
    //     repeat: -1,
    //   });
    // }
    if (scrollTextRef.current) {
      gsap.to(scrollTextRef.current, {
        x: "-50%",
        duration: 75,
        ease: "none",
        repeat: -1,
        delay: 1.5,
        repeatDelay: 0,
      });
    }

    // About Section - Stacking Effect
    aboutRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }
    });

    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        ScrollTrigger.create({
          trigger: ref,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentFeature(index + 1),
          onEnterBack: () => setCurrentFeature(index + 1),
        });
      }
    });

    // Work Section
    document.querySelectorAll(".work-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    publishing: [
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 95 },
      { name: "SCSS", percent: 90 },
      { name: "JavaScript", percent: 85 },
      { name: "jQuery", percent: 85 },
    ],
    tool: [
      { name: "Git", percent: 80 },
      { name: "Jira", percent: 85 },
      { name: "Confluence", percent: 85 },
      { name: "VSCode", percent: 95 },
    ],
    design: [
      { name: "XD", percent: 75 },
      { name: "Figma", percent: 80 },
    ],
    study: [
      { name: "GSAP", percent: 70 },
      { name: "React", percent: 75 },
      { name: "Animation", percent: 80 },
    ],
  };

  const features = [
    {
      title: "꼼꼼함과 디테일 강조!",
      desc: "작은 마진, 폰트, 색상까지 세세하게 신경 쓰며 완성도 높은 화면을 구현합니다.",
      desc2:
        "디자인 시안의 1px 차이도 놓치지 않으며, 다양한 브라우저와 디바이스에서 동일한 사용자 경험을 제공하기 위해 크로스 브라우징 테스트를 철저히 진행합니다. 또한 반응형 작업 시 breakpoint별 세밀한 조정을 통해 모든 화면에서 최적의 레이아웃을 유지합니다.",
      tags: [
        "Pixel Perfect",
        "Cross Browser",
        "Responsive Design",
        "QA Testing",
      ],
    },
    {
      title: "다양한 프로젝트 경험!",
      desc: "관리자 페이지, 공공기관 플랫폼 등 여러 환경에서 쌓은 경험으로 유연하게 작업합니다.",
      desc2:
        "이커머스, 금융, 공공기관, 교육 플랫폼 등 다양한 산업군의 프로젝트를 경험하며 각 도메인의 특성과 요구사항을 이해하고 있습니다. 대규모 트래픽을 처리하는 서비스부터 복잡한 데이터 테이블을 다루는 관리자 시스템까지, 프로젝트 규모와 특성에 맞는 최적의 솔루션을 제안합니다.",
      tags: [
        "E-commerce",
        "Admin Dashboard",
        "Public Platform",
        "Education",
        "30+ Projects",
      ],
    },
    {
      title: "반응형과 접근성 완벽 구현!",
      desc: "모바일과 데스크탑 모두 사용자 친화적인 UI를 구현합니다.",
      desc2:
        "WCAG 2.1 가이드라인을 준수하여 시각, 청각, 운동 장애를 가진 사용자도 불편함 없이 이용할 수 있는 웹을 만듭니다. Semantic HTML을 활용한 스크린 리더 지원, 키보드 네비게이션 최적화, 적절한 색상 대비 등을 고려하며, 모바일 퍼스트 접근 방식으로 모든 디바이스에서 최상의 경험을 제공합니다.",
      tags: [
        "WCAG 2.1",
        "Semantic HTML",
        "Mobile First",
        "Screen Reader",
        "Keyboard Navigation",
      ],
    },
    {
      title: "협업과 소통 능력!",
      desc: "디자이너, 개발자와 원활하게 의견을 나누며 효율적으로 작업합니다.",
      desc2:
        "Figma, Zeplin 등의 디자인 툴을 능숙하게 다루며, Git을 통한 버전 관리와 코드 리뷰 문화에 익숙합니다. Jira, Confluence를 활용한 프로젝트 관리 경험이 있으며, 정기적인 스탠드업 미팅과 스프린트 회고를 통해 팀의 생산성 향상에 기여합니다. 기술적 이슈를 비개발자도 이해할 수 있게 설명하는 커뮤니케이션 능력을 보유하고 있습니다.",
      tags: [
        "Figma",
        "Zeplin",
        "Git",
        "Jira",
        "Confluence",
        "Code Review",
        "Agile",
      ],
    },
    {
      title: "빠른 학습과 문제 해결!",
      desc: "프로젝트에 필요한 라이브러리의 사용법을 익히고, 작업 중 발생하는 문제를 책임감 있게 해결합니다.",
      desc2:
        "새로운 기술 스택이나 라이브러리를 빠르게 습득하며, 공식 문서와 커뮤니티를 적극 활용합니다. 버그나 이슈 발생 시 Chrome DevTools를 활용한 디버깅, Stack Overflow와 GitHub Issues 검색 등 체계적인 접근 방식으로 문제를 해결합니다. 또한 해결 과정을 문서화하여 팀원들과 공유하고, 같은 문제가 재발하지 않도록 예방합니다.",
      tags: [
        "Chrome DevTools",
        "Debugging",
        "Documentation",
        "Stack Overflow",
        "GitHub",
      ],
    },
    {
      title: "사용자 중심의 개선과 아이디어!",
      desc: "UI/UX 관점에서 화면과 인터랙션을 개선하고, 단순 구현을 넘어 개선 아이디어를 제안합니다.",
      desc2:
        "사용자 행동 패턴을 분석하고 Google Analytics, Hotjar 등의 툴을 활용하여 데이터 기반의 개선안을 제시합니다. 로딩 성능 최적화, 직관적인 에러 메시지, 접근성 향상 등 사용자 경험을 개선할 수 있는 부분을 능동적으로 발견하고 제안합니다. 단순히 주어진 디자인을 구현하는 것을 넘어, '왜 이런 디자인인가?'를 고민하며 더 나은 방향을 모색합니다.",
      tags: [
        "Google Analytics",
        "Hotjar",
        "Performance",
        "UX Research",
        "A/B Testing",
      ],
    },
    {
      title: "효율적인 작업 방식",
      desc: "템플릿 활용, 컴포넌트 재사용, SCSS 변수 관리 등 효율적인 퍼블리싱을 지향합니다.",
      desc2:
        "재사용 가능한 컴포넌트 라이브러리를 구축하여 개발 속도를 높이고, SCSS의 mixin, function, variable을 활용한 체계적인 스타일 관리로 유지보수성을 극대화합니다. BEM, SMACSS 등의 CSS 방법론을 적용하여 확장 가능한 코드를 작성하며, Gulp, Webpack 등의 빌드 도구를 활용한 자동화로 반복 작업을 최소화합니다. 코드의 일관성과 가독성을 위해 Prettier, ESLint 같은 도구도 적극 활용합니다.",
      tags: [
        "BEM",
        "SMACSS",
        "SCSS",
        "Webpack",
        "Component Library",
        "Prettier",
        "ESLint",
      ],
    },
  ];

  const works = [
    {
      title: "감염병 분야 빅데이터 플랫폼",
      period: "2022.09 - 2022.12",
      desc: "웹 포털 운영 및 유지보수, 서브페이지 퍼블리싱 전담, 메인 및 소개 페이지 UI/UX 개편",
      tags: ["HTML", "CSS", "jQuery"],
    },
    {
      title: "K-CURE 운영관리 시스템 구축",
      period: "2023.01 - 2023.05",
      desc: "관리자 웹 퍼블리싱, amChart/슬라이드 라이브러리 적용, 모바일 반응형, 웹 접근성 인증 획득",
      tags: ["HTML", "CSS", "jQuery", "JavaScript", "amChart", "웹접근성"],
    },
    // {
    //   title: "감염병 분야 빅데이터 플랫폼 개편",
    //   period: "2023.03",
    //   desc: "메인 및 소개 페이지 UI/UX 개편",
    //   tags: ["HTML", "CSS", "jQuery"],
    // },
    {
      title: "포털 공통 기능 프로젝트 (사내)",
      period: "2023.05 - 2023.06",
      desc: "SI 포털 공통 기능 단독 퍼블리싱 - 권한/메뉴/게시판/사용자/코드/로그 관리",
      tags: ["HTML", "CSS", "jQuery"],
    },
    // {
    //   title: "K-CURE 운영관리 시스템 (재투입)",
    //   period: "2023.06 - 2023.12",
    //   desc: "운영 시스템 안정화 및 유지보수, 웹 접근성 인증 작업 지원",
    //   tags: ["유지보수", "웹접근성"],
    // },
    {
      title: "산림 빅데이터 플랫폼 운영",
      period: "2024.01",
      desc: "Google Analytics 기반 통계 페이지 기획 및 퍼블리싱",
      tags: ["Google Analytics"],
    },
    {
      title: "삼성카드 프로젝트 연구소 개발 지원",
      period: "2024.01 - 2024.08",
      desc: "버전 업그레이드 소스 이관, 프론트 개발 지원",
      tags: ["FTL", "Handlebars", "JavaScript", "jQuery", "Ajax"],
    },
    {
      title: "철도공사 통합메타관리시스템 구축",
      period: "2024.08 - 2024.12",
      desc: "데이터 거버넌스 시스템 관리자 페이지 단독 퍼블리싱 (약 38개 페이지)",
      tags: ["HighCharts", "Ag-Grid", "데이터 시각화", "단독"],
    },
    {
      title: "사내 제품 포탈 구축",
      period: "2025.01 - 2025.08",
      desc: "통합검색, 마이카탈로그, 데이터 요청/결재 등 핵심 기능 단독 퍼블리싱, 사용자/관리자단 구현",
      tags: ["적응형", "웹접근성", "컴포넌트 가이드", "단독"],
    },
    {
      title: "한국도로공사 AI 업무 지원 시스템(사용자/관리자)",
      period: "2025.08 - 현재",
      desc: "React 기반 데이터 포털 퍼블리싱, 라이트/다크 테마, 사용자 설정 구현, 모바일 반응형",
      tags: ["React", "SCSS", "BEM", "Hooks", "웹접근성(WCAG 2.1)", "단독"],
    },
    // {
    //   title: "한국도로공사 AI 업무 지원 시스템 (관리자)",
    //   period: "2025.08 - 현재",
    //   desc: "관리자 페이지 퍼블리싱, 공통 컴포넌트 UI 구현",
    //   tags: ["React", "테이블", "검색조건", "팝업", "토스트"],
    // },
    {
      title: "사내 제품 포탈 QA 이슈 대응",
      period: "2025.12 - 현재",
      desc: "퍼블리싱/프론트 영역 수정, 입력값 검증/초기화 오류 등 버그 수정",
      tags: ["QA", "디버깅", "Git", "Jira"],
    },
  ];

  // const baseBg = theme === 'light' ? '#f7f6f3' : '#121212';
  // const cardBg = theme === 'light' ? '#ffffff' : '#1c1c1c';
  // const textMain = theme === 'light' ? '#1e1e1e' : '#eaeaea';
  // const textSub = theme === 'light' ? '#6b6b6b' : '#9a9a9a';
  // const lineColor = theme === 'light' ? '#dcdcdc' : '#2e2e2e';
  // const accent = theme === 'light' ? '#2f3a4a' : '#d0d6de';

  // ===== Color System : Paperlogy Print Tone =====
  // const baseBg   = theme === 'light' ? '#FAF8F3' : '#121212';
  // const cardBg   = theme === 'light' ? '#FDFCF8' : '#1C1C1C';
  // const textMain = theme === 'light' ? '#1A1A1A' : '#EDEDED';
  // const textSub  = theme === 'light' ? '#6B645C' : '#A0A0A0';
  // const lineColor= theme === 'light' ? '#D8D3C8' : '#2E2E2E';
  // // const accent   = theme === 'light' ? '#2B2520' : '#D4CDC4';
  // const accent = theme === 'light' ? '#4A3F35' : '#E2DACE'; // 따뜻한 잉크 브라운

  const baseBg =
    theme === "light"
      ? "#FFFFFF" // 메인 배경
      : "#0F1115"; // 다크 배경 (완전 블랙 X, 블루톤 유지)

  const cardBg =
    theme === "light"
      ? "#FCF6EA" // 연한 섹션 배경
      : "#1A1D24"; // 카드/섹션 배경

  const textMain =
    theme === "light"
      ? "#222222" // 본문 텍스트
      : "#E6E8EC"; // 다크 메인 텍스트

  const textSub =
    theme === "light"
      ? "#5F6368" // 서브 텍스트
      : "#9AA0A6"; // 다크 서브 텍스트

  const lineColor =
    theme === "light"
      ? "#e9e9e9ff" // 구분선
      : "#2A2E36"; // 다크 구분선

  const accent =
    theme === "light"
      ? "#ACA37C" //  키워드 블루 포인트
      : "#5B7CFF"; // 다크용 블루 (명도 ↑)

  const styles = {
    portfolio: {
      fontFamily: "'Paperozi', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: baseBg,
      color: textMain,
      transition: "background-color 0.3s, color 0.3s",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 40px",
      // overflow: "hidden",
    },

    themeToggle: {
      position: "fixed",
      top: "28px",
      right: "28px",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: `1px solid ${lineColor}`,
      background: cardBg,
      fontSize: "11px",
      cursor: "pointer",
      zIndex: 1000,
      color: textSub,
      letterSpacing: "2px",
    },

    hero: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      // background: cardBg,
    },

    logo: {
      position: "absolute",
      top: "40px",
      left: "40px",
      fontSize: "11px",
      letterSpacing: "3px",
      color: textSub,
    },

    nav: {
      position: "absolute",
      top: "40px",
      right: "120px",
      display: "flex",
      gap: "32px",
    },

    navItem: {
      background: "none",
      border: "none",
      fontSize: "12px",
      cursor: "pointer",
      color: textSub,
      letterSpacing: "2px",
    },

    heroContent: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },

    heroSubTitle: {
      fontSize: "2.2vw",
      lineHeight: 1,
      fontWeight: 500,
      color: textMain,
      marginBottom: "0",
      marginTop: "0",
      textAlign: "center",
    },

    heroTitle: {
      fontSize: "15vw",
      lineHeight: 1.35,
      fontWeight: 500,
      marginBottom: "24px",
      color: accent,
      marginTop: "0",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },

    heroTitleAsterisk: {
      position: "absolute",
      top: "0",
      fontSize: "5vw",
      color: accent,
      fontWeight: 400,
    },

    heroDesc: {
      position: "absolute",
      bottom: 0,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "baseline",
      width: "93vw",
      left: "50%",
      transform: "translateX(-50%)",
      borderTop: `1.5px solid ${accent}`,
      fontSize: "16px",
    },
    heroPhoto: {
      marginLeft: "8px",
      height: "2.1vw",
    },

    scrollTextWrapper: {
      position: "absolute",
      bottom: "20px",
      left: 0,
      width: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },

    scrollText: {
      display: "inline-block",
      fontSize: "15vw",
      letterSpacing: "8px",
      color: lineColor,
      paddingRight: "100vw",
      fontWeight: 700,
      // color: accent,
    },

    // heroSubtitle: {
    //   fontSize: "12px",
    //   letterSpacing: "8px",
    //   color: textSub,
    // },

    about: {
      padding: "140px 0",
    },

    aboutCard: {
      background: cardBg,
      padding: "64px",
      marginBottom: "56px",
      borderRadius: "20px",
      border: `1px solid ${lineColor}`,
    },

    updateDate: {
      fontSize: "11px",
      letterSpacing: "3px",
      color: textSub,
      marginBottom: "16px",
    },

    aboutContent: {
      fontSize: "17px",
      lineHeight: 1.9,
      display: "flex",
      paddingRight: "15px",
    },

    aboutPhotoWrapper: {
      // height: "100%",
      background: "#d9d9d9",
      width: "27%",
      display: "flex",
      alignItems: "end",
      marginRight: "40px",
      position: "relative",
    },

    aboutPhoto: {
      // flex: "1",
      // alignSelf: "start",
      width: "99%",
      marginRight: "40px",
    },

    aboutDesc: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "spaceBetween",
      // justifyContent: "spaceBetween",
    },

    aboutName: {
      display: "flex",
      flexDirection: "column",
      color: textMain,
      fontSize: "40px",
      fontWeight: "600",
      marginBottom: "40px",
      lineHeight: 1.2,
      // marginBottom: "40px",
    },

    aboutNameFirst: {
      color: textSub,
      fontSize: "24px",
    },

    aboutIntroduce: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
    },

    imagePlaceholder: {
      marginTop: "40px",
      padding: "60px",
      border: `1px dashed ${lineColor}`,
      textAlign: "center",
      color: textSub,
      fontSize: "12px",
      letterSpacing: "1px",
    },

    skillsTitle: {
      fontSize: "30px",
      marginBottom: "10px",
      lineHeight: 1,
    },

    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "56px",
    },

    skillCategoryTitle: {
      fontSize: "11px",
      letterSpacing: "3px",
      color: textSub,
      marginBottom: "24px",
      textTransform: "uppercase",
    },

    skillItem: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "14px",
    },

    skillName: {
      // minWidth: "90px",
      fontSize: "16px",
      marginRight: "8px",
    },

    skillBar: {
      flex: 1,
      height: "5px",
      background: lineColor,
      borderRadius: "3px",
      overflow: "hidden",
    },

    skillProgress: {
      height: "100%",
      background: accent,
    },

    skillPercent: {
      minWidth: "40px",
      textAlign: "right",
      fontSize: "11px",
      color: textSub,
    },

    sectionTitle: {
      fontSize: "42px",
      marginBottom: "80px",
    },

    feature: {
      padding: "140px 0",
      position: "relative",
    },

    featureContainer: {
      display: "grid",
      gridTemplateColumns: "6.5vw 1fr",
      gap: "100px",
      alignItems: "start",
    },

    featureNumberWrapper: {
      position: "sticky",
      top: "20vh",
      height: "fit-content",
    },

    featureNumber: {
      fontSize: "6.5vw",
      fontWeight: 700,
      color: accent,
      lineHeight: 1,
      transition: "all 0.3s ease",
    },

    featureList: {
      display: "flex",
      flexDirection: "column",
      gap: "100vh",
      paddingTop: "20vh",
      paddingBottom: "20vh",
    },

    featureItem: {
      minHeight: "40vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    featureContentTitle: {
      fontSize: "32px",
      marginBottom: "16px",
      fontWeight: 600,
    },

    featureContentDesc: {
      fontSize: "18px",
      lineHeight: 1.7,
      color: textSub,
    },

    featureContentDesc2: {
      fontSize: "15px",
      lineHeight: 1.8,
      color: textSub,
      opacity: 0.8,
    },

    featureTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "24px",
    },

    work: {
      padding: "140px 0",
    },

    workTimeline: {
      position: "relative",
      paddingLeft: "40px",
    },

    workItem: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      marginBottom: "120px",
      position: "relative",
    },

    workDot: {
      position: "absolute",
      left: "-36px",
      top: "10px",
      width: "8px",
      height: "8px",
      background: accent,
      borderRadius: "50%",
    },

    workInfoTitle: {
      marginTop: 0,
    },

    workTag: {
      display: "inline-block",
      marginRight: "6px",
    },

    workLine: {
      position: "absolute",
      left: "-32px",
      top: "18px",
      width: "1px",
      height: "100%",
      background: lineColor,
    },

    contact: {
      padding: "140px 0 100px",
      textAlign: "center",
    },

    contactItem: {
      fontSize: "17px",
      textDecoration: "none",
      color: textSub,
      letterSpacing: "0.5px",
      marginBottom: "8px",
      display: "inline-block",
    },

    footerText: {
      marginTop: "80px",
      fontSize: "11px",
      letterSpacing: "4px",
      color: textSub,
    },
  };

  return (
    <div style={styles.portfolio}>
      {/* Theme Toggle */}
      <button style={styles.themeToggle} onClick={toggleTheme}>
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>

      {/* Hero Section */}
      {/* 처음에 섹션 나오기 전에 텍스트 애니메이션 필요 -> Heewon PorFolio */}
      {/* Welcome 으로 텍스트 애니메이션 - 로딩 화면 추가 */}
      <section style={styles.hero} ref={heroRef}>
        {/* <div style={styles.container}> */}
        <div style={styles.logo}>PORTFOLIO</div>
        <nav style={styles.nav}>
          {["About me", "Feature", "Work", "Contact"].map((item) => (
            <button
              key={item}
              style={styles.navItem}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", "-"))
              }
            >
              {item}
            </button>
          ))}
        </nav>
        <div style={styles.heroContent}>
          <p style={styles.heroSubTitle}>Hello, Welcome To My</p>
          <h1 className="hero-title" style={styles.heroTitle}>
            PORTFOLIO
            <span className="hero-asterisk" style={styles.heroTitleAsterisk}>
              *
            </span>
          </h1>
          {/* <div style={styles.scrollTextWrapper}>
            <div ref={scrollTextRef} style={styles.scrollText}>
              CODE WITH PASSION • DETAIL MATTERS
            </div>
          </div> */}
        </div>
        <div style={styles.heroDesc}>
          <p>Code with Passion, Detail Matters</p>
          <p>Last Update · 2026.01.02</p>
          <p>
            Heewon Choi · Web Publisher
            <img src={myphotoFooter} alt="" style={styles.heroPhoto} />
          </p>
        </div>
        {/* </div> */}
      </section>

      {/* About Me Section */}
      <section id="about-me" style={styles.about}>
        {/* style={styles.container} */}
        <div>
          <div
            style={styles.aboutContent}
            ref={(el) => (aboutRefs.current[1] = el)}
          >
            {/* <div className=""> */}
            {/* <img src={myphoto} alt="" style={styles.aboutPhoto} /> */}
            {/* <img src={myphoto2} alt="" style={styles.aboutPhoto} /> */}
            {/* <img src={myphoto3} alt="" style={styles.aboutPhoto} /> */}
            {/* <img src={myphotoCom} alt="" style={styles.aboutPhoto} /> */}
            <div style={styles.aboutPhotoWrapper}>
              <img src={myphotoPhone} alt="" style={styles.aboutPhoto} />
            </div>
            <div style={styles.aboutDesc}>
              <div style={styles.aboutName}>
                <span>HEEWON</span>
                <span style={styles.aboutNameFirst}>CHOI</span>
              </div>
              <div style={styles.aboutIntroduce}>
                <p>
                  안녕하세요.
                  <br />
                  4년차 웹 퍼블리셔 최희원입니다.
                  <br />
                  저는 퍼블리셔로서 ‘누구에게나 열려 있는 웹’을 만들기 위해,
                  디자인의 재현을 넘어 사용자 흐름과 사용성, 접근성까지 고려한
                  마크업을 고민합니다.
                  <br />
                  또한 제가 구현한 코드가 다른 사람들에게도 이해되기 쉬운 구조로
                  남을 수 있도록, 유지보수와 협업을 염두에 둔 퍼블리싱을
                  중요하게 생각합니다.
                </p>
                <h3 style={styles.skillsTitle}>Skills</h3>
                <div style={styles.skillsGrid}>
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h4 style={styles.skillCategoryTitle}>{category}</h4>
                      {items.map((skill) => (
                        <div key={skill.name} style={styles.skillItem}>
                          <span style={styles.skillName}>{skill.name}</span>
                          {/* <div style={styles.skillBar}>
                            <div
                              style={{
                                ...styles.skillProgress,
                                width: `${skill.percent}%`,
                              }}
                            />
                          </div> */}
                          {/* <span style={styles.skillPercent}>
                            {skill.percent}%
                          </span> */}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <h3 style={styles.skillsTitle}>Education & Experience</h3>
                <div>2022.02 - 2022.07 그린컴퓨터아트학원</div>
                <div>2022.09 ~ 데이터스트림즈 재직 중</div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="feature" style={styles.feature} ref={featureSectionRef}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Feature</h2>
          <div style={styles.featureContainer}>
            <div style={styles.featureNumberWrapper}>
              <div style={styles.featureNumber}>
                {String(currentFeature).padStart(2, "0")}
              </div>
            </div>
            <div style={styles.featureList}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={styles.featureItem}
                  ref={(el) => (featureRefs.current[index] = el)}
                >
                  <h3 style={styles.featureContentTitle}>{feature.title}</h3>
                  <p style={styles.featureContentDesc}>{feature.desc}</p>
                  <p style={styles.featureContentDesc2}>{feature.desc2}</p>
                  {/* Tags */}
                  <div style={styles.featureTags}>
                    {feature.tags.map((tag, i) => (
                      <span key={i} style={styles.featureTag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" style={styles.work} ref={workRef}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Work</h2>
          <div style={styles.workTimeline}>
            {works.map((work, index) => (
              <div key={index} className="work-item" style={styles.workItem}>
                <div style={styles.workDot} />
                {index !== works.length - 1 && <div style={styles.workLine} />}
                <div>
                  <h3 style={styles.workInfoTitle}>{work.title}</h3>
                  <p style={styles.workPeriod}>{work.period}</p>
                  <p style={styles.workDesc}>{work.desc}</p>
                  <div style={styles.workTags}>
                    {work.tags.map((tag) => (
                      <span key={tag} style={styles.workTag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={styles.workThumbnail}>
                  <div style={styles.thumbnailPlaceholder}>Project Image</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contact}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          {/*  */}
          <div style={styles.contactInfo}>
            <a href="mailto:heewon7254@naver.com" style={styles.contactItem}>
              heewon7254@naver.com
            </a>
            <br />
            <a href="tel:010-4495-5680" style={styles.contactItem}>
              010-4495-5680
            </a>
          </div>
          <div style={styles.footerText}>THE END OF PORTFOLIO</div>
        </div>
      </section>
    </div>
  );
};

export default App;
