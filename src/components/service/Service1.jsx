import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.jpg";
import Service12 from "../../../public/assets/imgs/service/2.jpg";
import Service13 from "../../../public/assets/imgs/service/3.jpg";
import Service14 from "../../../public/assets/imgs/service/4.jpg";
import Service15 from "../../../public/assets/imgs/service/5.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        Interaction <br />
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Web & Mobile <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Motion & Branding <br />
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Digital Maketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        SEO & SEM
                      </a>
                    </li>
                   
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        <br /> <br />
                        Interaction
                        Design
                        </h2>
                        <p>
                        Elevate user experiences with our UI/UX design services. We craft intuitive interfaces that seamlessly connect users with your digital world, enhancing engagement, satisfaction, and ultimately, your business success.
                        </p>
                        <ul>
                          <li>+ User Interacton</li>
                          <li>+ User Experience</li>
                          <li>+ Wireframe Design</li>
                          <li>+ Design Revamp</li>
                          
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web & Mobile Development
                        </h2>
                        <p>
                        Elevate your digital presence with our comprehensive services. Our expert web design and mobile development solutions ensure stunning websites and engaging apps that connect with users, drive results, and make your brand accessible anytime, anywhere
                        </p>
                        <ul>
                          <li>+ WordPress</li>
                          <li>+ Shoppify</li>
                          <li>+ Wix</li>
                          <li>+ WooCommerce</li>
                          <li>+ API Development</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Motion & Branding Design
                        </h2>
                        <p>
                        Experience the dynamic synergy of our Motion & Branding Design services. We specialize in crafting captivating visual identities and animations that breathe life into your brand. Our creative solutions resonate with your audience, leaving a lasting and memorable impression that sets you apart in today's competitive landscape
                        </p>
                        <ul>
                          <li>+ Logo Design</li>
                          <li>+ Printings</li>
                          <li>+ Animations</li>
                          <li>+ Video Editing</li>
                          <li>+ Illustrations</li>
                          <li>+ Graphic Designs</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Digital Maketing
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ Social Media Marketing</li>
                          <li>+ Facebook Ads</li>
                          <li>+ Google Ads</li>
                          <li>+ Physcial Marketing</li>
                        
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          SEO & SEM
                        </h2>
                        <p>
                        Maximize your digital impact with our comprehensive SEO and SEM services. Search Engine Optimization (SEO) fine-tunes your website for higher search engine rankings, increasing organic traffic and visibility. Simultaneously, Search Engine Marketing (SEM) harnesses the power of paid advertising to target your audience with precision, driving immediate results. Our strategic approach blends these two disciplines to boost your online presence, attract more visitors, and convert them into loyal customers, ensuring a strong and lasting online footprint for your business.
                        </p>
                        <ul>
                          <li>+ Search Engine Optimization (SEO)</li>
                          <li>+ Search Engine Marketing (SEM)</li>
                          
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/contact"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
