function fetchUser(id) {
  return fetch("/api/users/" + id)
    .then(r => r.json());
}

function fetchPosts() {
  return fetch("/api/posts");
}

function logout() {
  localStorage.clear();
  window.location.href = "/login";
}