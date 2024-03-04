import HeaderComponent from '@/components/common/HeaderComponent'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/header.module.scss'
import { MdFeedback } from "react-icons/md";
import { SiHey } from "react-icons/si";

const About = ():JSX.Element => {
  return (
    <>
      <HeaderComponent rightElements={[
        <Link key="feedback" href="/feedback" className={styles.box}>
        <MdFeedback />
      </Link>,
      <Link key="about" href="/about" className={styles.box}>
        <SiHey />
      </Link>,
      ]}/>
      <main>서비스 소개입니다.</main>
    </>
  )
}

export default About