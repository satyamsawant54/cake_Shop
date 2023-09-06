const AboutUsPage = () => {
  return (
    <>
      <div class="container">
        <div class="jumbotron mt-5">
          <div class="container" style={{ padding: "1rem" }}>
            <h1
              class="display-4"
              style={{ fontFamily: "Georgia", fontWeight: "bold" }}
            >
              About Us
            </h1>
            <p class="mt-5">
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique. This is a template for a simple marketing
              or informational website. It includes a large callout called a
              jumbotron and three supporting pieces of content. Use it as a
              starting point to create something more unique. This is a template
              for a simple marketing or informational website. It includes a
              large callout called a jumbotron and three supporting pieces of
              content. Use it as a starting point to create something more
              unique. This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <h1
        class="mt-5"
        style={{
          textAlign: "center",
          fontFamily: "Georgia",
          fontWeight: "bold",
          fontSize: "2.3rem",
        }}
      >
        Customer Reviews
      </h1>
      <div class="container mt-5" style={{ textAlign: "center" }}>
        <div class="card-deck">
          <div class="card" style={{ border: "none" }}>
            <img
              class="card-img-top"
              src="images/satyam5.jpeg"
              alt="Card image cap"
              style={{ height: "300px", width: "300px", borderRadius: "40rem" }}
            ></img>
            <div class="card-body">
              <h3 class="card-title" style={{ fontFamily: "Arial Black" }}>
                Satyam Sawant
              </h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="card" style={{ border: "none" }}>
            <img
              class="card-img-top"
              src="images/akshay.jpeg"
              alt="Card image cap"
              style={{ height: "300px", width: "300px", borderRadius: "40rem" }}
            ></img>
            <div class="card-body">
              <h3 class="card-title" style={{ fontFamily: "Arial Black" }}>
                Akshay Pawar
              </h3>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.This is a wider card with supporting text
                below as a natural lead-in to additional content. This content
                is a little bit longer.This is a wider card with supporting text
                below as a natural lead-in to additional content. This content
                is a little bit longer.This is a wider card with supporting text
                below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="card" style={{ border: "none" }}>
            <img
              class="card-img-top"
              src="images/anurag.jpeg"
              alt="Card image cap"
              style={{ height: "300px", width: "300px", borderRadius: "40rem" }}
            ></img>
            <div class="card-body">
              <h3 class="card-title" style={{ fontFamily: "Arial Black" }}>
                Anurag Singh
              </h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.This is a wider
                card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.This is
                a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.This is
                a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
