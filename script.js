const card_footer_share = document.querySelector(".card_footer_share");
const card_footer_default = document.querySelector(".card_footer");
const card_footer_on_share = document.querySelector(".card_footer_on_share");
const card_footer_share_on_share = document.querySelector(
  ".card_footer_share_on_share"
);

card_footer_on_share.style.display = "none";

card_footer_share.addEventListener("click", function () {
  if (window.getComputedStyle(card_footer_on_share).display === "none") {
    card_footer_on_share.style.display = "flex";
    card_footer_default.style.display = "none";
  } else {
    card_footer_on_share.style.display = "none";
  }
});

card_footer_share_on_share.addEventListener("click", function () {
  if (window.getComputedStyle(card_footer_share_on_share).display === "flex") {
    card_footer_on_share.style.display = "none";
    card_footer_default.style.display = "flex";
  } else {
    card_footer_share_on_share.style.display = "flex";
  }
});
