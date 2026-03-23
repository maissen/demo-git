function fetchUser(id) {
  return fetch("/api/users/" + id);
}

function fetchPosts() {
  return fetch("/api/posts");
}

function logout() {
  localStorage.clear();
}
