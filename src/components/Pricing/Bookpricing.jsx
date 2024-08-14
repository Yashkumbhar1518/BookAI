import React, { useState } from "react";
import "./Bookpricing.css";

const Bookpricing = () => {
  const [darkmode, setDarkMode] = useState(false);

  const handleDarkmode = () => {
    setDarkMode(!darkmode);
  };

  return (
    
      <div
        className={`main-container ${darkmode ? "dark-mode" : "light-mode"}`}
      >
        <button className="btn-toggle" onClick={handleDarkmode}>
          {darkmode ? " Light Mode " : "Dark Mode"}
        </button>
        <div className="heading-start ">
          <h3 className="api-heading">API Pricing</h3>
          <p>
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
        </div>

        <div className="table-container">
          <table className="table">
            <thead className="table-head">
              <tr>
                <th scope="col">API</th>
                <th scope="col">MODEL</th>
                <th scope="col">PRICE PER 1K TOKENS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>GPT-3.5</td>
                <td>$0.002</td>
              </tr>
              <tr>
                <td>OpenAI</td>
                <td>GPT-$</td>
                <td>$0.03</td>
              </tr>
              <tr>
                <td>TogetherAI</td>
                <td>Llama-2-70b</td>
                <td>$0.0008</td>
              </tr>
              <tr>
                <td>TogetherAI</td>
                <td>Llama-2-13b</td>
                <td>$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="heading-bottom ">
          <h3 className="api-heading">Token Estimation</h3>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
        <div className="heading-bottom ">
          <h3 className="api-heading">Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    
  );
};

export default Bookpricing;
