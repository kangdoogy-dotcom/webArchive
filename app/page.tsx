"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Code, Cpu, Hammer, Award, BookOpen, ChevronRight, PenTool, Mail, Phone, Heart } from 'lucide-react';

// --- 데이터 영역 (최신 PDF 자료 반영) ---

const profile = {
  name: "강동혁",
  title: "도전·배움·실행의 선순환을 만드는 엔지니어",
  summary: "취약 계층 도배 장판 교체 사업(2200만원 규모) 주도 및 4개 NGO와 협력하며 경영 마인드를 길렀습니다. 429시간의 봉사활동과 2개의 특허출원 프로젝트를 통해 기술력과 사회적 역량을 겸비한 '실행하는 엔지니어'입니다. [cite: 693, 694, 728]",
  email: "kdoogy1@naver.com",
  phone: "010.3597.9794",
  education: "명지대학교 기계공학(심화) 졸업 (2025.02) | 학점 3.73/4.5 (총 153학점) [cite: 709, 710, 711]",
  career: [
    "인천기계공업고등학교 기간제 교사 (2025.03, 6개월) [cite: 715]",
    "(주)마이크로시스템 현장실습 (2024.07, 1개월) [cite: 714]",
    "천안 공업고등학교 교생 (2024.05, 1개월) [cite: 713]",
    "Arini Tech 프리랜서 (2024.02, 1개월) [cite: 712]",
  ],
  totalVolunteerHours: 429, // [cite: 728]
};

const competencies = [
  { title: "문제 해결 능력", detail: "SmartLibrarian 로봇 개발 시 연구노트를 작성하여 PID 라인트레이싱 실패 문제를 해결 [cite: 718, 719, 729]", icon: Wrench },
  { title: "창의력", detail: "SmartLibrarian 로봇 및 저전력 알람 시스템 관련 특허 출원 2건 (10-2025-0003554 포함) [cite: 721, 722, 731, 732, 801]", icon: Cpu },
  { title: "경영 마인드", detail: "희망브리지 M.U.V 회장, 2200만원 규모 사업 주도 및 NGO 협업을 통해 사업금 350만원 확보 [cite: 724, 725, 733, 734]", icon: BookOpen },
  { title: "배려심/리더십", detail: "총 429시간의 봉사활동 (집수리, 도배, 교육 봉사 등) 및 M.U.V 회장 활동 [cite: 728, 735]", icon: Heart },
];

const skills = [
  { name: "C언어 / 아두이노", level: 95, detail: "PID 모터 제어 및 스테핑 모터 제어 고급 역량 [cite: 743, 744]" },
  { name: "SolidWorks / Inventor", level: 90, detail: "3D 모델링 및 KS규격 2D 도면 작성 고급 역량 [cite: 745, 746]" },
  { name: "MetLab", level: 80, detail: "데이터 분석 및 회귀방정식을 사용한 예측 역량 [cite: 747, 748]" },
  { name: "차량 진단/정비", level: 85, detail: "GSW 회로도 분석, 엔진/섀시/전기 계통 점검 가능 [cite: 975, 977]" },
  { name: "SW 개발 (Python/OCR)", level: 75, detail: "Yolo, OpenCV OCR 및 머신러닝 기반 손글씨 인식 개발 경험 [cite: 849, 944]" },
];

