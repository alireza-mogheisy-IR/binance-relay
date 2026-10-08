module.exports = async (req, res) => {
  try {
    const r = await fetch("https://fapi.binance.com/fapi/v1/ticker/24hr");
    const body = await r.text();
    res.status(r.status);
    res.setHeader("content-type", "application/json");
    res.send(body);
  } catch (e) {
    res.status(502).json({ error: String(e && e.message || e) });
  }
};
