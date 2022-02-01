import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

function Random() {
  const [element, setElement] = useState(false);
  const [random, setRandom] = useState([]);
  const [options, setOptions] = useState([]);
  const handlerClick = () => {
    setElement(true);
  };
  let elementHTML = (
    <React.Fragment>
      <h2 className="color-h2 mt-5">{random.exampleKey}</h2>
      <div className="d-flex justify-content-center text-center mt-3">
        <p className="mb-0 font-weight-bold">{random.title}</p>
        <div className="border-right-1 mx-4"></div>
        <p className="mb-0 font-weight-bold">{random.type}</p>
      </div>
      <p className="mt-4">{random.before}</p>
      <div class="form-check">
        {options.map((key, index) => {
          return (
            <div className="text-left mt-3" key={index}>
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id={key}
                value={key}
              />
              <label class="form-check-label" for={key}>
                {key}
              </label>
            </div>
          );
        })}
      </div>

      <p>{random.after}</p>
    </React.Fragment>
  );

  useEffect(() => {
    axios
      .get(`https://techwich.net/twapp/test_task/random_multi?format=json`)
      .then((response) => {
        setRandom(response.data);
        setOptions(response.data.options);
       
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div>
        <button
          onClick={handlerClick}
          className="btn btn-warning font-weight-bold px-4 text-dark mt-5"
        >
          RANDOM
        </button>
        {element === true ? elementHTML : ""}
      </div>
    </React.Fragment>
  );
}

export default Random;
