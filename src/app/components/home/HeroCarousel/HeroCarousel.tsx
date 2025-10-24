'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroCarousel.css';

// Slides now reference images from the /public/images folder
const slides = [
  {
    image: '/slide1.png',
    title: 'Dedicated and Compassionate Care for a Fulfilling Life',
    subtitle:
      'At Earnest Domiciliary Care, we provide personalised care plans tailored to meet the unique needs of adults with autism, learning difficulties, physical disabilities, and mental health challenges.',
  },
  {
    image: '/slide2.png',
    title: 'Empowering Lives Through Community and Inclusion',
    subtitle:
      'Join our inclusive programmes that promote independence, creativity, and social connection in a supportive environment.',
  },
  {
    image: '/slide3.png',
    title: 'Building Trust Through Personalised Support',
    subtitle:
      'Experience one-on-one care that prioritises your unique needs, goals, and aspirations for a better quality of life.',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
        >
          <Image
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            fill
            priority={index === 0}
            className="hero-image"
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-buttons">
              <Link href="/services" className="hero-button hero-button-primary">
                Learn More
              </Link>
              <Link href="/contact" className="hero-button hero-button-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        className="hero-nav hero-nav-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="hero-nav hero-nav-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${
              index === currentSlide ? 'hero-indicator-active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
