import PageHeader from "./common/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader title="Best Dish About Page" />
      <div className="row"></div>
      <div className="row">
        <div className="col-7">
          <article>
            <blockquote className="blockquote">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer mt-1">
                Lorem, ipsum dolor.
                <cite title="Source Title">Lorem, ipsum.</cite>
              </footer>
            </blockquote>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            iusto nulla quae reprehenderit architecto unde error animi labore
            quod. Placeat nostrum quasi itaque tempore mollitia! Quos molestiae
            aliquam rerum culpa? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Impedit, laborum maxime est consectetur reiciendis
            commodi officiis quod, cupiditate aperiam tempora, soluta labore
            fuga dicta saepe pariatur eveniet porro veniam quos necessitatibus.
            Unde hic itaque magni molestiae dolorum rerum cum necessitatibus
            quos fuga obcaecati pariatur consectetur sapiente tempora aut, iusto
            odio possimus nihil cumque recusandae sed vitae, aliquam,
            dignissimos architecto? Cumque molestiae aut nisi, saepe natus
            laboriosam modi totam, culpa corrupti nam minus id rem ipsa sint
            facilis, impedit odit aspernatur similique voluptatem necessitatibus
            ut adipisci dignissimos perferendis magnam. Dignissimos voluptatem
            dolore fuga molestiae similique ut praesentium alias eius asperiores
            blanditiis.
          </article>
        </div>
        <div className="ms-5 col-3">
          <img
            className="img-fluid"
            src="https://cdn.pixabay.com/photo/2016/09/13/18/38/silverware-1667988_960_720.png"
            alt="food"
          />
        </div>
      </div>
    </>
  );
};

export default About;
