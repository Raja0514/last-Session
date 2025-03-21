function fetchData(callback) {
    setTimeout(() => {
      callback("Data fetched!");
    }, 2000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      callback(data + " Processed!");
    }, 1000);
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  fetchData((data) => {
    processData(data, (processedData) => {
      displayData(processedData);
    });
  });

  
  