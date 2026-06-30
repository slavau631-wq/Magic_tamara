const PIXEL_ID = "1669633737452527";
const CLICK_DELAY_MS = 350;

function trackPixel(eventName) {
  if (typeof fbq === "function") {
    fbq("track", eventName, { pixel_id: PIXEL_ID });
  }
}

document.querySelectorAll(".js-track-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const eventName = link.dataset.event || "Lead";
    const eventLabel = link.dataset.label || "TelegramLinkClick";
    const url = link.href;
    const target = link.target;

    trackPixel(eventName);

    if (typeof fbq === "function") {
      fbq("trackCustom", eventLabel, { pixel_id: PIXEL_ID });
    }

    window.setTimeout(() => {
      if (target === "_blank") {
        window.open(url, "_blank", "noopener");
        return;
      }

      window.location.href = url;
    }, CLICK_DELAY_MS);
  });
});
