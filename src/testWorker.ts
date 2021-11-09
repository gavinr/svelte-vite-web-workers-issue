const getData = async (testInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(testInput + ' results');
    }, 4000);
  });
};

onmessage = function (e) {
  console.log('Worker starting');
  getData(e.data).then((response) => {
    postMessage(response);
  });
}
export { };