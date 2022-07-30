import { useEffect, useState } from "react";
import axios from "axios";
function Recommendations() {
  const [recommendations, setrecommendations] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://notion-api-teal.vercel.app/getblock/b107681434ba487997fe60bdb726696d"
      )
      .then((res) => {
        let resp = res.data.results[0].code.text;
        resp.forEach((el) => {
          //   console.log(JSON.parse(el.plain_text));

          setrecommendations(JSON.parse(el.plain_text));
          setloading(false);
        });
      });
  }, []);

  const drop =
    recommendations !== ""
      ? recommendations.map((x, i) => {
          if (x !== null) {
            return (
              <div key={i}>
                <a href="https://www.mykindofcruise.com/book">
                  <img src={x.image} alt={i} width="200px" height="112px" />
                  <p>{x.what}</p>
                  <p className="text-success">{x.price}</p>
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

export default Recommendations;
