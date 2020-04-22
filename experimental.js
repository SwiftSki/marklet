//type in anything in quotes that comes after a case
function feat() {
  switch (prompt('service')) {
    case 'calculator':
      document.body.appendChild(document.createElement('script').src="https://swiftski.github.io/marklet/large-apps/calculator.js");
      break;
    case 'graphing calculator':
      document.body.appendChild(document.createElement('script').src="https://swiftski.github.io/marklet/large-apps/graphing-calculator.js");
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
      alert('this feature is currently broken');
      /*
      var mywindow = window.open("", "MsgWindow", "width=1000,height=1000");
      mywindow.document.write("<head></head><body><iframe width='100%' height='100%' src='https://youtube.com'></iframe></body>");
      */
    break;
    case 'edit page':
      javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
    break;
    case 'stop editing page':
      javascript:document.body.contentEditable = 'false'; document.designMode='off'; void 0
    break;

    default:
      alert('something went wrong.\nthis is not my fault, this is your fault.\nlook at\n https://bookmarklet.swiftski.repl.co/features.js\n for stuff to do with this');
      feat();
      break;
  }
}
feat();
