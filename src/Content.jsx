import "./Content.css";
function Content() {
  return (
    <>
      <div>
        <div className="div-of-main-1">
          <section className="images-of-arthik">
            <img
              src="/images/group photo.jpg"
              alt="group image"
              className="img-group"
            />
          </section>

          <section className="introduction-of-arthik">
            <div>
              <h2 className="introduction">INTRODUCTION</h2>
            </div>
            <div className="div-of-introduction">
              <p className="paragraph-of-introduction">
                " The Aarthik Bikash Mitra Saving and Credit Cooperative Society
                Ltd. was established on 5th Poush 2061 BS (December 2004 AD) by
                37 members, including 28 men and 9 women, with the intention of
                serving the then VDCs (Village Development Committees) of Hokse,
                Anikot, Mahadevsthan, Dolalghat, and Bhumlu in the
                Kavrepalanchok district. The cooperative aimed to provide
                services desired by its members, collect scattered... "
              </p>
            </div>
          </section>
        </div>
        <div className="message-and-instruction-cycle">
          <div className="message-and-image">
            <section className="message-part">
              <div>
                <h3 className="message">Message</h3>
              </div>
              <div className="div-of-figure">
                <img
                  src="/images/figure.jpeg"
                  alt="figure"
                  className="images-of-figure"
                />
              </div>
              <div>
                <span className="name-of-the-oficer">Thakurnath Adhikari</span>
                <span className="name-of-the-oficer">Chief Executive Officer</span>
              </div>
            </section>
            <section className="description-of-the-officer">
              <p className="paragraph-of-description">
                " Since the establishment of the institution, technology has
                made significant advances, and today, every activity of the
                institution is managed in a way that allows members to view and
                study them at their convenience.... "
              </p>
            </section>
          </div>
          <div className="div-instruction">
            <section>
              <h4 className="heading-of-instruction-cycle">INCTRUCTOIN CYCLE</h4>
            </section>
            <section className="applicaion-of-instruction-cycle">
              <div className="dic-ic">
                <div className="ic">share capital</div>
                <div className="ic">loan invesment</div>
                <div className="ic">total aspect</div>
                <div className="ic">share members</div>
              </div>
              <div className="dic-ic">
                <div className="ic">saving deposits</div>
                <div className="ic">profit loss</div>
                <div className="ic">liquidity</div>
                <div className="ic">bal member</div>
              </div>
            </section>
          </div>
        </div>
        </div>
    </>
  );
}

export default Content;
