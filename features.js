//type in anything in quotes that comes after a case
function feat() {
  switch (prompt('service')) {
    case 'calculator':
      var hi = document.createElement('iframe');
      hi.src = "https://www.desmos.com/scientific";
      hi.style.background = 'blue';
      hi.style.position = 'fixed';
      hi.style.width = '30%';
      hi.style.height = '50%';
      hi.style.top = '40%';
      hi.style.left = '70%'; hi.id = 'hi';
      document.body.appendChild(hi);
      break;
    case 'graphing calculator':
      var hi = document.createElement('iframe');
      hi.src = "https://www.desmos.com/calculator";
      hi.style.background = 'blue';
      hi.style.position = 'fixed';
      hi.style.width = '50%';
      hi.style.height = '50%';
      hi.style.top = '40%';
      hi.style.left = '50%';
      document.body.appendChild(hi);
      break;
    case 'remove iframes':
      var x = document.createElement('script');
      x.src = 'https://code.jquery.com/jquery-3.4.1.js';
      document.body.appendChild(x);
      $('iframe').remove();
      feat();
      break;
    case 'drednot':
      var mywindow = window.open("", "MsgWindow", "width=1000,height=1000");
      mywindow.document.write("<body><iframe src='https://drednot.io' width='100%' height='100%'></iframe></body>");
      break;
    case 'unblock':
      var url = prompt('insert url', 'https://');
      var mywindow = window.open('', "MsgWindow", "width=1000,height=1000");
      mywindow.document.write('<style>iframe{width:100%; height:100%; top:0px; left:0px;}</style><iframe src="' + url + '"></iframe');
      break;
    case 'n-gon':
      var mywindow = window.open("", "MsgWindow", "width=1000,height=1000");
      mywindow.document.write("<head><style>iframe{width=100%;height=100%;border:none;}</style></head><body><iframe width='100%' height='100%' src='https://landgreen.github.io/sidescroller/index.html'></iframe></body>");
      break;
    case 'krunker':
      var mywindow = window.open("", "MsgWindow", "width=1000,height=1000");
      mywindow.document.write("<head></head><body><iframe width='100%' height='100%' src='https://krunker.io'></iframe></body>");
      break;
    case 'exit':
      alert('exiting');
    break;
    case 'crosh':
      alert('this is broken\nclick on the url bar and hit enter to activate');
      window.open('chrome-extension://nkoccljplnhpfnfiajclkommnmllphnl//html/crosh.html');
    break;
    case 'insert html':
      prompt();
    break;
    case '':
      alert('you need to type something for me to know what to do');
      feat();
    break;
    case 'fuck you':
      alert('nou');
      feat();
    break;
    case 'view cookies':
      alert(document.cookie);
      feat();
    break;
    case 'youtube':
      var mywindow = window.open("", "MsgWindow", "width=1000,height=1000");
      mywindow.document.write("<head></head><body><iframe width='100%' height='100%' src='https://youtube.com'></iframe></body>");
    break;

    default:
      alert('somethhing went wrong.\nthis is not my fault, this is your fault.\nlook at\n https://bookmarklet.swiftski.repl.co/features.js\n for stuff to do with this');
      feat();
      break;
  }
}
feat();
