import axios from "axios";
import React, { useEffect, useState } from "react";

function Popular() {
  const [ports, setports] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://notion-api-teal.vercel.app/getblock/cbfbebc9fbd243ff837ba1e665eef1d1"
      )
      .then((res) => {
        let resp = res.data.results[0].code.text;
        resp.forEach((el) => {
          //   console.log(JSON.parse(el.plain_text));
          setports(JSON.parse(el.plain_text));
          setloading(false);
        });
      });
  }, []);

  const drop =
    ports !== ""
      ? ports.map((x, i) => {
          return (
            <div key={i}>
              <figure>
                <img
                  src={x.image}
                  alt={i}
                  height="450"
                  width="253"
                  className="images"
                />
                <figcaption>
                  <p>{x.port}</p>
                  <p>{x.country}</p>
                </figcaption>
              </figure>
            </div>
          );
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

export default Popular;
