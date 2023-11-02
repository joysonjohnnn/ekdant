import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                <video autoPlay muted loop>
                  <source src="assets/video/testimonial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Amazing IT Solutions
                          </h2>
                          <p className="testimonial__text-2">
                            Ekdant has help us just from the beginning when the
                            concept for search engine optimisation taking office
                            and the full of internet we’ve grown to employ more
                            than 50 talented specialists with diverse
                            experiences and broad skill sets of huge markers.
                          </p>
                          <h3 className="testimonial__author">Ayush Sharma</h3>
                          <h4 className="testimonial__role">CEO, Digital Agency</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide ">
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Trustworthy service
                          </h2>
                          <p className="testimonial__text-2">
                          Ive partnered with Ekdant for years, and they consistently deliver top-notch IT solutions. Their teams expertise and commitment to our success have been invaluable. Ekdant IT solutions have helped our business grow and evolve. Their proactive approach to technology keeps us ahead of the curve, and their support is always prompt and reliable.
                          </p>
                          <h3 className="testimonial__author">Jaison John</h3>
                          <h4 className="testimonial__role">Co Founder, Lodsa Tech</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Cost Effective
                          </h2>
                          <p className="testimonial__text-2">
                          Ekdant is our go-to IT partner for everything, from cloud services to cybersecurity. Their solutions have not only streamlined our operations but also given us peace of mind in an increasingly complex digital landscape.
                          </p>
                          <h3 className="testimonial__author">Himanshu Pandey</h3>
                          <h4 className="testimonial__role">Freelancer</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                          Innovative & Reliable
                          </h2>
                          <p className="testimonial__text-2">
                          Ekdant consistently delivers innovative and reliable IT solutions. They are a true partner, not just a service provider, and we trust them to keep our technology infrastructure at its best.

                          </p>
                          <h3 className="testimonial__author">Henis Narwani</h3>
                          <h4 className="testimonial__role">CEO, Papercraft</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                          Guarantee Results
                          </h2>
                          <p className="testimonial__text-2">
                          When we talk about Ekdant, we do not mean a typical
                          business partner, but rather a team that collaborates
                          with us daily, always there for us when we encounter
                          difficulties and celebrate achievements. We see in
                          Ekdant our best ally for success!
                          </p>
                          <h3 className="testimonial__author">Puysh Aurora</h3>
                          <h4 className="testimonial__role">CEO, Nexsus Mobies</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
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

export default AboutTestimonial;
