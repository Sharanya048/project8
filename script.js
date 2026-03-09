function fun() {
  // Create image
  const image = document.createElement('img');
  image.src = "./krishna.webp";
  image.height = 200;
  image.alt = "krishna";

  // Create title
  const title = document.createElement('h2');
  title.textContent = "RadhaKrishna";

  // Create link
  const link = document.createElement('a');
  link.href = "https://www.meesho.com/little-krishna-with-cow-poster-for-home-decor-hd-poster-for-room-living-room-bedroom-mandir-room-walls-poster-300-gsm-photographic-paper-12-inches-x-18-inches-rolled-in-safety-tube/p/7n7g8g?srsltid=AfmBOorjvNlgnpkJEN3PV7-fBIxi-yUtwfT8WQi9pW6Slko_ppfGVcZO";
  link.textContent = "View Poster"; // visible text

  // Create card container
  const card = document.createElement('div');
  card.append(image, title, link);

  // Add card to page
  document.body.appendChild(card);
}