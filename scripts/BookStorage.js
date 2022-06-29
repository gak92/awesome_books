export default class BookStorage {
  static saveData(dataObj) {
    const dataString = JSON.stringify(dataObj);
    localStorage.setItem('bookList', dataString);
  }

  static getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
