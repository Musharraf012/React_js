import React, { useState } from "react";
import reviews from "./reviewsjsn";
export default function Displayreviews() {
  let [index, setData] = useState(0); //in starting index = 0
  // console.log(index)
  let prev = () => {
    console.log(index);
    console.log(reviews.length);
    setData(index - 1);
    if (index <= 0) {
      setData(reviews.length - 1);
    }
  };
  let next = () => {
    console.log(index);
    console.log(reviews.length);
    setData(index + 1);
    if (index == reviews.length - 1) {
      setData(0);
    }
  };
  let cli = () => {
    setData(0);
  };
  return (
    <div>
      {
        <main>
          <section class="container">
            <div class="title">
              <h2>our reviews</h2>
              <div class="underline"></div>
            </div>

            <article class="review">
              <div class="img-container">
                <img src={reviews[index].image} id="person-img" alt="" />
              </div>
              <h4 id="author">{reviews[index].name}</h4>
              <p id="job">{reviews[index].job}</p>
              <p id="info">{reviews[index].text}</p>

              <div class="button-container">
                <button class="prev-btn" onClick={prev}>
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button class="next-btn" onClick={next}>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <button class="random-btn" onClick={cli}>
                surprise me
              </button>
            </article>
          </section>
        </main>
      }
    </div>
  );
}