const projects = [
  {
    id: 1,
    category: "Vehicle Maintenance & Repair",
    title: "아반떼 MD 방치 차량 회생 프로젝트",
    sub: "2012년식 아반떼 MD | GSW 기반 체계적 진단",
    desc: "고등학교에 방치되어 있던 차량을 GSW 정비 지침서 및 회로도 분석을 통해 2주 만에 시동 및 운행 시험을 완료했습니다. [cite: 977, 978]",
    steps: [
      "크랭킹 여부 확인 및 스타터 모터 교체 (회로도 확인) [cite: 948, 949]",
      "스마트 키 작동 불량 진단 및 수리 (키박스 5개 확인 후 컨 성공) [cite: 954, 955]",
      "연료 공급 점검 (미작동 커넥터 단선 납땜 후 점검) [cite: 956]",
      "ECU 점검 및 교체 (G스캐너 진단 후 ECU 교체하여 시동 성공) [cite: 959]",
      "공회전 진동 슈팅 조치 (ISC 서보모터, 스로틀 바디 교체) [cite: 962, 963]",
      "현재 A, B, C 필러를 절단하여 오픈카로 튜닝 진행 중 [cite: 979]",
    ],
    icon: Wrench,
    imagePlaceholder: "/images/avante_repair.jpg"
  },
  {
    id: 2,
    category: "Robotics & SW Development",
    title: "Smart Librarian Robot",
    sub: "캡스톤 디자인 대상 / 특허 출원 (10-2025-0003554)",
    desc: "사회적 약자를 위한 도서관 사서 로봇 개발. 하드웨어/회로 설계부터 PID 제어, AI 영상처리 코드 작성까지 팀장으로서 전 과정을 주도했습니다. [cite: 819, 846]",
    steps: [
      "PID 모터 제어 및 Pixy2 카메라 라인트레이싱 구현 [cite: 850]",
      "Yolo, OpenCV OCR 기반 청구기호 인식 시스템 개발 [cite: 849]",
      "진공 흡착 패드 및 레이저 센서 제어 시스템 설계 [cite: 851, 852]",
      "Raspberry Pi 및 Arduino 기반 하드웨어/앱 연동 제어 [cite: 853, 854]",
    ],
    icon: Cpu,
    link: "https://www.youtube.com/shorts/erdfUK-tfUw", // 시연 영상 [cite: 884, 885, 886]
    imagePlaceholder: "/images/smart_robot.jpg"
  },
  {
    id: 3,
    category: "Product Design & Innovation",
    title: "저전력 침수예방 알람 시스템",
    sub: "공학입문설계 1등 수상 / 특허 출원",
    desc: "사이펀 효과를 활용하여 침수를 예방하고 배수 시간을 계산해 알람을 설정하는 시스템을 개발했습니다. [cite: 802, 803, 801]",
    steps: [
      "사이펀 효과를 활용한 물 배수 시스템 설계 [cite: 802]",
      "수위에 따른 배수 시간 실험 및 데이터 분석 [cite: 804]",
      "SolidWorks를 활용한 하드웨어 설계 및 제작 주도 [cite: 783, 784]",
      "저전력 폭우 알람 시스템을 개발하여 1등 수상 및 특허 출원 [cite: 801]",
    ],
    icon: Hammer,
    imagePlaceholder: "/images/flood_alarm.jpg"
  },
];

const awards = [
  "기계공학과 캡스톤 디자인 대상 (2024)",
  "2024 SEP 융합 Festival 은상",
  "용인시 자원봉사단체상 최우수상 (M.U.V 회장)",
  "우수 자원봉사자 국회의원 표창",
];

// --- 컴포넌트 영역 ---
interface CompetencyCardProps {
  title: string;
  detail: string;
  Icon: React.ElementType;
}

