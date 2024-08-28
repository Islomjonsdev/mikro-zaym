import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImg from "../../../../public/images/heroimg.png"
import "./Hero.scss"

const Hero = () => {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero_container'>
                <div className='hero_left'>
                      <h2>Вклады в национальной <span>валюте</span></h2>
                      <Link href={"/"}>подробнее</Link>
                </div>
                <div className='hero_right'>
                  <Image src={heroImg} alt={"heroImg"}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero