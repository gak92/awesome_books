export default class BookStorage {
  saveData(dataObj) {
    const dataString = JSON.stringify(dataObj);
    localStorage.setItem('bookList', dataString);
  }

  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
