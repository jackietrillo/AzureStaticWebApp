import quoteData from "../Data/quoteData";

function Quote() {
  const randomIndex = Math.floor(Math.random() * quoteData.length);
  const quote = quoteData[randomIndex];
  return (
    <>
      <section className="py-5 text-center">
        <small>Zen Quotes</small>
        <h5>
          <i>{quote.q}</i>
        </h5>
        <small>
          <center>-{quote.a}</center>
        </small>
      </section>
    </>
  );
}

export default Quote;
