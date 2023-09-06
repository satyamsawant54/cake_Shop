const ContactUsPage = () => {
  return (
    <>
      <div class="mt-3">
        <div
          class="container text-center white"
          style={{
            marginBottom: "-10px",
            padding: "25px",
            color: "#000",
          }}
        >
          <h2 style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
            Tell us, what is your Query ?
          </h2>
          <h5
            class="mt-5"
            style={{ fontFamily: "Verdana", fontWeight: "bold" }}
          >
            Contact Us - 9326903988
          </h5>
        </div>
        <div class="container py-4 px-5">
          <form
            target="_blank"
            action="https://formsubmit.co/satyamsawant54@gmail.com"
            method="POST"
          >
            <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  ></input>
                </div>
                <br />
                <div class="col">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  ></input>
                </div>
                <br />
                <div class="col">
                  <input
                    type="number"
                    name="number"
                    class="form-control"
                    placeholder="Contact Number"
                  ></input>
                </div>
                <br />
              </div>
            </div>
            <div class="form-group">
              <textarea
                placeholder="Your Message/Query"
                class="form-control"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>
            <br />
            <button type="submit" class="btn btn-lg btn-dark btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
