document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.querySelector(".amount input");
  const fromSelect = document.querySelector("select[name='from']");
  const toSelect = document.querySelector("select[name='to']");
  const fromFlagImg = document.querySelector(".from .select-container img");
  const toFlagImg = document.querySelector(".to .select-container img");
  const convertBtn = document.querySelector("button");
  const messageDiv = document.querySelector(".msg");

  const currencyToCountry = {
    USD: "US", INR: "IN", EUR: "EU", GBP: "GB",
    AUD: "AU", CAD: "CA", JPY: "JP", CHF: "CH"
  };

  async function populateCurrencies() {
    try {
      const res = await fetch("https://api.frankfurter.app/latest");
      const data = await res.json(); // contains "rates"
      const currencies = Object.keys(data.rates).concat(data.base).sort();
      currencies.forEach(code => {
        const opt1 = document.createElement("option");
        opt1.value = code; opt1.textContent = code;
        fromSelect.appendChild(opt1);
        const opt2 = opt1.cloneNode(true);
        toSelect.appendChild(opt2);
      });
      fromSelect.value = "USD";
      toSelect.value = "INR";
      updateFlags();
    } catch (err) {
      console.error("Failed to load currencies", err);
    }
  }

  function updateFlags() {
    const f = currencyToCountry[fromSelect.value];
    const t = currencyToCountry[toSelect.value];
    fromFlagImg.src = f ? `https://flagsapi.com/${f}/flat/64.png` : "";
    toFlagImg.src = t ? `https://flagsapi.com/${t}/flat/64.png` : "";
  }

  async function convertCurrency() {
    let amount = parseFloat(amountInput.value);
    if (!isFinite(amount) || amount <= 0) amount = 1;

    const from = fromSelect.value;
    const to = toSelect.value;

    if (from === to) {
      messageDiv.textContent = `${amount} ${from} = ${amount.toFixed(2)} ${to}`;
      return;
    }

    const url = `https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const rate = data.rates[to];
      if (!rate) throw new Error("Rate not found");
      const converted = (amount * rate).toFixed(2);
      messageDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
    } catch (err) {
      console.error(err);
      messageDiv.textContent = "Error fetching rate.";
    }
  }

  fromSelect.addEventListener("change", updateFlags);
  toSelect.addEventListener("change", updateFlags);
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertCurrency();
  });

  populateCurrencies();
});
