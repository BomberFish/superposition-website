function redirect(url) {
  let formattedURL = new URL(url);
  window.location.href = 'https:\/\/superposition.bomberfish.ca/?url=' + formattedURL.toString();
}
