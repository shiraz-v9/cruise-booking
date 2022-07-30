import React, { useEffect, useState } from "react";
import axios from "axios";
function Adventures() {
  const [Adventures, setAdventures] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://notion-api-teal.vercel.app/getblock/faad0fe56da1463c8851065f38f95292"
      )
      .then((res) => {
        let resp = res.data.results[0].code.text;
        resp.forEach((el) => {
          // console.log(JSON.parse(el.plain_text));

          setAdventures(JSON.parse(el.plain_text));
          setloading(false);
        });
      });
  }, []);

  var drop =
    Adventures !== ""
      ? Adventures.map((x, i) => {
          if (x !== null) {
            return (
              <div key={i}>
                <a href="https://www.mykindofcruise.com/book">
                  <img
                    src={x.image}
                    alt={i}
                    width="250"
                    height="150"
                    className="images"
                  />
                  <p>{x.headline}</p>
                </a>
              </div>
            );
          } else {
            return null;
          }
        })
      : null;

  {
    return !loading ? (
      <div className="d-flex flex-row home-containers">{drop}</div>
    ) : (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    );
  }
}

export default Adventures;
