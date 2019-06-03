// question 1
let firstAnswer = document.querySelector(".left .answer");
firstAnswer.innerHTML = "Show first firstAnswer";
/**
 * Function main function
 * @params
 * @return
 */

async function firstQuestion() {
  let apiData = await getApiData();
  let localStorage = getStoredData();

  console.log("apiData: ", apiData);
  console.log("localStorage: ", localStorage);
  /*
  if (!localStorage || !deepCompare(apiData, localStorage)) {
  }*/
  sessionStorage.setItem("apiData", JSON.stringify(apiData));
  showData(JSON.parse(sessionStorage.getItem("apiData")));
}

async function getApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}

function getStoredData() {
  return sessionStorage.getItem("apiData");
}

function showData(arg) {
  let justText = "";
  for (let key in arg) {
    justText += `<li><span>${key}</span>: ${arg[key]}</li>`;
  }
  console.log("Answer content:", justText);
  firstAnswer.innerHTML = justText;
  return void 0;
}

function deepCompare(elem1, elem2) {
  // elem1: object
  // elem2: string
  console.log("ApiData", typeof elem1);
  console.log("StorageData", typeof elem2);
  if (elem1 === elem2) return true;
  if (
    elem1 == null ||
    typeof elem1 != "object" ||
    elem2 == null ||
    typeof elem2 != "object"
  )
    return false;
  for (let key2 in elem2) {
    if (!elem1.hasOwnProperty(key2) || !deepCompare(elem1[key2], elem2[key2]))
      return false;
  }

  return Object.keys(elem1).length == Object.keys(elem2).length;
}

firstQuestion();

// question 2
