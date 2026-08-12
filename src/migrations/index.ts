import * as migration_20260812_100924_initial from './20260812_100924_initial';

export const migrations = [
  {
    up: migration_20260812_100924_initial.up,
    down: migration_20260812_100924_initial.down,
    name: '20260812_100924_initial'
  },
];
