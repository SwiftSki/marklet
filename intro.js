var userId = {
  0: "",
  1: "Ian Swift",
  2: "tester",
  69: "Josh Duran",
  420: "Chris Shcembri",
  4602: "Kellen Bernstein",
  8068: "Ean Nickols",
  7 : "Ben Tolk",
  5 : "Sean Peterson",
  1234 : "Grayson Weisner"
};
var name = userId[n].split(" ").shift();
if (n > 0) {
  if (n > 1) {
    var errorz = confirm('by clicking ok, you are responsible for any and all trouble you get yourself into by using this script. \nyou also agree not to say my name in any case of trouble in relation to use of my bookmark');
    if (errorz === true) {
      alert('hello, ' + name);
      var feature = document.createElement('script');
      feature.src = "https://bookmarklet.swiftski.repl.co/features.js";
      document.body.appendChild(feature);
    }
    else {
      alert('my apologies for any inconviences');
    }
  }
  if (n === 1) {
    if (pw === 1786234) {
      alert('hello, ' + name)
      var feature = document.createElement('script');
      feature.src = "https://bookmarklet.swiftski.repl.co/experimental.js";
      document.body.appendChild(feature);
    }
    else {
      alert('something went wrong\nsecurity activating');
      var feature = document.createElement('script');
      feature.src = "https://bookmarklet.swiftski.repl.co/security.js";
      document.body.appendChild(feature);
    }
  }
}
else {
  alert('please access with the bookmark');
}
