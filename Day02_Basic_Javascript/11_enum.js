const browsers={
  CHROME: "chrome",
  FF: "firefox",
  EDGE: "edge",
  SAFARI: "safari"
};

let browser = browsers.CHROME;

function execute(){
  switch (browser) {
    case browsers.CHROME:
      console.log("execute on chrome");
      break;
  case browsers.FF:
      console.log("execute on firefox");
      break;
  case browsers.EDGE:
      console.log("execute on edge");
      break;
  case browsers.SAFARI:
        console.log("execute on safari");
        break;
  }
};

console.log(execute());
