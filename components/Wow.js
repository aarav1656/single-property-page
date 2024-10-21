'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';
import AmenitiesSection from './AmenitiesSection';
import FeaturesSection from './FeaturesSection';
import LuxuryProjectPricing from './LuxuryProjectPricing';
import ProjectTeam from './ProjectTeam';

export default function Wow() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        <LuxuryProjectPricing />
      </div>
      <div ref={gallery} className={styles.gallery} style={{ minHeight: `${height * 2}px` }}>
        <Column y={y}>
          <ImageContainer src="/1.jpeg" alt="Image 1" />
          <ImageContainer src="/2.jpeg" alt="Image 2" />
          <ImageContainer src="/3.jpeg" alt="Image 3" />
        </Column>
        <Column y={y2}>
          <ImageContainer src="/4.jpeg" alt="Image 4" />
          <ImageContainer src="/5.jpeg" alt="Image 5" />
          <ImageContainer src="/6.jpeg" alt="Image 6" />
        </Column>
        <Column y={y3}>
          <ImageContainer src="/7.jpeg" alt="Image 7" />
          <ImageContainer src="/8.jpeg" alt="Image 8" />
          <ImageContainer src="/9.jpeg" alt="Image 9" />
        </Column>
        <Column y={y4}>
          <ImageContainer src="/10.jpeg" alt="Image 10" />
          <ImageContainer src="/11.jpeg" alt="Image 11" />
        </Column>
      </div>
      <AmenitiesSection />
      <FeaturesSection />

      <ProjectTeam />
     
    </main>
  );
}

const Column = ({ y, children }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {children}
    </motion.div>
  );
};

const ImageContainer = ({ src, alt }) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};
