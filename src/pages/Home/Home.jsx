import React, { useEffect, useRef, useState } from "react";
import { Animate } from "../../Components/helpers/Animate";
import {
  Button,
  SkillCard,
  ServiceCard,
  ProjectCard,
  Icon,
  ContactForm,
} from "../../index";
import {
  skills,
  services,
  portfolio,
  socials,
} from "../../../constants/constants";
export const Home = () => {
  const [download, setDownload] = useState(false);
  const downloadCv = () => {
    setDownload(true);
    let a = document.createElement("a");
    a.href = "/Muhammad-Bilal.pdf";
    a.download = "MuhammadBilal-Cv.pdf";
    a.classList.add("download-btn");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  useEffect(() => {
    document.querySelector(".download-btn")
      ? setDownload(true)
      : setTimeout(() => {
          setDownload(false);
        }, 1000);
  });
  console.log(document.documentElement.clientHeight);
  console.log(window.innerHeight);

  return (
    <>
      <section className="hero bg-bg1 h-[90vh] ">
        <div
          className="container max-w-[90rem] mx-auto
         flex p-6 px-3 items-center lg:-mt-0 justify-center h-full "
        >
          <div className="hero-content  flex lg:flex-1 -top-10 flex-col gap-1 small:gap-4 items-start small:items-center justify-center h-full ">
            <div className="">
              <p className="text-[2rem] name   small:text-4xl lg:text-5xl xl:text-6xl text-secondary font-normal font-primary">
                I am{" "}
                <span className="text-primary block  name-span font-bold text-[2.5rem] leading-tight small:text-5xl lg:text-6xl xl:text-7xl">
                  Muhammad Bilal
                </span>
              </p>
            </div>
            <div className="role">
              <h1 className="font-semibold text-secondary medium:-mt-2 text-[1.5rem] small:text-3xl lg:text-4xl xl:text-5xl">
                Front End Developer
              </h1>
            </div>
            <div className="buttons flex mt-2 medium:mt-0 flex-col items-start justify-start medium:flex-row gap-2 medium:gap-4 medium:justify-center medium:items-center">
              <Button
                icon={
                  download ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-5 h-5  text-white animate-spin"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#2A2A2A"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-download"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>
                  )
                }
                filled={true}
                handleClick={downloadCv}
              >
                Download Cv
              </Button>
              <Button href="#contact">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="aboutme bg-black ">
        <div className="container max-w-[90rem] mx-auto px-4 py-12 medium:p-20 pt-10 flex  flex-col gap-6">
          <Animate classname=".about-heading">
            <div
              data="ABOUT ME"
              className="text-2xl small:text-4xl z-10 text-primary  translate-y-[1000px] opacity-0  font-extrabold about-heading transition-[transform] duration-1000 delay-75 text-center  main-heading"
            >
              ABOUT ME
            </div>
          </Animate>

          <Animate classname={".about-heading-2"}>
            <div className="heading text-primary text-2xl  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75 ease-in-out small:text-3xl text-center font-bold mt-6 about-heading-2">
              <span className="text-secondary"> Meet</span> Muhammad Bilal
            </div>
          </Animate>
          <Animate classname={".intro"}>
            <p className="intro text-secondary  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75 ease-in-out text-center text-base medium:text-xl">
              I'm currently pursuing my Bachelor's degree at the University of
              Engineering and Technology. I'm an aspiring MERN stack developer
              with a solid background in front-end technologies like HTML, CSS,
              JavaScript, and React.js. I'm also diving into backend
              technologies to round out my skills. On the side, I have a keen
              interest in AI/ML and blockchain technology.
            </p>
          </Animate>
          <Animate classname={".about-heading-3"}>
            <div className="heading about-heading-3 text-secondary text-2xl small:text-3xl  text-center font-bold  mt-6  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75 ease-in-out ">
              What I’m Good At
            </div>
          </Animate>

          <div className="skills-container  flex  items-stretch flex-wrap justify-center gap-y-10 gap-12 mt-6   ease-in-out">
            {skills.map((skill) => (
              <Animate classname={".skill"}>
                <div className="skill  translate-y-[1000px] opacity-0 transition-[transform] duration-1000 delay-75 ease-in-out">
                  <SkillCard
                    key={skill.id}
                    name={skill.name}
                    image={skill.img}
                  />
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services bg-bg1">
        <div className="container max-w-[90rem] mx-auto px-8 py-12 medium:p-20 pt-10 flex  flex-col gap-6">
          <Animate classname={".services-heading"}>
            <div
              data="SERVICES"
              className="text-2xl small:text-4xl z-10 text-primary font-extrabold text-center main-heading services-heading  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75 ease-in-out"
            >
              SERVICES
            </div>
          </Animate>

          <div className="services-container  flex  items-stretch flex-wrap justify-center gap-12 gap-x-20 mt-8">
            {services.map((service) => (
              <Animate classname={".service"}>
                <div className="service  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75 ease-in-out">
                  <ServiceCard
                    key={service.id}
                    name={service.name}
                    icon={service.icon}
                    description={service.description}
                  />
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio bg-black">
        <div className="container max-w-[90rem] mx-auto px-4 py-12 medium:p-20 pt-10 flex  flex-col gap-6">
          <Animate classname={".portfolio-heading"}>
            <div
              data="PORTFOLIO"
              className="text-2xl small:text-4xl z-10 text-primary font-extrabold text-center main-heading portfolio-heading  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75"
            >
              PORTFOLIO
            </div>
          </Animate>

          <div className="portfolio-container  flex  items-stretch flex-wrap justify-center gap-12 gap-x-20 mt-8">
            {portfolio.map((project) => (
              <Animate classname={".project"}>
                <div className="project  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75">
                  <ProjectCard
                    key={project.id}
                    name={project.name}
                    img={project.img}
                    tags={project.tags}
                    link={project.link}
                  />
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact bg-bg1">
        <div className="container max-w-[90rem] mx-auto px-4 py-12 medium:p-20 pt-10 flex  flex-col gap-6">
          <Animate classname={".contact-heading"}>
            <div
              data="CONTACT ME"
              className="text-2xl small:text-4xl z-10 text-primary font-extrabold text-center main-heading contact-heading  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75"
            >
              CONTACT ME
            </div>
          </Animate>
          <Animate classname={".contact-container"}>
            <div className="contact-container w-full  flex  items-center flex-col md:flex-row justify-center gap-6  mt-8  translate-y-[1000px] opacity-0  transition-[transform] duration-1000 delay-75">
              <ContactForm />
              <div className="contact-options flex-1 flex flex-col items-center gap-3 ">
                <h1 className="text-[1.7rem]  lg:text-4xl z-10 text-primary font-extrabold ">
                  Reach out to me on
                </h1>
                <p className="text-base lg:text-xl text-secondary">
                  bilalshahid187@gmail.com
                </p>
                <p className="text-sm lg:text-sm text-secondary">
                  or visit my socials
                </p>
                <div className="socials flex gap-4">
                  {socials.map((social) => (
                    <Icon
                      key={social.id}
                      name={social.name}
                      socialLink={social.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Home;