const CompetencyCard: React.FC<CompetencyCardProps> = ({ title, detail, Icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-4 mb-3">
      <Icon className="w-8 h-8 text-orange-500" />
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
  </motion.div>
);

export default function Portfolio() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">

      {/* Sticky Navigation (Optional: Add here if needed, for simplicity kept in single page) */}

      {/* 1. Hero Section */}
      <header className="bg-[#002c5f] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{profile.name}</h1>
            <p className="text-xl md:text-3xl text-slate-300 mb-8 font-light italic">
              {profile.title}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-4 py-2 bg-white text-[#002c5f] rounded-lg font-semibold hover:bg-slate-200 transition">
                <Mail className="w-5 h-5" /> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 px-4 py-2 bg-transparent border border-slate-500 text-slate-300 rounded-lg font-semibold hover:bg-slate-800 transition">
                <Phone className="w-5 h-5" /> {profile.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto px-6"
      >

        {/* 2. 경력 요약 및 학력 */}
        <section id="about" className="py-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 border-b pb-3 border-slate-200 flex items-center gap-3 text-[#002c5f]">
            <PenTool className="w-7 h-7" /> 경력 요약 및 학력
          </motion.h2>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-2xl border border-slate-100 mb-10">
            <h3 className="text-xl font-bold mb-3">하이라이트</h3>
            <p className="text-lg leading-relaxed text-slate-700">{profile.summary}</p>

            <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-bold text-slate-800">학력</p>
                <p className="text-sm text-slate-600 mt-1">{profile.education}</p>
              </div>
              <div>
                <p className="font-bold text-slate-800">총 봉사시간</p>
                <p className="text-sm text-slate-600 mt-1"><span className="text-orange-500 font-extrabold text-lg">{profile.totalVolunteerHours}+</span> 시간 [cite: 728]</p>
              </div>
              <div>
                <p className="font-bold text-slate-800">주요 경력</p>
                <ul className="text-sm text-slate-600 mt-1 space-y-1">
                  {profile.career.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. 핵심 역량 */}
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 border-b pb-3 border-slate-200 flex items-center gap-3 text-[#002c5f]">
            <Code className="w-7 h-7" /> 핵심 역량 (Competencies)
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((comp, index) => (
              <CompetencyCard
                key={index}
                title={comp.title}
                detail={comp.detail}
                Icon={comp.icon}
              />
            ))}
          </div>
        </section>

        {/* 4. Skills & Tools */}
        <section id="skills" className="py-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 border-b pb-3 border-slate-200 flex items-center gap-3 text-[#002c5f]">
            <Cpu className="w-7 h-7" /> 주요 기술 및 프로그램 활용
          </motion.h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-700">{skill.name}</span>
                  <span className="text-sm text-orange-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="bg-[#002c5f] h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-xs text-slate-500 mt-2">{skill.detail}</p>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-4 text-sm text-slate-600">
              * 기타 프로그램 활용: MS Office (고급), MetLab (데이터 분석) [cite: 739, 748]
            </motion.div>
          </div>
        </section>

        {/* 5. Projects Showcase */}
        <section id="projects" className="py-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 border-b pb-3 border-slate-200 flex items-center gap-3 text-[#002c5f]">
            <Wrench className="w-7 h-7" /> 도전적인 프로젝트
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-xl border border-slate-200 transition-all cursor-pointer"
                onClick={() => setActiveProjectId(activeProjectId === project.id ? null : project.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-100 rounded-lg shadow-inner">
                    <project.icon className="w-7 h-7 text-[#002c5f]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 px-2 py-1 bg-slate-100 rounded">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                <p className="text-sm font-medium text-orange-500 mb-3">{project.sub}</p>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.desc}</p>

                <div className="flex items-center text-[#002c5f] text-sm font-semibold mt-auto">
                  상세 진단/개발 과정 보기 <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${activeProjectId === project.id ? 'rotate-90' : ''}`} />
                </div>

                <AnimatePresence>
                  {activeProjectId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-slate-200"
                    >
                      <ul className="space-y-3">
                        {project.steps.map((step, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-orange-500 mt-1 font-bold">•</span>
                            {typeof step === 'string' ? step : step}
                          </li>
                        ))}
                        {project.link && (
                          <li className="text-sm flex items-start">
                            <a href={project.link} target="_blank" className="font-bold text-red-600 hover:underline flex items-center gap-1">
                              시연 영상 바로가기 <ChevronRight className="w-3 h-3" />
                            </a>
                          </li>
                        )}
                        <li className="text-xs text-slate-500 pt-2">
                          {/* 실제 이미지를 public/images/{project.imagePlaceholder} 경로에 넣어주세요 */}
                          **[이미지 Placeholder]**: 실제 차량/로봇 사진을 여기에 넣어 시각적 자료로 활용해야 합니다.
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Awards & Community */}
        <section id="awards" className="py-20">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 border-b pb-3 border-slate-200 flex items-center gap-3 text-[#002c5f]">
            <Award className="w-7 h-7" /> 수상 및 대외 활동
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">주요 수상 내역</h3>
              <ul className="space-y-4">
                {awards.map((award, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100"
                  >
                    <span className="mt-1 flex-shrink-0 w-3 h-3 bg-[#002c5f] rounded-full"></span>
                    <span className="text-slate-700 font-medium leading-relaxed">{award}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">M.U.V 봉사활동 (리더십/경영)</h3>
              <motion.div variants={itemVariants} className="bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-2xl font-extrabold mb-1">희망브리지 M.U.V 회장</h4>
                <p className="text-orange-200 text-sm mb-4">2023.03 - 2024.03 | <span className="font-bold">총 319시간</span> 집수리 봉사 [cite: 651, 735]</p>
                <ul className="list-disc list-inside space-y-2 text-sm opacity-90 leading-relaxed">
                  <li>취약 계층 대상 **2,200만원 규모**의 무료 도배 장판 교체 사업 주도 [cite: 694, 733]</li>
                  <li>4개 NGO와 협력 및 영업 활동을 통해 **350만원**의 추가 사업금 확보 [cite: 734]</li>
                  <li>용인시 자원봉사단체 최우수상 및 국회의원 표창 수상 [cite: 638]</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center mt-10">
        <p className="mb-2">© 2025 Kang Dong-hyuk. All rights reserved.</p>
        <p className="text-sm">E-mail: {profile.email} | Tel: {profile.phone}</p>
      </footer>
    </div>
  );
}