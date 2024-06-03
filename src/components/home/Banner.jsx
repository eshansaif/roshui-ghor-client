export default function Banner() {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="hero min-h-[400px]"
      style={{
        backgroundImage: `url("https://d3ox4wjkl7mf3m.cloudfront.net/feed_story/step/yCGo6Rzz3nsf4n9WrquZb3gEHxjaqEZqH5zhSo8h.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Cooking Is Science</h1>
          <p className="mb-5">
            Good cooks should know something about the Maillard reaction,
            electromagnetic waves, and the way that proline-rich proteins bond
            with polyphenols. Don’t worry. This isn’t that dream where you walk
            into the chemistry final and realize you have never attended a day
            of class. We make it easy for you.
          </p>
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
}
