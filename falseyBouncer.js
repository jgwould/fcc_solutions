
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  //filters and removes everything that has a false parameter
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
