import React, { useEffect, useState } from "react";
import axios from "axios";
function Blogs() {
  const [blog, setblog] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://notion-api-teal.vercel.app/getblock/9f7b48e013b1479ea57b6444d932be6a"
      )
      .then((res) => {
        let resp = res.data.results[0].code.text;
        resp.forEach((el) => {
          //   console.log(JSON.parse(el.plain_text));

          setblog(JSON.parse(el.plain_text));
          setloading(false);
        });
      });
  }, []);

  const drop =
    blog !== ""
      ? blog.map((x, i) => {
          if (x !== null) {
            return (
              <div key={i} className="content-map">
                <a href={x.link}>
                  <p>{x.name.substring(0, 20)}</p>

                  <i>{x.meta.substring(0, 29)}...</i>
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

export default Blogs;
