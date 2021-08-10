import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    // eslint-disable-next-line no-console
    return read().then((response) => json(response)).then((response) => new GameSaving(response));
  }
}

GameSavingLoader.load();
