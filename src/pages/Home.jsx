import ProfilePic from "../components/images/ProfilePic";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <h3>Hey, I'm Jacob👋</h3>
          <h1>Software Developer</h1>
          <p>
            i'm a software developer based in California, i'll help you build
            beautiful websites your users will love
          </p>
        </div>
        {/* Image component */}
        <ProfilePic />
        {/* two button components */}
        {/* social media components */}
      </div>
    </>
  );
}

export default Home;
