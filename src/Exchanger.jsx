import React from "react";

export default function Exchanger() {
  const [amount, setAmount] = React.useState(1);
  const [from, setFrom] = React.useState("EUR");
  const [to, setTo] = React.useState("USD");
  const [converted, setConverted] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await response.json();
        setConverted(data.rates[to]);
        setIsLoading(false);
      }
      if (from === to) {
        return setConverted(amount);
      }
      convert();
    },
    [amount, from, to]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <Spacer height="10px" />
      <p>
        {converted} {to}
      </p>
    </div>
  );
}

function Spacer({ height = "10px" }) {
  return <div style={{ height }} />;
}
