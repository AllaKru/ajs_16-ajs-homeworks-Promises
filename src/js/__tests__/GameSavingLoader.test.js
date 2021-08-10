
import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('работа класса', () => {
  GameSavingLoader.load().then((response) => {
    expect(response).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
  });
});
test('работа класса GameSave', () => {
  const obj = new GameSaving();
  GameSavingLoader.load().then(() => {
    expect(obj.save).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
  });
});
