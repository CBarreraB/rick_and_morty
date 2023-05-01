import styled from "./About.module.css";
const About = () => {
  return (
    <>
      <h2 className={styled.title}>About</h2>
      <div className={styled.paragraph}>
        <p>
          Welcome to this Rick and Morty application! My name is Carlos Andres
          Barrera, and I am a passionate full stack web development student at
          Soy Henrry Academy. Ever since I discovered my love for programming, I
          have been dedicating my time and energy to learning everything I can
          about web application and website development.
        </p>
        <p>
          This application was created with great care and dedication, with the
          intention of providing an exceptional experience to its users. Every
          line of code was written with the goal of creating a platform that is
          easy to use, intuitive, and attractive. From the interface design to
          the functionality of its features, everything was carefully planned
          and developed.
        </p>
        <p>
          I am someone who is always looking to learn new things, and the
          creation of this application is no exception. I have made an effort to
          use the latest technologies and tools available in the world of web
          development, to ensure that this application is the best it can be. My
          goal in creating this application is to provide a useful and practical
          tool for users, that is easy to use and provides them with a unique
          experience. I believe that we can all learn and improve, and this
          application is my contribution to making the world a better place
          through technology.
        </p>
        <p>
          Thank you for your time, and I hope you enjoy using this application
          as much as I enjoyed creating it. If you have any questions or
          comments, please don't hesitate to get in touch with me. I am eager to
          hear your feedback and suggestions for further improvement. Thank you
          for your support and trust in my work!
        </p>
      </div>
    </>
  );
};

export default About;
