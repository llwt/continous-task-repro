import { lib1 } from './lib-1.js';
import * as fs from 'fs';
import * as path from 'path';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('lib1', () => {
  it('should work', () => {
    expect(lib1()).toEqual('lib-1');
  });

  it('should have docker setup file with correct content', () => {
    const dockerSetupFile = path.join(
      process.cwd(),
      'dist',
      'docker-setup.txt'
    );
    expect(fs.existsSync(dockerSetupFile)).toBe(true);
    const content = fs.readFileSync(dockerSetupFile, 'utf8').trim();
    expect(content).toBe('lib-1');
  });

  it('should sleep for 50 seconds', async () => {
    const start = Date.now();
    await sleep(50000);
    const end = Date.now();
    expect(end - start).toBeGreaterThan(50000);
  });
});
