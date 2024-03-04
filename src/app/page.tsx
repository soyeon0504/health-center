'use client'
import HeaderComponent from "@/components/common/HeaderComponent";
import Link from "next/link";
import styles from '@/styles/header.module.scss'
import { FaShare } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { SiHey } from "react-icons/si";

export default function Home():JSX.Element {
  return (
    <>
    <HeaderComponent 
    rightElements={[
      <button key="share" onClick={() => {
        alert('지도공유')
      }}>
        <FaShare />
      </button>,
      <Link key="feedback" href="/feedback" className={styles.box}>
        <MdFeedback />
      </Link>,
      <Link key="about" href="/about" className={styles.box}>
        <SiHey />
      </Link>,
    ]}
    />
    <main>test</main>
    </>
  );
}
