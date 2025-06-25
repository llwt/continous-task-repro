import { lib2 } from './lib-2.js';
import * as fs from 'fs';
import * as path from 'path';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('lib2', () => {
  it('should work', () => {
    expect(lib2()).toEqual('lib-2');
  });

  it('should have docker setup file with correct content', () => {
    const dockerSetupFile = path.join(
      process.cwd(),
      'dist',
      'docker-setup.txt'
    );
    expect(fs.existsSync(dockerSetupFile)).toBe(true);
    const content = fs.readFileSync(dockerSetupFile, 'utf8').trim();
    expect(content).toBe('lib-2');
  });
  it('should sleep for 50 seconds', async () => {
    const start = Date.now();
    await sleep(50000);
    const end = Date.now();
    expect(end - start).toBeGreaterThan(50000);
  });
});
